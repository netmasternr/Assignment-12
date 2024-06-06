import { Table } from "flowbite-react";

const ManageRegisteredCamp = () => {
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
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

                            <Table.Cell>participant name</Table.Cell>
                            <Table.Cell>camp name</Table.Cell>
                            <Table.Cell>300$</Table.Cell>

                            <Table.Cell>
                                paid 
                            </Table.Cell>

                            <Table.Cell>
                                confirm
                            </Table.Cell>
                            <Table.Cell>
                                x
                            </Table.Cell>
                        </Table.Row>


                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ManageRegisteredCamp;