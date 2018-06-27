import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home"
import * as AdminDashboard from "./pages/admin-dashboard"
import * as AdminUsers from "./pages/admin-users"
import * as SignIn from "./pages/signIn"
import * as AdminSales from "./pages/admin-sales"


export default configureRoutes([
    Home,
    AdminDashboard,
    AdminUsers,
    SignIn,
    AdminSales
]);