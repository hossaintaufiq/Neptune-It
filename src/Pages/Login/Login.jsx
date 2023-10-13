// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Login = () => {

    const {signIn}=useContext(AuthContext)
    const location =useLocation();
    const navigate  = useNavigate();

    const handleLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form= new FormData(e.currentTarget);
        const email = form.get('email');
        const password=form.get('password');
        

        signIn(email, password)
        .then(()=>{
            swal("Congratulations!", "User LogIn successfully", "success")

            navigate(location?.state? location.state : '/');
        })
        .catch(()=>{
            swal("Oops!", "Can't login!", "error");

        })

    }


    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Log In your account</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email address" className="input input-bordered" required name="email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter your password" className="input input-bordered " required name="password" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>Don't Have An Account ?
                                <Link to={"/register"} className="text-[#e97474] border-b-2"> Register</Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;