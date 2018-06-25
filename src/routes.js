import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home"
import * as AdminDashboard from "./pages/admin-dashboard"
import * as AdminUsers from "./pages/admin-users"


export default configureRoutes([
    Home,
    AdminDashboard,
    AdminUsers
]);