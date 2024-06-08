import { useQuery } from "@tanstack/react-query";
import UseAuth from "../useAuth/useAuth";
import UseAxiosSecure from "../AxiosSecure/AxiosSecure";

const UseOrganizer = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure();

    const { data: isOrganizer, isPending: isOrganizerLoading } = useQuery({
        queryKey: [user?.email, 'UseOrganizer'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            return res.data.isOrganizer;
        }
    })
    return [isOrganizer, isOrganizerLoading]
};

export default UseOrganizer;