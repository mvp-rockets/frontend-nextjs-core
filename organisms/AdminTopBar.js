import Button from "../atoms/Button";
import Breadcrumb from "../atoms/Breadcrumb";
import Icon from "../atoms/Icon";

const AdminTopBar = ({ breadcrumb }) => {
    return (
        <div className="">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <Icon iconSrc="/images/icons/arrow-left.svg" iconWidth="15" iconHeight="15"></Icon>
                    <div className="self-center">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
                <div className="flex gap-5">
                    <Button className="py-0 mx-auto px-2" label="Cancel" size="small" style="borderLess" onClick={() => {}} />
                    <Button className="py-0 mx-auto px-2" label="Save" size="small" style="primary" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
};

export default AdminTopBar;
