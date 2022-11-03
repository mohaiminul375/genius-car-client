import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Signup = () => {
const {createUser} = useContext(AuthContext);
    const handleSubmit=(event)=>{
        event.preventDefault()
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       createUser(email,password)
       .then(result =>{
        const user = result.user;
        console.log(user)
       })
       .catch(error =>console.log(error))

        
    }
    return (
        <div className="hero w-full my-20">
      <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
          <form onSubmit={handleSubmit} className="card-body">
            <h1 className="text-5xl font-bold text-center">SignUP!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
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
              
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="signUp" />
    
            </div>
          </form>
          <p className="text-center">Already have an account <Link className="text-orange-600 font-bold" to='/login'>Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Signup;