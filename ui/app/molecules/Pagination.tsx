import Image from 'next/image';
import React from 'react';

const MAX_VISIBLE_PAGES = 5;

interface PaginationProps {
    defaultSelectedPage?: number;
    paginationLabel?: string;
    totalPages: number;
    className?: string;
    selectedPage: number;
    setSelectedPage: (page: number) => void;
    onPageChange?: (page: number) => void;
}

export const _getAttributes = (
    totalPages: number,
    selectedPage: number = 1,
    segmentSize: number = MAX_VISIBLE_PAGES
) => {
    const pageSegments = [...new Array(totalPages)]
        .map((p, i) => i + 1)
        .reduce<number[][]>((segments, page, i) => {
            const segmentIndex = Math.floor(i / segmentSize);
            if (!segments[segmentIndex]) {
                segments[segmentIndex] = [];
            }
            segments[segmentIndex].push(page);
            return segments;
        }, []);

    const visiblePages = pageSegments.filter((segment) =>
        segment.includes(selectedPage)
    )[0];
    const selectedIndex = visiblePages.indexOf(selectedPage);

    const showPrev = !visiblePages.includes(1);
    const showNext = !visiblePages.includes(totalPages);

    const firstPage = !visiblePages.includes(1) ? 1 : undefined;
    const lastPage = !visiblePages.includes(totalPages) ? totalPages : undefined;

    return {
        visiblePages,
        selectedIndex,
        firstPage,
        lastPage,
        showPrev,
        showNext,
    };
};

const Pagination: React.FC<PaginationProps> = ({
    defaultSelectedPage = 1,
    paginationLabel,
    totalPages = 1,
    className,
    selectedPage,
    setSelectedPage = () => { },
    onPageChange = () => { },
}) => {
    const normalState = 'flex items-center justify-center text-sm text-neutral-900 w-8 h-8 mx-1 border border-neutral-400 rounded';
    const ellipsisState = 'flex items-end justify-center text-sm text-neutral-900 w-7 h-8';

    if (defaultSelectedPage > totalPages || defaultSelectedPage < 1) {
        defaultSelectedPage = 1;
    }
    if (totalPages < 1) {
        totalPages = 1;
    }

    const {
        visiblePages,
        selectedIndex,
        showPrev,
        showNext,
        firstPage,
        lastPage,
    } = _getAttributes(totalPages, selectedPage);

    const handlePageClick = (event: any) => {
        // KeyboardEvent<HTMLSpanElement>
        const page = parseInt(event.currentTarget.dataset.page || '0', 10);
        setSelectedPage(page);
        onPageChange(page);
    };

    const handlePrevClick = () => {
        const newSelectedPage = selectedPage - 1;
        setSelectedPage(newSelectedPage);
        onPageChange(newSelectedPage);
    };

    const handleNextClick = () => {
        const newSelectedPage = selectedPage + 1;
        setSelectedPage(newSelectedPage);
        onPageChange(newSelectedPage);
    };

    return (
        <div className={`flex flex-wrap items-center justify-center md:justify-between ${className || ''}`}>
            {paginationLabel && (
                <div className="text-sm text-neutral-600 mb-4 md:mb-0">
                    {paginationLabel}
                </div>
            )}
            <nav aria-label="pagination">
                <ul className="flex">
                    <li>
                        <span
                            role="button"
                            tabIndex={0}
                            aria-disabled={!showPrev}
                            aria-label="Previous page"
                            onClick={handlePrevClick}
                            onKeyUp={({ key }) => {
                                if (key === 'Enter') {
                                    handlePrevClick();
                                }
                            }}
                            className={`${normalState} ${!showPrev && 'opacity-50 pointer-events-none'}`}
                        >
                            <Image src="/images/icons/angle-left.svg" alt="" width={24} height={24} />
                        </span>
                    </li>

                    {firstPage && (
                        <li>
                            <span
                                role="button"
                                tabIndex={0}
                                aria-label="First page"
                                onClick={handlePageClick}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        handlePageClick(e);
                                    }
                                }}
                                data-page={firstPage}
                                className={normalState}
                            >
                                {firstPage.toString()}
                            </span>
                        </li>
                    )}
                    {firstPage && (
                        <li className={ellipsisState}>
                            <div className="ellipsis">&hellip;</div>
                        </li>
                    )}

                    {visiblePages.map((page, i) => (
                        <li key={page}>
                            <span
                                role="button"
                                tabIndex={0}
                                className={`${normalState} ${i === selectedIndex && 'border-primary-900 text-primary-900'}`}
                                data-page={page}
                                onClick={handlePageClick}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        handlePageClick(e);
                                    }
                                }}
                                aria-label={`Page ${page}`}
                                aria-current={i === selectedIndex ? 'page' : undefined}
                            >
                                {page.toString()}
                            </span>
                        </li>
                    ))}

                    {lastPage && (
                        <li className={ellipsisState}>
                            <div className="ellipsis">&hellip;</div>
                        </li>
                    )}
                    {lastPage && (
                        <li>
                            <span
                                role="button"
                                tabIndex={0}
                                aria-label="Last page"
                                onClick={handlePageClick}
                                onKeyUp={(e) => {
                                    if (e.key === 'Enter') {
                                        handlePageClick(e);
                                    }
                                }}
                                data-page={lastPage}
                                className={normalState}
                            >
                                {lastPage.toString()}
                            </span>
                        </li>
                    )}

                    <li>
                        <span
                            role="button"
                            tabIndex={0}
                            aria-disabled={!showNext}
                            aria-label="Next page"
                            onClick={handleNextClick}
                            onKeyUp={({ key }) => {
                                if (key === 'Enter') {
                                    handleNextClick();
                                }
                            }}
                            className={`${normalState} ${!showNext && 'opacity-50 pointer-events-none'}`}
                        >
                            <Image src="/images/icons/angle-right.svg" alt="" width={24} height={24} />
                        </span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
