import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signin } from "../redux/actions/userActions";
import { InitialProps } from "./../redux/store";

interface SigninProps extends RouteComponentProps {}

function SigninScreen(props: SigninProps) {
 console.log(props);
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const userSignin = useSelector((state: InitialProps) => state.userSignin);
 const { loading, error, userInfo } = userSignin;
 const dispatch = useDispatch();

 const redirect = userInfo?.token ? "/" : "/signin";

 useEffect(() => {
  if (userInfo) {
   props.history.push(redirect);
  }
 }, [userInfo]);

 const submitHandler = (e: any) => {
  e.preventDefault();
  dispatch(signin(email, password));
 };

 return (
  <div className="form">
   <form onSubmit={submitHandler}>
    <ul className="form-container">
     <li>
      <h2>Sign-In</h2>
     </li>
     <li>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
     </li>
     <li>
      <label htmlFor="email">Email</label>
      <input
       type="email"
       name="email"
       id="email"
       onChange={(e) => setEmail(e.target.value)}
      ></input>
     </li>
     <li>
      <label htmlFor="password">Password</label>
      <input
       type="password"
       id="password"
       name="password"
       onChange={(e) => setPassword(e.target.value)}
      ></input>
     </li>
     <li>
      <button type="submit" className="button primary">
       Signin
      </button>
     </li>
     <li>New to amazona?</li>
     <li>
      <Link
       to={redirect === "/" ? "register" : "register?redirect=" + redirect}
       className="button secondary text-center"
      >
       Create your amazona account
      </Link>
     </li>
    </ul>
   </form>
  </div>
 );
}
export default SigninScreen;