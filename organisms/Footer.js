import Icon from "../atoms/Icon";
import LinkButton from "../atoms/LinkButton";

const Footer = () => {
    return (
        <div className="flex items-center justify-evenly bg-white shadow-[0px_-1px_9px_rgba(0,0,0,0.11)] py-2.5 fixed bottom-0 w-full left-0">
            <LinkButton href="" className=" p-5">
                <Icon iconSrc="/images/icons/home-icon.svg" iconWidth="24" iconHeight="24" iconAlt="home" />
            </LinkButton>
            <LinkButton href="" className=" p-5">
                <Icon iconSrc="/images/icons/search.svg" iconWidth="24" iconHeight="24" iconAlt="search" />
            </LinkButton>
            <LinkButton href="" className="bg-primary-200 rounded-full p-5">
                <Icon iconSrc="/images/icons/bag.svg" iconWidth="24" iconHeight="24" iconAlt="xart" />
            </LinkButton>
            <LinkButton href="" className=" p-5">
                <Icon iconSrc="/images/icons/leaderboard.svg" iconWidth="24" iconHeight="24" iconAlt="leaderboard" />
            </LinkButton>

            <LinkButton href="" className=" p-5">
                <Icon iconSrc="/images/icons/bell.svg" iconWidth="24" iconHeight="24" iconAlt="notification" />
            </LinkButton>
        </div>
    );
};

export default Footer;
