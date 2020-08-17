import React, { useEffect, useState } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register } from "./../redux/actions/userActions";
import { InitialProps } from "./../redux/store";

interface RegisterProps extends RouteComponentProps {}

function RegisterScreen(props: RegisterProps) {
 console.log(props);
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [rePassword, setRePassword] = useState("");
 const userRegister = useSelector((state: InitialProps) => state.userRegister);
 const { loading, userInfo, error } = userRegister;
 const dispatch = useDispatch();

 const redirect = userInfo?.token ? "/" : "/register";

 useEffect(() => {
  if (userInfo) {
   props.history.push(redirect);
  }
  return () => {
   //
  };
 }, [userInfo]);

 const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  dispatch(register(email, password));
 };

 return (
  <div className="form">
   <form onSubmit={submitHandler}>
    <ul className="form-container">
     <li>
      <h2>Create Account</h2>
     </li>
     <li>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
     </li>
     <li>
      <label htmlFor="name">Name</label>
      <input
       type="name"
       name="name"
       id="name"
       onChange={(e) => setName(e.target.value)}
      ></input>
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
      <label htmlFor="rePassword">Re-Enter Password</label>
      <input
       type="password"
       id="rePassword"
       name="rePassword"
       onChange={(e) => setRePassword(e.target.value)}
      ></input>
     </li>
     <li>
      <button type="submit" className="button primary">
       Register
      </button>
     </li>
     <li>
      Already have an account?
      <Link
       to={redirect === "/" ? "signin" : "signin?redirect=" + redirect}
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
export default RegisterScreen;
