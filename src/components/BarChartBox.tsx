import { ResponsiveContainer, BarChart, Bar, Tooltip } from "recharts";

interface BarChartBoxProps {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}

const BarChartBox = (props: BarChartBoxProps) => {
    return (
        // h-full w-full: 100% will take into consider another element if parent has display flex, if not will 100% of parent
        <div className="flex h-full flex-col px-2 py-2">
            <h2 className="font-semibold">{props.title}</h2>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={props.chartData}>
                    <Tooltip
                        contentStyle={{ background: "#2a3447", borderRadius: "10px" }}
                        labelStyle={{ display: "none" }}
                        cursor={{ fill: "none" }}
                    />
                    <Bar dataKey={props.dataKey} fill={props.color} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartBox;
