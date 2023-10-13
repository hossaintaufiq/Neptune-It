import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl">Page not found </h2>
           <h1 className="text-7xl"> <span className="text-red-400">Error</span> <span className="text-red-600">404!</span></h1>


            <Link to={'/'}>
           <button className="py-2 px-5 bg-green-700 rounded-lg mt-5 text-white">Back to home </button>
           </Link>


        </div>
    );
};

export default ErrorPage;