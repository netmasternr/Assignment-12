import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../Hooks/useAuth/useAuth";
import UseAxiosSecure from "../../../Hooks/AxiosSecure/AxiosSecure";
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const Analytics = () => {
    const { user } = UseAuth();
    const axiosSecure = UseAxiosSecure()

    const { data: analytic = [] } = useQuery({
        queryKey: ['analytics'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/analytics/${user?.email}`)
            return res.data
        }
    })
  



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };


    return (
        <div>
            <h1 className="text-center mb-10"> analytics Chart</h1>

            <div>
                <BarChart
                    width={1000}
                    height={500}
                    data={analytic}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="campName" />
                    <YAxis />
                    <Bar dataKey="campFees" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                        {analytic.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                        ))}
                    </Bar>
                </BarChart>
            </div>


        </div>
    );
};

export default Analytics;