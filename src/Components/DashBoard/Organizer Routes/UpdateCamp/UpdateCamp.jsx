import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";

const UpdateCamp = () => {
    const camp = useLoaderData();
    const axiosSecure = UseAxiosSecure();
    // console.log(camp)
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const updateCamp = {
            campName: data.campName,
            dateTime: data.dateTime,
            location: data.location,
            healthcareProfessionalName: data.healthcareProfessionalName,
        }

        // now send data to server
        const res = await axiosSecure.patch(`/addCamp/update/${camp._id}`,updateCamp)

        // console.log(res.data)
        navigate('/dashboard/manageCamp')

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border border-gray-300 rounded-md">

                <div className="mb-4">
                    <label htmlFor="campName" className="block mb-1">Camp Name:</label>
                    <input type="text" placeholder="Camp Name"
                        defaultValue={camp.campName}
                        name="campName" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("campName")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="dateTime" className="block mb-1">Date & Time:</label>
                    <input type="datetime-local"
                        defaultValue={camp.dateTime}
                        name="dateTime" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("dateTime")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block mb-1">Location:</label>
                    <input type="text"
                        defaultValue={camp.location}
                        placeholder="Location" name="location" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("location")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="healthcareProfessional" className="block mb-1">Healthcare Professional Name:</label>
                    <input type="text" placeholder="Healthcare Name"
                        defaultValue={camp.healthcareProfessionalName}
                        name="healthcareProfessionalName" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("healthcareProfessionalName")} />
                </div>

                <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md">Update Camp</button>

            </form>
        </div>
    );
};

export default UpdateCamp;