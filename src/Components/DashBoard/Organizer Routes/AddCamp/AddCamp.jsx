import { useForm } from "react-hook-form";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/useAuth/useAuth";
import { useNavigate } from "react-router-dom";

const AddCamp = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {

        const addCamp = {
            campName: data.campName,
            organizerEmail: user?.email,
            image: data.image,
            campFees: data.campFees,
            dateTime: data.dateTime,
            location: data.location,
            healthcareProfessionalName: data.healthcareProfessional,
            participantCount: data.participantCount,
            description: data.description
        }
        // now send data to the server
        const res = await axiosSecure.post('/addCamp', addCamp)

        if (res.data.insertedId) {
            reset();
            Swal.fire({
                position: "center",
                icon: "success",
                title: `${data.campName} added successfully`,
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/dashboard/manageCamp')

        }
        // console.log(res.data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border border-gray-300 rounded-md">

                <div className="mb-4">
                    <label htmlFor="campName" className="block mb-1">Camp Name:</label>
                    <input type="text" placeholder="Camp Name" name="campName" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("campName")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block mb-1">Image:</label>
                    <input type="text" placeholder="Image URL" name="image" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("image")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="campFees" className="block mb-1">Camp Fees:</label>
                    <input type="number" placeholder="$" name="campFees" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("campFees")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="dateTime" className="block mb-1">Date & Time:</label>
                    <input type="datetime-local" name="dateTime" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("dateTime")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block mb-1">Location:</label>
                    <input type="text" placeholder="Location" name="location" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("location")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="healthcareProfessional" className="block mb-1">Healthcare Professional Name:</label>
                    <input type="text" placeholder="Healthcare Professional Name" name="healthcareProfessional" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("healthcareProfessional")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="participantCount" className="block mb-1">Participant Count:</label>
                    <input type="number" placeholder="number"
                        disabled
                        defaultValue={0}
                        name="participantCount" className="w-full border border-gray-300 rounded-md px-3 py-2" required
                        {...register("participantCount")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="description" className="block mb-1">Description:</label>
                    <textarea
                        placeholder="Add Your Description" name="description" className="w-full border border-gray-300 rounded-md px-3 py-2" rows="4" required
                        {...register("description")}
                    ></textarea>
                </div>

                <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md">Add A Camp</button>

            </form>

        </div>
    );
};

export default AddCamp;