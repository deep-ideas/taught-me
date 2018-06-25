import SignIn from "../app/components/sign-in/signIn";
import layout from "../app/components/layout/layout";

const routes = [
    {
        path : "/signin",
        exact: true,
        component: SignIn,
        layout
    }
];

export default routes