// import React from 'react';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import swal from "sweetalert";
// import { sendEmailVerification } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.config";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const provider = new GoogleAuthProvider();


    const specialCharPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        if (password.length < 6) {
            swal("Oops!", "Password must be more than 6 Characters ", "error");

        }

        else if (!specialCharPattern.test(password)) {
            swal("Oops!", "Password must have atleast one special character ", "error");
            return;

        }
        else if (!/[A-Z]/.test(password)) {
            swal("Oops!", "Password must have atleast one Capital letter ", "error");
            return;

        }
        createUser(email, password)
            .then(() => {

                swal("Congratulations!", "User Created successfully", "success")
            })
            .catch(() => {
                swal("Oops!", "Email already Exists", "error");
            })
    }

    const SigInWithGoogle=()=>{
        
        signInWithPopup(auth,provider)
        .then(() => {

            swal("Congratulations!", "User Created successfully", "success")
        })
        .catch(() => {
            swal("Oops!", "Email already Exists", "error");
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register your account</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter your name" className="input input-bordered" required name="name" />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>




                        </form>
                        <div className="card-body">
                            <button className="btn btn-outline btn-secondary" onClick={SigInWithGoogle}>Google</button>
                        </div>
                        <p className="text-center mb-5">Already Have An Account ?<Link to={"/login"} className="text-[#e97474] border-b-2"> Login</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;