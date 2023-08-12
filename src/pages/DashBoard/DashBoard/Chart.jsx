import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from "react-router-dom";

const Chart = () => {
       const [data, setData] = useState([]);
  //const data = useLoaderData();
  console.log(data);
     useEffect(() => {
       fetch('sale.json')
         .then((res) => res.json())
         .then((data) => setData(data));
     }, []);

  return (
    <div>
      <p className="text-3xl text-center py-5 mt-14 font-bold text-red-700">
        Product Selling Chart
      </p>
      <div className="container mx-auto py-5">
        <ResponsiveContainer width={"100%"} aspect={3}>
          <AreaChart
            width={1000}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="number"
              stroke="red"
              fill="rgba(236, 144, 144, 0.623)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
