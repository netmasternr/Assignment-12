import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../AxiosSecure/AxiosSecure";

const UseCamp = () => {
    const axiosSecure = UseAxiosSecure();

    const { data } = useQuery({
        queryKey: ['deleteCamp'],
        queryFn: async () => {
            const { data } = await axiosSecure.delete('/addCamp/:id')
        }
    })
    return [data]
};

export default UseCamp;