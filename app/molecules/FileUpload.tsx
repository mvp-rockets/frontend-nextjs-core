import React, { useRef, useState, ChangeEvent } from 'react';
import NextImage from 'next/image';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

interface FilesProps {
  error: boolean;
  name: string;
  onClick: () => void;
}

const Files: React.FC<FilesProps> = ({ error, name, onClick }) => {
  return (
    <div className={`border ${error ? 'border-error-100' : 'border-neutral-300'} rounded-[2px] p-2 flex justify-between items-center mt-2`}>
      <div className='flex items-center gap-x-2'>
        <div className="flex items-center">
          <NextImage src={error ? '/images/icons/error-image.svg' : '/images/person.svg'} alt="person" width={48} height={48} />
        </div>
        <Text variant='bodySmall' textColor="text-primary-900">{name}</Text>
      </div>
      <span className='relative w-6 h-5 cursor-pointer' onClick={onClick}>
        <NextImage src={error ? '/images/icons/delete-red.svg' : '/images/icons/delete.svg'} alt="delete" layout='fill' />
      </span>
    </div>
  );
};

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({ accept, multiple, className }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errorFiles, setErrorFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={`relative text-center ${className || ''}`}>
      <input
        type="file"
        ref={fileInputRef}
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
        multiple={multiple}
      />
      <Button
        className="relative z-10 mb-2"
        fontWeight="font-semibold"
        id="upload-button"
        label="Upload File"
        name="link-button"
        onClick={handleButtonClick}
        size="extraLarge"
        type="button"
        variant="link"
      />
      {selectedFiles.map((file, index) => (
        <Files key={index} name={file.name} onClick={() => {}} error={false} />
      ))}
      {errorFiles.map((file, index) => (
        <Files key={index} name={file.name} onClick={() => {}} error={true} />
      ))}
    </div>
  );
};

export default FileUpload;
