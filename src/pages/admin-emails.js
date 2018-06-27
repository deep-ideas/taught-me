import component from "../app/components/admin-emails/emails";
import layout from "../app/components/admin-layout/layout";

const routes = [
    {
        path : "/admin/emails",
        exact: true,
        component,
        layout
    }
];

export default routes