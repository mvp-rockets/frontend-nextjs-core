import Image from "next/image";
import PropTypes from "prop-types";
import { useState } from "react";
import Text from "../atoms/Text";

const FileUpload = ({ isError }) => {
  const [file, setFile] = useState([]);

  const uploadSingleFile = (e) => {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
  };

  const deleteFile = (e) => {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
  };

  return (
    <div className="flex flex-wrap -mx-2">
      {file.length > 0 &&
        file.map((item, index) => {
          return (
            <div
              className="relative group w-[104px] h-[104px] overflow-hidden  border border-neutral-300 mx-2 p-2 rounded-sm text-center"
              key={item}
            >
              <div className="relative">
                <Image
                  className="m-auto object-cover object-center w-[86px] h-[86px]"
                  src={item}
                  width="86"
                  height="86"
                  alt="file"
                />
                <div
                  className="absolute top-0 left-0 w-full h-full justify-center bg-neutral-500 hidden group-hover:flex"
                  onClick={() => deleteFile(index)}
                >
                  <Image
                    className="cursor-pointer"
                    src="/images/icons/delete-w.svg"
                    width="14"
                    height="14"
                    alt="delete"
                  />
                </div>
              </div>
            </div>
          );
        })}

      <div
        className={`relative w-[104px] h-[104px] flex flex-col justify-center bg-neutral-100 border text-center ${
          isError ? "border-error-100" : "border-neutral-300"
        }`}
      >
        <input
          type="file"
          className="absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer z-10"
          onChange={uploadSingleFile}
        />
        <div className="p-2">
          <Image
            className="m-auto"
            src="/images/icons/plus-icon-b.svg"
            width="12"
            height="12"
            alt="plus"
          />
          <Text className="text-sm text-neutral-500 mt-2.5">Upload</Text>
        </div>
      </div>
    </div>
  );
};

FileUpload.defaultProps = {
  isError: false,
};
FileUpload.propTypes = {
  isError: PropTypes.bool,
};

export default FileUpload;
