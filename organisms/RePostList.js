import Heading from "../atoms/Heading";
import Profile from "../molecules/Profile";

const RePostList = ({ profileList, num }) => {
    return (
        <>
            <div className="px-6 py-4 border-b border-gray-200 mb-3.5">
                <Heading type="h6" className="text-neutral-900 font-semibold">Reposts <span className="text-sm text-neutral-500 font-normal">({num} reposts)</span> </Heading>
            </div>
            <div>
                {profileList.map((data) => (
                    <div className="py-2.5 pl-6">
                        <Profile
                            profileImg={data.profileImg}
                            profileName={data.profileName}
                            profileId={data.profileId}
                            followed={data.followed}
                            isButton={true}
                            isButtonTypeFloat={true}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
export default RePostList;