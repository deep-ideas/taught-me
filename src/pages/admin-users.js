import component from "../app/components/admin-users/users"
import layout from "../app/components/layout/adminLayout"

const routes = [
    {
        path : "/admin/users",
        exact: true,
        component,
        layout
    }
]

export default routes