import { Table } from "flowbite-react";

const RegisteredCamps = () => {
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
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                            <Table.Cell>camp a</Table.Cell>
                            <Table.Cell>200$</Table.Cell>
                            <Table.Cell>participant name</Table.Cell>

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
                        </Table.Row>


                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default RegisteredCamps;