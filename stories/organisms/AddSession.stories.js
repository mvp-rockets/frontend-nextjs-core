
import AddSession from "../../organisms/AddSession";
export default {
    title: "Organisms/Add Session",
    component: AddSession,
}
const Template = (args) => <AddSession {...args} />;

export const addSession = Template.bind({});

addSession.args = {
    headingText: 'Add Session',
    addBtn: 'Add more session',
    saveBtn: 'Save',
    dateLabel: 'Date',
    fromLabel: 'From',
    toLabel: 'To',
}