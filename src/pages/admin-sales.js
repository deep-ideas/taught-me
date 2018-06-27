import component from "../app/components/admin-sales/sales";
import layout from "../app/components/admin-layout/layout";

const routes = [
    {
        path : "/admin/sales",
        exact: true,
        component,
        layout
    }
];

export default routes