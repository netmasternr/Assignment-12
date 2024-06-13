import { useQuery } from "@tanstack/react-query";
import { Table } from "flowbite-react";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import UseAuth from "../../../Hooks/useAuth/useAuth";

const PaymentHistory = () => {
    const axiosSecure = UseAxiosSecure();
    const { user } = UseAuth();

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data
        }
    })
    refetch();



    return (
        <div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            index
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Camp name
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Camp Fees
                        </Table.HeadCell>
                        <Table.HeadCell>
                            payment status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            confirmation status
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Transaction Id
                        </Table.HeadCell>
                    </Table.Head>

                    <Table.Body className="divide-y">
                        {
                            payments.map((payment, index) => <Table.Row
                                key={payment._id}
                                className="bg-white dark:border-gray-700 dark:bg-gray-800">

                                <Table.Cell>
                                    {index + 1}
                                </Table.Cell>

                                <Table.Cell>
                                    {payment.campName}
                                </Table.Cell>

                                <Table.Cell>
                                    $ {payment.campFees}
                                </Table.Cell>

                                <Table.Cell>
                                    <button className="bg-green-400 px-3 py-2 rounded-md text-white font-bold">
                                        {payment.paymentStatus}
                                    </button>
                                </Table.Cell>

                                <Table.Cell>
                                <button className="bg-green-400 px-3 py-2 rounded-md text-white font-bold">
                                        confirmed
                                    </button>

                                </Table.Cell>

                                <Table.Cell>
                                    {payment.transactionId}
                                </Table.Cell>

                            </Table.Row>)
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default PaymentHistory;