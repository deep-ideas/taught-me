import component from "../app/components/admin-dashboard/dashboard";
import layout from "../app/components/admin-layout/layout";

const routes = [
    {
        path : "/admin/dashboard",
        exact: true,
        component,
        layout
    }
];

export default routes