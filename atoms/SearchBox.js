import Image from "next/image";
import PropTypes from "prop-types";
import InputBox from "./InputBox";

const SearchBox = ({
  register,
  value,
  iconPosition,
  clearSearchIcon,
  onClearSearch,
}) => {
  return (
    <div className="relative">
      <Image
        src="/images/icons/search-icon.svg"
        width="13"
        height="13"
        class={`absolute top-4 z-10 ${
          iconPosition == "left" ? "left-3 " : "right-3 "
        }`}
      />

      <InputBox
        id="name"
        name="search"
        type="text"
        inputStyle="small"
        placeholder="Search..."
        className={`${iconPosition == "left" ? "px-9" : "pr-12"}`}
        register={register}
        variant="Default"
        isLabel={false}
        value={value}
      />

      {clearSearchIcon && (
        <Image
          src="/images/icons/close-b.svg"
          width="12"
          height="12"
          size="12"
          onClick={onClearSearch}
          className={`cursor-pointer absolute top-4  ${
            iconPosition == "left" ? "right-3 " : "right-8"
          }`}
        />
      )}
    </div>
  );
};
export default SearchBox;
SearchBox.defaultProps = {
  register: () => {},
  value: "",
  iconPosition: "left",
  clearSearchIcon: true,
  onClearSearch: () => {},
};
SearchBox.propTypes = {
  register: PropTypes.func,
  value: PropTypes.string,
  iconPosition: PropTypes.string,
  clearSearchIcon: PropTypes.bool,
  onClearSearch: PropTypes.func,
};
