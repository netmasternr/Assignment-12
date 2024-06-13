/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import UseAuth from "../../Hooks/useAuth/useAuth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic/UseAxiosPublic";
import Swal from "sweetalert2";
import toast, { Toaster } from 'react-hot-toast';

const JoinModalForm = ({ campData, closeModal, refetch }) => {
    const { user } = UseAuth();
    const axiosPublic = UseAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        // Check if the user is the organizer
        if (user.email === campData.organizerEmail) {
            return Swal.fire({
                position: "center",
                icon: "error",
                title: 'Organizer cannot join own camp',
                showConfirmButton: false,
                timer: 1500
            });
        }

        const JoinCampData = {
            organizerEmail: campData?.organizerEmail,
            campName: data.campName,
            paymentStatus: 'Pay',
            confirmationStatus: 'Pending',
            gender: data.gender,
            campFees: data.campFees,
            perticipantName: data.perticipantName,
            location: data.location,
            healthcareProfessionalName: data.healthcareProfessional,
            PerticipantEmail: data.PerticipantEmail,
            age: data.age,
            phoneNumber: data.phoneNumber,
            emergencyContract: data.emergencyContract
        };

        // Post the join camp data
        try {
            const res = await axiosPublic.post('/joinCamp', JoinCampData);

            if (res.data.insertedId) {
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: 'Join successfully',
                    showConfirmButton: false,
                    timer: 1500
                });

                // perticipant count upset
                const result = await axiosPublic.patch(`/perticipantCount/${campData._id}`, campData)

                refetch()

            } else {
                toast.error('Failed to join the camp.');
            }
        } catch (error) {
            toast.error('Failed to join the camp.');
        }
        
    };

   

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 border border-gray-300 rounded-md">
                <div className="mb-4">
                    <label htmlFor="campName" className="block mb-1">Camp Name:</label>
                    <input type="text"
                        readOnly
                        defaultValue={campData.campName}
                        placeholder="Camp Name" name="campName" className="w-full border border-gray-300 rounded-md px-3 py-2"
                        {...register("campName")} />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Gender</label>
                    <select
                        {...register("gender")}
                        name="gender"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="healthcareProfessional" className="block mb-1">Healthcare Professional Name:</label>
                    <input type="text"
                        defaultValue={campData.healthcareProfessionalName}
                        readOnly
                        placeholder="Healthcare Professional Name" name="healthcareProfessional" className="w-full border border-gray-300 rounded-md px-3 py-2"
                        {...register("healthcareProfessional")} />
                </div>

                <div className="mb-4">
                    <label htmlFor="perticipantName" className="block mb-1">Perticipant Name:</label>
                    <input type="text"
                        defaultValue={user.displayName}
                        readOnly
                        placeholder="Perticipant Name" name="perticipantName" className="w-full border border-gray-300 rounded-md px-3 py-2"
                        {...register("perticipantName")} />
                </div>

                <div className="flex gap-2">
                    <div className="mb-4">
                        <label htmlFor="campFees" className="block mb-1">Camp Fees:</label>
                        <input type="number"
                            defaultValue={campData.campFees}
                            readOnly
                            placeholder="$fees" name="campFees" className="w-full border border-gray-300 rounded-md px-3 py-2"
                            {...register("campFees")} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="location" className="block mb-1">Location:</label>
                        <input type="text" placeholder="Location"
                            defaultValue={campData.location}
                            readOnly
                            name="location" className="w-full border border-gray-300 rounded-md px-3 py-2"
                            {...register("location")} />
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="mb-4 ">
                        <label htmlFor="PerticipantEmail" className="block mb-1">Participant Email:</label>
                        <input type="text"
                            defaultValue={user.email}
                            readOnly
                            placeholder="Participant Email"
                            name="PerticipantEmail" className="w-full border border-gray-300 rounded-md px-3 py-2"
                            {...register("PerticipantEmail")} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="age" className="block mb-1">Age:</label>
                        <input type="number" placeholder="Age" name="age" className="w-full border border-gray-300 rounded-md px-3 py-2"
                            {...register("age")} />
                    </div>
                </div>

                <div className="flex gap-2">
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block mb-1">Phone Number:</label>
                        <input type="number" placeholder="Phone Number" name="phoneNumber" className="w-full border border-gray-300 rounded-md px-3 py-2"
                            {...register("phoneNumber")} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="emergencyContract" className="block mb-1">Emergency Contact:</label>
                        <input type="number" placeholder="Emergency Contact" name="emergencyContract" className="w-full border border-gray-300 rounded-md px-3 py-2"
                            {...register("emergencyContract")} />
                    </div>
                </div>

                <button onClick={closeModal} type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md">Join Now</button>
            </form>

        </div>
    );
};

export default JoinModalForm;
