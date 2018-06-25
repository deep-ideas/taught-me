import Home from "../app/components/home/home";
import layout from "../app/components/layout/layout";

const routes = [
    {
        path : "/",
        exact: true,
        component: Home,
        layout
    }
];

export default routes