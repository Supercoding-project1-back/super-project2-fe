import React from "react";
import styles from "./Pagination.module.scss";

function Pagination({className, total, limit, page, setPage}) {

    const numPages = Math.ceil(total/limit);
    const maXDisplayedPages = 5;

    const currentPageGroup = Math.ceil(page / maXDisplayedPages );
    let startPage = ((currentPageGroup - 1) * maXDisplayedPages + 1);
    let endPage = Math.min(startPage + maXDisplayedPages - 1, numPages);

    const handlePrev = () => {
        const prevPageGroupStart = Math.max(1, startPage - maXDisplayedPages);
        setPage(prevPageGroupStart);
    };

    const handleNext = () => {
        const nextPageGroupStart = Math.min(endPage + 1, numPages);
        setPage(nextPageGroupStart);
    };

    return (
        <div className={`${className} ${styles.pagination}`}>
            <button onClick={() => setPage(1)}
                    className={`${styles.button} ${page === 1 ? styles.disabled : ''}`}
                    disabled={page === 1}>
                &lt;&lt;
            </button>
            <button onClick={handlePrev}
                    className={`${styles.button} ${page === 1 ? styles.disabled : ''}`}
                    disabled={page === 1}>
                &lt;
            </button>

            {Array.from({length: Math.min(endPage - startPage + 1, maXDisplayedPages)}, (_, i) => (
                <button key={startPage + i}
                        onClick={() => setPage(startPage + i)}
                        className={`${styles.button} ${page === startPage + i ? styles.current : ''}`}>
                    {startPage + i}
                </button>
            ))}

            <button onClick={handleNext}
                    className={`${styles.button} ${page === numPages ? styles.disabled : ''}`}
                    disabled={page === numPages}>
                &gt;
            </button>
            <button onClick={() => setPage(numPages)}
                    className={`${styles.button} ${page === numPages ? styles.disabled : ''}`}
                    disabled={page === numPages}>
                &gt;&gt;
            </button>

        </div>
    )
}

export default Pagination;