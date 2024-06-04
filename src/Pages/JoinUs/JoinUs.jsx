
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImage from '../../assets/Slider/pexels-googledeepmind-17484970.jpg';
import logo from '../../assets/logo/primecare-high-resolution-logo-transparent.png'
import GoogleSignIn from './GoogleSignIn/GoogleSignIn';
import { Button } from 'flowbite-react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import UseAuth from '../../Components/Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';

const JoinUs = () => {
    const { signInUser } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const form = location?.state || '/';

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(form, {replace:true})
            })
            .catch((error => {
                const errorMessage = error.message;
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: errorMessage,
                    showConfirmButton: false,
                    timer: 1500
                });
            }))
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-200px)] bg-base-100 pt-10 md:pt-20  pb-4'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-base-100 rounded-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block rounded-xl lg:w-1/2'
                    style={{
                        backgroundImage: `url(${bgImage})`,
                    }}
                ></div>
                <Helmet>
                    <title>Sign In</title>
                </Helmet>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                            className='w-auto h-10 sm:h-10'
                            src={logo}
                            alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Welcome back!
                    </p>
                   
                    <div className='text-white bg-orange-200 rounded-lg w-2/3 mx-auto mb-10'>
                        <GoogleSignIn />
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className='bg-base-100'
                    >
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                placeholder='Email'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span>This field is required</span>}
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                placeholder='Password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                                {...register("password", { required: true })}
                            />
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-10'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/signUp'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            <Button outline gradientDuoTone="redToYellow">
                                or Sign Up
                            </Button>
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
