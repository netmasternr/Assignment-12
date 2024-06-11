import { Table } from "flowbite-react";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageRegisteredCamp = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: joinData = [], refetch } = useQuery({
        queryKey: ['registeredCamp'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/joinCamp')
            return data;
        }
    })

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
            const res = await axiosSecure.delete(`/manageRegisteredCamp/${data?._id}`)
 
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

    return (
        <div>

            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Participant Name</Table.HeadCell>
                        <Table.HeadCell>Camp name</Table.HeadCell>
                        <Table.HeadCell>camp fees</Table.HeadCell>
                        <Table.HeadCell>
                            payment status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            confirmation status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            cancel
                        </Table.HeadCell>

                    </Table.Head>

                    <Table.Body className="divide-y">
                        {
                            joinData.map(data => <Table.Row key={data._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                <Table.Cell>{data.perticipantName} </Table.Cell>
                                <Table.Cell>{data.campName} </Table.Cell>
                                <Table.Cell>$ {data.campFees} </Table.Cell>

                                <Table.Cell>
                                    paid
                                </Table.Cell>

                                <Table.Cell>
                                    confirm
                                </Table.Cell>

                                <Table.Cell>
                                    <button onClick={() => handleCancel(data)} className="py-2 px-4 rounded-md bg-red-700 transition-transform duration-300 hover:scale-110 text-white">
                                        X
                                    </button>
                                </Table.Cell>
                            </Table.Row>)
                        }



                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ManageRegisteredCamp;