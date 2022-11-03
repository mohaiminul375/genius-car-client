import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/AuthProvider/Authprovider";

const Login = () => {
const {signIn,googleSignIn} = useContext(AuthContext);
    const handleSubmit=(event)=>{
        event.preventDefault()
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
      signIn(email,password)
      .then(result=>{
        const user = result.user;
        console.log(user);
      })
      .catch(err=>console.log(err));
    }

const handleGoogle=()=>{
    googleSignIn()
    .then(result =>{
        const user =result.user;
        console.log(user);
    })
    .catch(err=>console.log(err));
}



  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary mb-3" type="submit" value="Login" />
              <input onClick={handleGoogle} className="btn btn-primary" type="submit" value="Google" />
    
            </div>
          </form>
          <p className="text-center">New to genius car <Link className="text-orange-600 font-bold" to='/signup'>SignUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
