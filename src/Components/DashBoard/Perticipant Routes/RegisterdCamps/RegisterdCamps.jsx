import { useState } from "react";
import { Table } from "flowbite-react";
import UseAuth from "../../../Hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Payment from "../Payment/Payment";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import FeedBackModal from "./FeedBackModal/FeedBackModal";

const RegisteredCamps = () => {
    const axiosSecure = UseAxiosSecure();

    const { user } = UseAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCamp, setSelectedCamp] = useState(null);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)
    const [feedbackData, setFeedbackData] = useState(null)

    const { data: myData = [], refetch } = useQuery({
        queryKey: ['myJoinData'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/joinCamp/MyData/${user.email}`);
            return data;
        }
    });

    const handleCancel = data => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/join/delete/${data?._id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
            refetch();
        });
    };
    refetch();

    const openPaymentModal = (camp) => {
        setSelectedCamp(camp);
        setIsOpen(true);
        refetch();
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedCamp(null);
        refetch();
    };



    // FeedBack btn modal open
    const openFeedbackModal = (data) => {
        setFeedbackData(data)
        setIsFeedbackOpen(true)
        refetch();
    }

    // FeedBack modal close
    const closeFeedbackModal = () => {
        setFeedbackData(null)
        setIsFeedbackOpen(false)
        refetch();
    }
    refetch();


    return (
        <div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>index</Table.HeadCell>
                        <Table.HeadCell>Camp name</Table.HeadCell>
                        <Table.HeadCell>Camp Fees</Table.HeadCell>
                        <Table.HeadCell>Organizer email</Table.HeadCell>
                        <Table.HeadCell>Participant Name</Table.HeadCell>
                        <Table.HeadCell>Payment Status</Table.HeadCell>
                        <Table.HeadCell>Confirmation Status</Table.HeadCell>
                        <Table.HeadCell>Cancel</Table.HeadCell>
                        <Table.HeadCell>Feedback</Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {myData.map((data, index) => (
                            <Table.Row key={data._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{index + 1}</Table.Cell>

                                <Table.Cell>{data.campName}</Table.Cell>

                                <Table.Cell>$ {data.campFees}</Table.Cell>

                                <Table.Cell>{data.organizerEmail}</Table.Cell>

                                <Table.Cell>{data.perticipantName || 'unknown'}</Table.Cell>

                                <Table.Cell>
                                    <button onClick={() => openPaymentModal(data)} className={`py-3 px-4 rounded-md text-white ${data.paymentStatus === 'Paid' ? 'cursor-not-allowed bg-green-400' : 'bg-green-400'}`}
                                        disabled={data.paymentStatus === 'Paid'}
                                    >
                                        {data.paymentStatus}
                                    </button>
                                </Table.Cell>

                                <Table.Cell>
                                    <button className={`py-3 px-4 rounded-md text-white ${data.confirmationStatus === 'Confirmed' ? 'cursor-not-allowed bg-green-400' : 'bg-gray-400'}`}>{data.confirmationStatus} </button>
                                </Table.Cell>

                                <Table.Cell>
                                    <button
                                        onClick={() => handleCancel(data)}
                                        className={`py-3 px-4 rounded-md text-white ${data.confirmationStatus === 'Confirmed' ? 'cursor-not-allowed bg-gray-400' : 'bg-red-600'
                                            }`}
                                        disabled={data.confirmationStatus === 'Confirmed'}
                                    >
                                        Cancel
                                    </button>
                                </Table.Cell>


                                <Table.Cell>
                                    <button onClick={() => openFeedbackModal(data)} className={`py-3 px-4 rounded-md text-white ${data.confirmationStatus === 'Confirmed' ? 'bg-red-600' : 'cursor-not-allowed bg-gray-400'}`}
                                         disabled={data.confirmationStatus === 'Pending'}>

                                        Feedback

                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>

            <div>
                {selectedCamp && (
                    <Payment
                        camp={selectedCamp}
                        refetch={refetch}
                        closeModal={closeModal}
                        isOpen={isOpen}
                    />
                )}


                <div>
                    {/* feedback modal  */}
                    <FeedBackModal
                        isFeedbackOpen={isFeedbackOpen}
                        data={feedbackData}
                        refetch={refetch}
                        closeFeedbackModal={closeFeedbackModal}
                    />

                </div>
            </div>
        </div>
    );
};

export default RegisteredCamps;
