import Image from "next/image";
import PropTypes from "prop-types";

const File = ({ isIcon, fileType, isTitle, title }) => {
  const fileTypeIcon = {
    pdf: "pdf.svg",
    doc: "doc.svg",
    excel: "excel.svg",
  };
  return (
    <div className="text-sm font-normal flex flex-col justify-center p-4 bg-white border border-gray-300 rounded min-h-[160px] max-w-[150px] tracking-tight">
      {isIcon && (
        <span className="block mb-4">
          <Image
            src={`images/icons/${fileTypeIcon[fileType]}`}
            width="20"
            height="20"
            alt="icon"
          />
        </span>
      )}
      {isTitle && title}
    </div>
  );
};

File.defaultProps = {
  isIcon: true,
  fileType: "pdf",
  isTitle: true,
  title: "Fundamentals of Design & strategy",
};

File.propTypes = {
  isIcon: PropTypes.bool,
  fileType: PropTypes.oneOf(["pdf", "doc", "excel"]),
  isTitle: PropTypes.bool,
  title: PropTypes.string,
};

export default File;
