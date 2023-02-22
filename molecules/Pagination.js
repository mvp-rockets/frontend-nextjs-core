import Image from "next/image";
import PropTypes from "prop-types";
import React from "react";
import IcomoonIcon from "../atoms/IcomoonIcon";
const noop = () => { };
const MAX_VISIBLE_PAGES = 5;

export const _getAttributes = (
  totalPages,
  selectedPage = 1,
  segmentSize = MAX_VISIBLE_PAGES
) => {
  const pageSegments = [...new Array(totalPages)]
    .map((p, i) => i + 1) // [1,2,3,4,5,6,7, ...]
    .reduce((segments, page, i) => {
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

  const firstPage = !visiblePages.includes(1) && 1;
  const lastPage = !visiblePages.includes(totalPages) && totalPages;

  return {
    visiblePages,
    selectedIndex,
    firstPage,
    lastPage,
    showPrev,
    showNext,
  };
};

const Pagination = ({
  paginationClass = "",
  onPageChange = noop,
  totalPages = 1,
  defaultSelectedPage = 1,
  selectedPage,
  setSelectedPage,
  paginationLabel,
}) => {
  const normalState =
    "flex items-center justify-center text-sm text-neutral-900 w-8 h-8 mx-1 border border-neutral-400 rounded";
  const ellipsisState =
    "flex items-end justify-center text-sm text-neutral-900 w-7 h-8  bg-lightGrey";
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
  console.log("get attribute after", selectedPage);

  const handlePageClick = ({ target }) => {
    const page = parseInt(target.dataset.page, 10);
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
    <div>
      <div
        className={`flex flex-wrap items-center justify-center md:justify-between${paginationClass}`}
      >
        {paginationLabel && (
          <div className="text-sm text-neutral-600 mb-4 md:mb-0 ">
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
                  if (key === "Enter") {
                    handlePrevClick();
                  }
                }}
                className={`${normalState} ${!showPrev && "opacity-50 pointer-events-none"
                  }`}
              >
                <IcomoonIcon icon="angle-left" size={12} />
              </span>
            </li>

            {firstPage && (
              <li className="">
                <span
                  role="button"
                  tabIndex={0}
                  aria-label="First page"
                  onClick={handlePageClick}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      handlePageClick(e);
                    }
                  }}
                  data-page={firstPage}
                  className={`${normalState}`}
                >
                  {firstPage.toString()}
                </span>
              </li>
            )}
            {firstPage && (
              <li className={`${ellipsisState} `}>
                <div className="ellipsis">&hellip;</div>
              </li>
            )}

            {visiblePages.map((page, i) => (
              <li>
                <span
                  role="button"
                  tabIndex={0}
                  className={`${normalState} ${i === selectedIndex && "border-primary-900 text-primary-900"
                    }`}
                  data-page={page}
                  onClick={handlePageClick}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      handlePageClick(e);
                    }
                  }}
                  aria-label={`Page ${page}`}
                  aria-current={i === selectedIndex && "page"}
                >
                  {page.toString()}
                </span>
              </li>
            ))}

            {lastPage && (
              <li className={`${ellipsisState}`}>
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
                    if (e.key === "Enter") {
                      handlePageClick(e);
                    }
                  }}
                  data-page={lastPage}
                  className={`${normalState}`}
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
                  if (key === "Enter") {
                    handleNextClick();
                  }
                }}
                className={`${normalState} ${!showNext && "opacity-50 pointer-events-none"
                  }`}
              >
                <IcomoonIcon icon="angle-right" size={12} />
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  defaultSelectedPage: PropTypes.number,
  onPageChange: PropTypes.func,
  paginationLabel: PropTypes.string,
};

export default Pagination;
