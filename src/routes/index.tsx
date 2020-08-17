import SigninScreen from "./../screens/SigninScreen";
import RegisterScreen from "./../screens/RegisterScreen";
import HomeScreen from "./../screens/HomeScreen";

interface RouteProps {
 path: string;
 component: any;
 exact?: boolean;
}

const Routes: Array<RouteProps> = [
 {
  path: "/signin",
  component: SigninScreen,
 },
 {
  path: "/register",
  component: RegisterScreen,
 },
 {
  path: "/category/:id",
  component: HomeScreen,
 },
 {
  path: "/",
  component: HomeScreen,
  exact: true,
 },
];

export default Routes;
