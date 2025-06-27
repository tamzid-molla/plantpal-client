
import Lottie from 'lottie-react';
import loader from '../../public/mainloader.json';

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <Lottie animationData={loader}/>
        </div>
    );
};

export default Loader;