import { Table } from "flowbite-react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic/UseAxiosPublic";
import UseAuth from "../../../Hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Payment from "../Payment/Payment";
import { useState } from "react";

const RegisteredCamps = () => {
    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();
    const [isOpen, setIsOpen] = useState(false);

    const { data: myData = [], refetch } = useQuery({
        queryKey: ['myJoinData'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/joinCamp/MyData/${user.email}`)
            return data;
        }
    })

    // delete
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
            const res = await axiosPublic.delete(`/join/delete/${data?._id}`)
            // console.log(res.data)

            if (res.data.deletedCount > 0) {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
            refetch();
        });
    }

    const closeModal = () => {
        setIsOpen(false)
    }


    return (
        <div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Camp name</Table.HeadCell>
                        <Table.HeadCell>Camp Fees</Table.HeadCell>
                        <Table.HeadCell>Organizer email</Table.HeadCell>
                        <Table.HeadCell>Participant Name</Table.HeadCell>
                        <Table.HeadCell>
                            payment status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            confirmation status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            cancel
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Feedback
                        </Table.HeadCell>

                    </Table.Head>

                    <Table.Body className="divide-y">
                        {
                            myData.map(data => <Table.Row key={data._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                <Table.Cell>{data.campName} </Table.Cell>
                                <Table.Cell>$ {data.campFees} </Table.Cell>
                                <Table.Cell>{data.organizerEmail}</Table.Cell>
                                <Table.Cell>{data.perticipantName || 'unknown'}</Table.Cell>

                                <Table.Cell>
                                    <Link> <button onClick={() => setIsOpen(true)} className="p-2 rounded-md bg-orange-400 hover:bg-green-400 transition-transform duration-300 hover:scale-105 text-white">pay</button></Link>
                                </Table.Cell>


                                <Table.Cell>
                                    <button className="p-2 rounded-md bg-gray-400 text-white">Pending</button>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleCancel(data)} className="p-2 rounded-md bg-gray-600 hover:bg-red-500 transition-transform duration-300 hover:scale-105 text-white">Cancel</button>
                                </Table.Cell>
                                <Table.Cell>
                                    <button className="p-2 rounded-md bg-green-400 transition-transform duration-300 hover:scale-105 text-white">FeedBack</button>
                                </Table.Cell>
                            </Table.Row>)
                        }

                    </Table.Body>
                </Table>
            </div>

            <div className="">
                 {/* modal */}
             <Payment 
                myData={myData}
                refetch={refetch}
                closeModal={closeModal}
                isOpen={isOpen}

                />
            </div>
        </div>
    );
};

export default RegisteredCamps;