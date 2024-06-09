import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../AxiosSecure/AxiosSecure";

const UseCamp = () => {
    const axiosSecure = UseAxiosSecure();

    const { data: camp = [], isLoading, refetch } = useQuery({
        queryKey: ['CampHook'],
        queryFn: async () => {
            const { data } = await axiosSecure.delete('/addCamp')
            return data;
        }
    })
    return [camp, isLoading, refetch]
};

export default UseCamp;