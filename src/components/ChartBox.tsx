import { ResponsiveContainer, Line, LineChart, Tooltip } from "recharts";

interface ChartBoxProps {
    color: string;
    icon: string;
    title: string;
    number: string;
    dataKey: string;
    percentage: number;
    chartData: object[];
}

const ChartBox = (props: ChartBoxProps) => {
    return (
        <div className="flex h-full px-3 py-3">
            <div className="flex basis-3/5 flex-col justify-between">
                <div className="flex items-center">
                    <img src={props.icon} alt="" />
                    <span className={`ml-1 `}>{props.title}</span>
                </div>
                <span className="text-2xl font-bold">{props.number}</span>
                <span className=" cursor-pointer text-sm" style={{ color: props.color }}>
                    View all
                </span>
            </div>
            <div className="flex basis-2/5 flex-col">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={300} height={100} data={props.chartData}>
                        <Tooltip
                            contentStyle={{
                                background: "transparent",
                                border: "none",
                                fontSize: "12px",
                            }}
                            labelStyle={{ display: "none" }}
                            position={{ x: 10, y: 40 }}
                        />
                        <Line
                            type="monotone"
                            dataKey={props.dataKey}
                            stroke={props.color}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>{" "}
                <div className="flex flex-col items-end">
                    <span
                        className=" font-bold"
                        style={props.percentage < 0 ? { color: "tomato" } : { color: "lightgreen" }}
                    >
                        {props.percentage}%
                    </span>
                    <span className="text-sm">this month</span>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;
