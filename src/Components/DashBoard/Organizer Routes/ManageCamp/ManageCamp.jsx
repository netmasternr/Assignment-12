import { Table } from "flowbite-react";


const ManageCamp = () => {
    return (
        <div>

            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>name</Table.HeadCell>
                        <Table.HeadCell>Date & Time</Table.HeadCell>
                        <Table.HeadCell>Location</Table.HeadCell>
                        <Table.HeadCell>
                            Healthcare Professional
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Update
                        </Table.HeadCell>
                        <Table.HeadCell>
                            Delete
                        </Table.HeadCell>

                    </Table.Head>

                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            
                            <Table.Cell>name</Table.Cell>
                            <Table.Cell>Date & Time</Table.Cell>
                            <Table.Cell>Location</Table.Cell>

                            <Table.Cell>
                            Healthcare Professional
                            </Table.Cell>

                            <Table.Cell>
                            Update
                            </Table.Cell>

                            <Table.Cell>
                            Delete
                            </Table.Cell>
                        </Table.Row>

                        
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
};

export default ManageCamp;