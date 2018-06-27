import component from "../app/components/admin-site/site";
import layout from "../app/components/admin-layout/layout";

const routes = [
    {
        path : "/admin/site",
        exact: true,
        component,
        layout
    }
];

export default routes