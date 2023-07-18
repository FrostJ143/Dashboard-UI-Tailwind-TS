import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
];

const PieChartBox = () => {
    return (
        <div className="flex h-full flex-col justify-between px-3 py-3">
            <h2 className="text-2xl font-bold">Leads by Source</h2>
            <ResponsiveContainer width="100%" height="50%">
                <PieChart>
                    <Tooltip contentStyle={{ borderRadius: "10px" }} />
                    <Pie
                        data={data}
                        innerRadius={"70%"}
                        outerRadius={"90%"}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((item) => (
                            <Cell key={item.name} fill={item.color} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-between">
                {data.map((item) => (
                    <div key={item.name} className=" flex text-xs">
                        <span
                            className="relative top-1 mr-2 h-2 w-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                        ></span>
                        <div className="flex flex-col items-start gap-1">
                            <span className="">{item.name}</span>
                            <span>{item.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PieChartBox;
