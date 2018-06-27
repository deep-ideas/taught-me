import component from "../app/components/admin-sales/adminSales";
import layout from "../app/components/admin-layout/adminLayout";

const routes = [
    {
        path : "/admin/sales",
        exact: true,
        component,
        layout
    }
];

export default routes