import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./ProductListPage.module.scss";
import { Pagination } from "../../components/Core";

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
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/items?${searchKeyword}`, {
                method: "GET",
            });
            if (!response.ok) {
                throw new Error("데이터를 불러오는 데에 실패했습니다");
            }
            const data = await response.json();
            console.log("API Response:", data);
            return data;
        } catch (error) {
            alert("상품 목록 조회에 실패하였습니다. 잠시 후 다시 시도해 주세요.");
            console.error(error);
        }
    };

    const initProductList = useCallback(async (searchKeyword) => {
        const data = await requestProductList(searchKeyword);
        if (!data) return;

        if (data.totalElements !== undefined && data.content) {
            setTotal(data.totalElements);
            setSize(data.size);
            setPage(data.number + 1);

            const productsList = data.content
                .filter(product => product.name.includes(searchTerm))
                .map(product => ({
                    productId: product.id,
                    productName: product.name,
                    productPrice: product.price,
                    imageList: product.files.map(file => ({ image: `${process.env.REACT_APP_API_URL}${file.fileUrl}` }))
                }));
            setProductList(productsList);
        } else {
            console.error("올바른 데이터 형식이 아닙니다.");
        }
    }, [searchTerm]);

    const pageClickHandler = async (newPage) => {
        setPage(newPage);
        const searchKeyword = new URLSearchParams({ page: newPage - 1, size, search: searchTerm }).toString();
        initProductList(searchKeyword);
    };

    const productClickHandler = (productId) => {
        navigate(`${productId}`);
    };

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const search = params.get("search") || "";
        setSearchTerm(search);
        const searchKeyword = new URLSearchParams({ page: page - 1, size, search }).toString();
        initProductList(searchKeyword);
    }, [location.search, initProductList, page, size]);

    return (
        <div className={styles["content"]}>
            <div className={styles["card"]}>
                <div className={styles["container"]}>
                    {productList.length > 0 ? (
                        productList.map((product, index) => (
                            <div className={styles["gridItem"]} key={index}>
                                <a href={`/${product.productId}`}
                                    onClick={() => productClickHandler(product.productId)}>
                                    {product.imageList && product.imageList.length > 0 ? (
                                        <div className={styles["imgWrap"]}>
                                            <img
                                                className={styles.img}
                                                src={product.imageList[0].image}
                                                alt={`${product.productName} image`} />
                                        </div>
                                    ) : (
                                        <div className={styles["noImage"]}> No Image</div>
                                    )}
                                    <div className={styles["productInfo"]}>
                                        <span className={styles["productName"]}>{product.productName}</span>
                                        <span className={styles["productPrice"]}>{product.productPrice.toLocaleString()}원</span>
                                    </div>
                                </a>
                            </div>
                        ))
                    ) : (
                        <div className={styles["noProducts"]}>상품이 없습니다.</div>
                    )}
                </div>
            </div>
            <Pagination
                className={styles["pagination"]}
                total={total}
                limit={size}
                page={page}
                setPage={pageClickHandler} />
        </div>
    );
}

export default ProductListPage;