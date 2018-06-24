import Dashboard from "../app/components/admin-dashboard/dashboard";
import adminLayout from "../app/components/layout/adminLayout";

const routes = [
    {
        path : "/admin/dashboard",
        exact: true,
        component: Dashboard,
        layout: adminLayout
    }
];

export default routes