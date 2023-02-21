import PropTypes from 'prop-types';
import Avatar from "../atoms/Avatar";
import Breadcrumb from "../atoms/Breadcrumb";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

const ProfileDetail = ({
    profileDetailBreadcrumb,
    profileData,
    profileIcon
}) => {

    return (
        <div className="w-full">
            <Breadcrumb
                divider="secondary"
                profileDetailBreadcrumb={profileDetailBreadcrumb}
                textSize='text-base md:text-xl'
                defaultClass='text-primary-900 font-semibold leading-5 capitalize'
                currentClass='text-primary-900 font-normal leading-5 capitalize'
            />

            <div className="bg-white p-4 sm:px-6 sm:py-8 rounded-xl mt-6" >

                <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center gap-6 mb-6">
                    <Avatar imgSrc={profileIcon} width="150" height="150" size="normal" badge="normal" />
                    <div className="text-center sm:text-left">
                        <Heading
                            type="h6"
                            className="mb-2 font-medium "
                            children={profileData.name} />
                        <Text
                            className="mb-4"
                            children={profileData.designation} />
                        <div className="flex space-x-2">
                            <Button size="small" label="Book an appointment" />
                            <Button style="ghost" size="small" label="Book a Package" />
                        </div>

                    </div>
                </div>
                <div className="text-neutral-900">
                    <Heading
                        type="h6"
                        className="mb-2"
                        children="Profile" />
                    <Text
                        variant="bodySmall"
                        className="mb-6"
                        children={profileData.description} />
                    <Heading
                        type="h6"
                        className="mb-2"
                        children="Qualification" />
                    <Text
                        variant="bodySmall"
                        className="mb-6"
                        children={profileData.qualification} />
                    <Heading
                        type="h6"
                        className="mb-2"
                        children="Specialization" />
                    <Text
                        variant="bodySmall"
                        className="mb-6"
                        children={profileData.specialization} />
                    <Heading
                        type="h6"
                        className="mb-2"
                        children="Language" />
                    <Text
                        variant="bodySmall"
                        className="mb-6"
                        children={profileData.language} />
                    <Heading
                        type="h6"
                        className="mb-2"
                        children="Fee" />

                    <div className="flex space-x-8">
                        <Text
                            variant="bodySmall"
                            className="mb-6"
                            children={profileData.fee.normal} />
                        <Text
                            variant="bodySmall"
                            className="mb-6"
                            children={profileData.fee.chat} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetail;

ProfileDetail.propTypes = {
    profileDetailBreadcrumb: PropTypes.array,
    profileData: PropTypes.object,
    profileIcon: PropTypes.string,
};
