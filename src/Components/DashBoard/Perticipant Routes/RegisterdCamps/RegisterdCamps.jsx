import { Table } from "flowbite-react";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic/UseAxiosPublic";
import UseAuth from "../../../Hooks/useAuth/useAuth";
import { useQuery } from "@tanstack/react-query";

const RegisteredCamps = () => {
    const axiosPublic = UseAxiosPublic();
    const { user } = UseAuth();

    const { data: myData = [], refetch } = useQuery({
        queryKey: ['myJoinData'],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/joinCamp/MyData/${user.email}`)
            return data;
        }
    })


    return (
        <div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Camp name</Table.HeadCell>
                        <Table.HeadCell>Camp Fees</Table.HeadCell>
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
                                <Table.Cell>{data.perticipantName || 'unknown'}</Table.Cell>

                                <Table.Cell>
                                    paid
                                </Table.Cell>

                                <Table.Cell>
                                    confirmed
                                </Table.Cell>
                                <Table.Cell>
                                    cancel
                                </Table.Cell>
                                <Table.Cell>
                                    feedback
                                </Table.Cell>
                            </Table.Row>)
                        }


                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default RegisteredCamps;