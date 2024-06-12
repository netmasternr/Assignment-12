import { Table } from "flowbite-react";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/useAuth/useAuth";

const ManageRegisteredCamp = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();

    const { data: joinData = [], refetch } = useQuery({
        queryKey: ['registeredCamp'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/joinCamp/${user?.email}`)
            return data;
        }
    })

    // console.log(joinData)

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
                        <Table.HeadCell>index</Table.HeadCell>
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
                            joinData.map((data, index) => <Table.Row key={data._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                <Table.Cell>{index + 1} </Table.Cell>

                                <Table.Cell>{data.perticipantName || 'anonymous'} </Table.Cell>
                                <Table.Cell>{data.campName} </Table.Cell>
                                <Table.Cell>$ {data.campFees} </Table.Cell>

                                <Table.Cell>
                                    <p className={`${data.paymentStatus ? 'bg-green-400 p-2 rounded-md text-white text-center ' : ' '}`}>
                                        {data.paymentStatus || 'Pending'}

                                    </p>
                                </Table.Cell>

                                <Table.Cell>
                                    confirm
                                </Table.Cell>

                                <Table.Cell>
                                    <button
                                        onClick={() => handleCancel(data)}
                                        className={`bg-gray-400 py-3 px-4 rounded-md text-white ${data.paymentStatus ? 'cursor-not-allowed ' : 'bg-red-600 py-3 px-4 rounded-md text-white'}`}
                                        disabled={data.paymentStatus ? true : false }
                                    >
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