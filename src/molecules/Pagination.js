import Image from "next/image";
import PropTypes from "prop-types";

const noop = () => {};
const MAX_VISIBLE_PAGES = 5;

const Pagination = ({
  paginationClass,
  onPageChange,
  totalPages,
  selectedPage,
  setSelectedPage,
  paginationLabel,
}) => {
  const normalState =
    "flex items-center justify-center text-sm text-neutral-900 w-8 h-8 mx-1 border border-neutral-400 rounded";
  const ellipsisState =
    "flex items-end justify-center text-sm text-neutral-900 w-7 h-8  bg-lightGrey";

  if (selectedPage < 1) {
    selectedPage = 1;
  }

  const totalPageArray = Array.from({ length: totalPages }, (_, i) => i + 1);
  const visiblePages = totalPageArray.slice(
    Math.max(0, selectedPage - 2),
    selectedPage + 3
  );
  const showPrev = selectedPage > 1;
  const showNext = selectedPage < totalPages;
  const showFirstPage = selectedPage > 3;
  const showLastPage = selectedPage < totalPages - 2;

  const handlePageClick = (page) => {
    setSelectedPage(page);
    onPageChange(page);
  };

  const handlePrevClick = () => {
    handlePageClick(selectedPage - 1);
  };

  const handleNextClick = () => {
    handlePageClick(selectedPage + 1);
  };

  return (
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
                if (key === "Enter" && showPrev) {
                  handlePrevClick();
                }
              }}
              className={`${normalState} ${
                !showPrev && "opacity-50 pointer-events-none"
              }`}
            >
              <Image src="/images/icons/angle-left.svg" width="6" height="10" />
            </span>
          </li>

          {showFirstPage && (
            <>
              <li>
                <span
                  role="button"
                  tabIndex={0}
                  aria-label="First page"
                  onClick={() => handlePageClick(1)}
                  onKeyUp={({ key }) => {
                    if (key === "Enter") {
                      handlePageClick(1);
                    }
                  }}
                  className={`${normalState}`}
                >
                  1
                </span>
              </li>
              <li className={`${ellipsisState}`}>
                <div className="ellipsis">&hellip;</div>
              </li>
            </>
          )}

          {visiblePages.map((page) => (
            <li key={page}>
              <span
                role="button"
                tabIndex={0}
                className={`${normalState} ${
                  page === selectedPage
                    ? "border-primary-900 text-primary-900"
                    : ""
                }`}
                onClick={() => handlePageClick(page)}
                onKeyUp={({ key }) => {
                  if (key === "Enter") {
                    handlePageClick(page);
                  }
                }}
                aria-label={`Page ${page}`}
                aria-current={page === selectedPage && "page"}
              >
                {page}
              </span>
            </li>
          ))}

          {showLastPage && (
            <>
              <li className={`${ellipsisState}`}>
                <div className="ellipsis">&hellip;</div>
              </li>
              <li>
                <span
                  role="button"
                  tabIndex={0}
                  aria-label="Last page"
                  onClick={() => handlePageClick(totalPages)}
                  onKeyUp={({ key }) => {
                    if (key === "Enter") {
                      handlePageClick(totalPages);
                    }
                  }}
                  className={`${normalState}`}
                >
                  {totalPages}
                </span>
              </li>
            </>
          )}

          <li>
            <span
              role="button"
              tabIndex={0}
              aria-disabled={!showNext}
              aria-label="Next page"
              onClick={handleNextClick}
              onKeyUp={({ key }) => {
                if (key === "Enter" && showNext) {
                  handleNextClick();
                }
              }}
              className={`${normalState} ${
                !showNext && "opacity-50 pointer-events-none"
              }`}
            >
              <Image
                src="/images/icons/angle-right.svg"
                width="6"
                height="10"
              />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Pagination.defaultProps = {
  paginationClass: "",
  onPageChange: noop,
  totalPages: 1,
  selectedPage: 1,
  setSelectedPage: () => {},
  paginationLabel: "",
};

Pagination.propTypes = {
  paginationClass: PropTypes.string,
  onPageChange: PropTypes.func,
  totalPages: PropTypes.number,
  selectedPage: PropTypes.number,
  setSelectedPage: PropTypes.func,
  paginationLabel: PropTypes.string,
};

export default Pagination;
