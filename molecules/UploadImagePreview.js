import Image from 'next/image';
import PropTypes from 'prop-types';
const UploadImagePreview = ({
    imgSrc = "/images/demo-img.jpg",
    imgWidth = "80",
    imgHeight = "80",
    imgAlt = "demo",

}) => {
    return (
        <div className='relative w-fit mt-6 mb-3'>
            <Image
                className='rounded'
                src={imgSrc}
                width={imgWidth}
                height={imgHeight}
                alt={imgAlt} />
            <div className='absolute -right-2.5 -top-2.5 cursor-pointer'>
                <Image src="/images/icons/close-icon-red.svg" width="22" height="22" alt="close" />
            </div>
        </div>
    )
}

UploadImagePreview.propTypes = {
    imgSrc: PropTypes.string,
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
}

export default UploadImagePreview;