import React, { useState } from "react";
import PropTypes from "prop-types";
import Text from "../atoms/Text";
import Image from "next/image";
import Icon from "../atoms/Icon";

const FileUpload = ({ isError = false, variant = "default", UploadLabel, UploadSubText, iconSrc, iconAlt = "", UploadLabelStyle, UploadSubTextStyle, className }) => {
    const [file, setFile] = useState([]);

    const uploadSingleFile = (e) => {
        setFile([...file, URL.createObjectURL(e.target.files[0])]);
    };

    const deleteFile = (e) => {
        const s = file.filter((item, index) => index !== e);
        setFile(s);
    };

    const fileType = {
        default: "default",
        uploadDrag: "uploadDrag",
        uploadButton: "uploadButton",
    };

    return (
        <div className="flex flex-wrap -mx-2" variant={fileType[variant]}>
            {fileType[variant] == "default" && (
                <>
                    {file.length > 0 &&
                        file.map((item, index) => {
                            return (
                                <div className="relative group w-[104px] h-[104px] overflow-hidden  border border-neutral-300 mx-2 p-2 rounded-sm text-center" key={item}>
                                    <div className="relative">
                                        <Image className="m-auto object-cover object-center w-[86px] h-[86px]" src={item} width="86" height="86" alt="file" />
                                        <div
                                            className="absolute top-0 left-0 w-full h-full justify-center bg-neutral-500 hidden group-hover:flex"
                                            onClick={() => deleteFile(index)}
                                        >
                                            <Image className="cursor-pointer" src="/images/icons/delete-w.svg" width="14" height="14" alt="delete" />
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
                            // disabled={file.length === 5}
                            className="absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer z-10"
                            onChange={uploadSingleFile}
                        />
                        <div className="p-2 text-center">
                            {iconSrc && <Icon iconSrc={iconSrc} iconAlt={iconAlt} className="mx-auto w-4" />}
                            <Text className="text-base text-neutral-700 mt-2.5 font-medium">{UploadLabel}</Text>
                            <Text className="text-sm text-neutral-500 mt-1 ">{UploadSubText}</Text>
                        </div>
                    </div>
                </>
            )}
            {fileType[variant] == "uploadDrag" && (
                <div className={` ${className}`}>
                    <div className={`relative w-[395px] h-[168px] flex flex-col justify-center text-center ${isError ? "border-error-100" : "border-neutral-300"}`}>
                        <input
                            type="file"
                            // disabled={file.length === 5}
                            className="absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer z-10"
                            onChange={uploadSingleFile}
                        />
                        <div className="p-2 text-center">
                            {iconSrc && <Icon iconSrc={iconSrc} iconAlt={iconAlt} className="mx-auto w-9" />}
                            <Text className={`text-base text-neutral-700 mt-2.5 font-medium ${UploadLabelStyle}`}>{UploadLabel}</Text>
                            <Text className={`text-sm text-neutral-500 mt-1 ${UploadSubTextStyle}`}>{UploadSubText}</Text>
                        </div>
                    </div>
                    {file.length > 0 &&
                        file.map((item, index) => {
                            return (
                                <div className="relative group w-[395px]   overflow-hidden mt-1  rounded-sm text-center" key={item}>
                                    <div className="relative">
                                        <div className="flex gap-2 py-1">
                                            <Icon iconSrc="/images/icons/attachment.svg" iconAlt="attachnent" className="" />
                                            <Text className="text-primary-900 text-sm">abc.png</Text>
                                        </div>
                                        <div
                                            className="absolute top-0 left-0 w-full h-full justify-center bg-neutral-500 hidden group-hover:flex"
                                            onClick={() => deleteFile(index)}
                                        >
                                            <Image className="cursor-pointer" src="/images/icons/delete-w.svg" width="14" height="14" alt="delete" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}
            {fileType[variant] == "uploadButton" && (
                <div className={`${className} `}>
                    <div className={`relative ${className} h-[38px] py-2 flex flex-col justify-center text-center ${isError ? "border-error-100" : "border-neutral-300"}`}>
                        <input
                            type="file"
                            // disabled={file.length === 5}
                            className="absolute w-full h-full left-0 top-0 opacity-0 cursor-pointer z-10"
                            onChange={uploadSingleFile}
                        />
                        <div className="flex gap-2 px-2 py-2 text-center">
                            {iconSrc && <Icon iconSrc={iconSrc} iconAlt={iconAlt} className="w-4" />}
                            <Text className={`text-sm self-center text-neutral-700 mt-1 font-normal ${UploadLabelStyle}`}>{UploadLabel}</Text>
                        </div>
                    </div>
                    {file.length > 0 &&
                        file.map((item, index) => {
                            return (
                                <div className="relative group w-[395px]   overflow-hidden mt-1  rounded-sm text-center" key={item}>
                                    <div className="flex justify-between">
                                        <div className="flex gap-2 py-1">
                                            <Icon iconSrc="/images/icons/attachment.svg" iconAlt="attachnent" className="" />
                                            <Text className="text-primary-900 text-sm">abc.png</Text>
                                        </div>

                                        <Image className="cursor-pointer" src="/images/icons/delete-icon.svg" width="35" height="35" alt="delete" />
                                    </div>
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

FileUpload.propTypes = {
    isError: PropTypes.bool,
};

export default FileUpload;
