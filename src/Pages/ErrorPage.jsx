import Lottie from 'lottie-react';
import error from '../../public/error.json';
import { Link } from 'react-router';
import { useEffect } from 'react';

const ErrorPage = () => {
    useEffect(() => {
        document.title= "PlantPal || Error 404"
    },[])
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="">
                <Lottie animationData={error} />
            <div className=" flex justify-center mt-10">
                <Link to="/"> <button className='btn btn-primary px-7'>Go Home</button></Link>
           </div>
            </div>
        </div>
    );
};

export default ErrorPage;