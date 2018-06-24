import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home"
import * as Dashboard from "./pages/admin-dashboard"

export default configureRoutes([
    Home,
    Dashboard
]);