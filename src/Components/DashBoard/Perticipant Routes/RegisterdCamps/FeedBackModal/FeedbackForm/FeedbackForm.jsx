/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import UseAuth from "../../../../../Hooks/useAuth/useAuth";
import UseAxiosSecure from "../../../../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const FeedbackForm = ({ closeFeedbackModal, data }) => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = async (data) => {
        const feedbackInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
            image: user.photoURL
        }

        // send data to server

        try {
            const res = await axiosSecure.post('/feedback', feedbackInfo)
            if (res.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Thanks for your Feedback",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <div className="max-w-md mx-auto">

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="name"
                        type="text"
                        defaultValue={user.displayName || 'anonymous'}
                        placeholder="Name"
                        {...register("name")}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="email"
                        type="email"
                        defaultValue={user.email}
                        placeholder="Your email"
                        {...register("email")}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="message"
                        placeholder="Your feedback"
                        {...register("message")}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button onClick={closeFeedbackModal}
                        className="bg-gray-500 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>

    );
};

export default FeedbackForm;