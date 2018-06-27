import component from "../app/components/admin-users/users"
import layout from "../app/components/admin-layout/layout"

const routes = [
    {
        path : "/admin/users",
        exact: true,
        component,
        layout
    }
]

export default routes