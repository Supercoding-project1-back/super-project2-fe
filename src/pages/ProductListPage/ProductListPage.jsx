import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ProductListPage.scss";
import {Pagination, SearchField} from "../../components/Core";

function ProductListPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [productList, setProductList] = useState([]);
    const [total, setTotal] = useState(0);
    const [size, setSize] = useState(6);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");

    const requestProductList = async (searchKeyword) => {
        try {
            const response = await fetch(`http://localhost:8080/products?${searchKeyword}`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("데이터를 불러오는 데에 실패했습니다");
            }
            return await response.json();
        } catch (error) {
            alert("상품 목록 조회에 실패하였습니다. 잠시 후 다시 시도해 주세요.");
            console.error(error);
        }
    };

    const initProductList = useCallback(async (searchKeyword) => {
        const data = await requestProductList(searchKeyword);
        if (!data) return;

        const pagination = data.pagination;
        setTotal(pagination.totalCount);
        setPage(pagination.page);
        setSize(pagination.size);

        const productsList = data.elements
            .filter(product => product.productName.includes(searchTerm))
            .map(product => ({
                productId: product.productId,
                productName: product.productName,
                productPrice: product.productPrice,
                imageList: product.imageList
            }));
        setProductList(productsList);
        setTotal(pagination.totalCount);
    }, [searchTerm]);

    const pageClickHandler = async (newPage) => {
        setPage(newPage);
        const searchKeyword = new URLSearchParams({ page: newPage, size, search: searchTerm });
        initProductList(searchKeyword);
    }

    const productClickHandler = (productId) => {
        navigate(`mainpage/${productId}`);
    }

    // useEffect(() => {
    //     const params = new URLSearchParams(location.search);
    //     const searchKeyword = new URLSearchParams({ page, size, category: params.get("category") || "" });
    //     initProductList(searchKeyword);
    // }, [location.search, initProductList]);

    return (
        <>
            <div className={styles["content"]}>
                <div className={styles["card"]}>
                    <div className={styles["search-section"]}>
                        <SearchField
                            label={"검색어를 입력해 주세요."}
                            value={searchTerm}
                            className={styles["search-field"]}
                            onChange={value => setSearchTerm(value)}
                            onKeyUp={event => {
                                if (event.key === "Enter") {
                                    const searchKeyword = new URLSearchParams({ page, size });
                                    initProductList(searchKeyword);
                                }
                            }}
                        />
                    </div>
                    <div className={styles["container"]}>
                        {productList.map((product, index) => (
                            <div className={styles["grid-container"]} key={index}>
                                <a href={`mainpage/${product.productId}`}
                                   onClick={() => productClickHandler(product.productId)}>
                                    {product.imageList && product.imageList.length > 0 ? (
                                        <img
                                            src={product.imageList[0].image}
                                            alt={`${product.productName} image`} />
                                    ) : (
                                        <div className={styles["no-image"]}> No Image</div>
                                    )}
                                    <div className={styles["product-info"]}>
                                        <span className={styles["product-name"]}>{product.productName}</span>
                                        <span className={styles["product-price"]}>{product.productPrice.toLocaleString()}원</span>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <Pagination
                    className={styles["pagination"]}
                    total={total}
                    limit={size}
                    page={page}
                    setPage={pageClickHandler} />
            </div>
        </>
    );
}

export default ProductListPage;
