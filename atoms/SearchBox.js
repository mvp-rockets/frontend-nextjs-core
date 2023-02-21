import IcomoonIcon from "./IcomoonIcon";
import InputBox from "./InputBox";
import PropTypes from "prop-types";

const SearchBox = ({
    register,
    value,
    variant = "Default",
    iconPosition = "left",
    clearSearchIcon,
    onClearSearch
}) => {
    return (
        <div className="relative">
            <IcomoonIcon
                icon="search"
                size="13"
                class={`absolute z-10 ${iconPosition == "left" ? "left-3 " : "right-3 "} ${(variant === "Default") && "top-4"} ${(variant === "Small") && "top-3.5"} ${(variant === "Large") && "top-[18px]"}`}
            />

            <InputBox
                id="name"
                name="search"
                type="text"
                inputStyle="small"
                placeholder="Search..."
                className={`${iconPosition == "left" ? "px-9" : "pr-12"}`}
                register={register}
                variant={variant}
                isLabel={false}
                value={value}
            />

            {clearSearchIcon &&
                <IcomoonIcon
                    icon="close-b"
                    size="12"
                    onClick={onClearSearch}
                    color="#9C9CAF"
                    className={`cursor-pointer absolute top-4  ${iconPosition == "left" ? "right-3 " : "right-8"}`}
                />
            }
        </div>
    );
}
export default SearchBox;
SearchBox.propTypes = {
    register: PropTypes.func,
    iconPosition: PropTypes.string,
    clearSearchIcon: PropTypes.bool,
    onClearSearch: PropTypes.func,
    variant: PropTypes.string,
}