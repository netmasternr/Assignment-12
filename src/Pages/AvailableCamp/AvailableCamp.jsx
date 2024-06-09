import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../Components/Hooks/AxiosSecure/AxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AvailableCard from "./AvailableCard/AvailableCard";
import { useState } from "react";

const AvailableCamp = () => {
    const axiosSecure = UseAxiosSecure();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortCriteria, setSortCriteria] = useState('');
    const [isThreeColumnLayout, setIsThreeColumnLayout] = useState(true);

    const { data: campsData = [] } = useQuery({
        queryKey: ['availableCamp'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/addCamp');
            return data;
        }
    });

    // Filter camps by search query
    const filteredCamps = campsData.filter(camp =>
        camp.campName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort camps based on sort criteria
    const sortedCamps = [...filteredCamps].sort((a, b) => {
        if (sortCriteria === 'campFees') {
            return a.campFees - b.campFees;
        } else if (sortCriteria === 'campName') {
            return a.campName.localeCompare(b.campName);
        }
        return 0;
    });

    // Clear search button functionality
    const clearSearchBtn = () => {
        setSearchQuery('');
    };

    // Toggle layout
    const toggleLayout = () => {
        setIsThreeColumnLayout(!isThreeColumnLayout);
    };

    return (
        <div className="pt-20">
            <Helmet>
                <title>Available Camps</title>
            </Helmet>
            <div className="flex justify-around mb-5">
                <div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search Camp Name"
                        className="border p-2 rounded-md mr-2"
                    />
                    <button className="px-6 py-2 bg-orange-400 rounded-md font-medium" onClick={clearSearchBtn}>
                        Clear
                    </button>
                </div>
                <div>
                    <select
                        value={sortCriteria}
                        onChange={(e) => setSortCriteria(e.target.value)}
                        className="border p-2 rounded-md"
                    >
                        <option value=''>Sort By</option>
                        <option value='campFees'>Camp Fees</option>
                        <option value='campName'>Alphabetical Order (Camp Name)</option>
                    </select>
                </div>
                <div>
                    <button className="px-6 py-2 bg-blue-400 rounded-md font-medium" onClick={toggleLayout}>
                        Toggle Layout
                    </button>
                </div>
            </div>

            <div className={`grid gap-5 ${isThreeColumnLayout ? 'grid-cols-1 lg:grid-cols-3 md:grid-cols-3' : 'grid-cols-1 lg:grid-cols-2 md:grid-cols-2'}`}>
                {sortedCamps.map(data => (
                    <AvailableCard data={data} key={data._id} />
                ))}
            </div>
        </div>
    );
};

export default AvailableCamp;
