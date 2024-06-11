import { Table,  } from "flowbite-react";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import UseAuth from "../../../Hooks/useAuth/useAuth";

const ManageCamp = () => {
    const axiosSecure = UseAxiosSecure();
    const {user} = UseAuth();


    const { data: campsData = [], refetch, isLoading } = useQuery({
        queryKey: ['camps'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/addCamp/manage/${user?.email}`);
            return data;
        }
    });

    const handleDelete = (camp) => {
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
                const { data } = await axiosSecure.delete(`/addCamp/${camp._id}`);
                if (data.deletedCount > 0) {
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

    if(isLoading) return <p>loading</p>

    return (
        <div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Serial</Table.HeadCell>
                        <Table.HeadCell>Camp name</Table.HeadCell>
                        <Table.HeadCell>Date & Time</Table.HeadCell>
                        <Table.HeadCell>Location</Table.HeadCell>
                        <Table.HeadCell>Healthcare Professional</Table.HeadCell>
                        <Table.HeadCell>Update</Table.HeadCell>
                        <Table.HeadCell>Delete</Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {campsData.map((camp, index) => (
                            <Table.Row key={camp._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{index+1}</Table.Cell>
                                <Table.Cell>{camp.campName}</Table.Cell>
                                <Table.Cell>{camp.dateTime}</Table.Cell>
                                <Table.Cell>{camp.location}</Table.Cell>
                                <Table.Cell>{camp.healthcareProfessionalName}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/dashboard/updateCamp/${camp._id}`}> <button className="p-2 rounded-md bg-orange-400 hover:bg-green-400 transition-transform duration-300 hover:scale-105 text-white">Update</button></Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleDelete(camp)} className="p-3 rounded-md bg-red-700 transition-transform duration-300 hover:scale-110 text-white">
                                        <MdDeleteForever />
                                    </button>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ManageCamp;
