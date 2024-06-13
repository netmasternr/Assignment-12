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
    });

    const handleCancel = (data) => {
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
                const res = await axiosSecure.delete(`/manageRegisteredCamp/${data._id}`);
                if (res.data.deletedCount > 0) {
                    Swal.fire("Deleted!", "Your file has been deleted.", "success");

                }
                refetch();
            }
        });

    };
    refetch();


    // update confirmation status
    const toggleConfirmed = async (_id) => {
        const res = await axiosSecure.patch(`/join/confirm/${_id}`)
        refetch();

        // for payment history
        const result = await axiosSecure.patch(`/paymentHistory/pay/${_id}`)

        // console.log(result.data)

    }


    return (
        <div className="overflow-x-auto">
            <Table>
                <Table.Head>
                    <Table.HeadCell>Index</Table.HeadCell>
                    <Table.HeadCell>Participant Name</Table.HeadCell>
                    <Table.HeadCell>Camp Name</Table.HeadCell>
                    <Table.HeadCell>Camp Fees</Table.HeadCell>
                    <Table.HeadCell>Payment Status</Table.HeadCell>
                    <Table.HeadCell>Confirmation Status</Table.HeadCell>
                    <Table.HeadCell>Cancel</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {joinData.map((data, index) => (
                        <Table.Row key={data._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{index + 1}</Table.Cell>
                            <Table.Cell>{data.participantName || 'Anonymous'}</Table.Cell>
                            <Table.Cell>{data.campName}</Table.Cell>
                            <Table.Cell>$ {data.campFees}</Table.Cell>
                            <Table.Cell>
                                <p className={`${data.paymentStatus ? 'bg-green-400 p-2 rounded-md text-white text-center' : ''}`}>
                                    {data.paymentStatus}
                                </p>
                            </Table.Cell>


                            <Table.Cell>
                                <button onClick={() => toggleConfirmed(data._id)} className={`py-3 px-4 rounded-md text-white ${data.confirmationStatus === 'Confirmed' ? 'cursor-not-allowed bg-green-400' : 'bg-gray-400'}`}
                                    disabled={data.paymentStatus !== 'Paid'}
                                >

                                    {data.confirmationStatus}

                                </button>

                            </Table.Cell>



                            <Table.Cell>
                                <button
                                    onClick={() => handleCancel(data)}
                                    className={`py-3 px-4 rounded-md text-white ${data.confirmationStatus === 'Confirmed' ? 'cursor-not-allowed bg-gray-400' : 'bg-red-600'}`}
                                    disabled={data.confirmationStatus === 'Confirmed'}
                                >
                                    X
                                </button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
};

export default ManageRegisteredCamp;
