import LinkButton from "../atoms/LinkButton";
import Text from "../atoms/Text";
import Icon from "../atoms/Icon";

const Notification = ({ notificationData, ...props }) => {
    return (
        <div className="">
            {notificationData.map((notification) => (
                <div className="flex gap-3 my-4">
                    <Icon iconSrc={notification.userSrc} iconAlt="userProfile" iconWidth="40" iconHeight="40" className="self-start w-10" />
                    <div className="">
                        <div className="">
                            <LinkButton href="" className="inline font-semibold no-underline text-gray-900">
                                {notification.userName}
                            </LinkButton>
                            <Text className="inline-block px-1 font-normal text-gray-900">{notification.notificationLabel}</Text>
                        </div>
                        <Text variant="caption" textColor="text-gray-400">{notification.notificationTime}</Text>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Notification;
