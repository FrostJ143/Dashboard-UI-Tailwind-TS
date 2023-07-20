import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface SingleProps {
    id: number;
    img?: string;
    title: string;
    info: object;
    chart?: {
        dataKeys: { name: string; color: string }[];
        data: object[];
    };
    activities?: { time: string; text: string }[];
}

const Single = (props: SingleProps) => {
    return (
        <div className="flex h-full flex-col sm:flex-row">
            <div className="flex basis-1/2 flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={props.img || "/noavatar.png"}
                            alt=""
                            className="h-20 w-24 rounded-lg object-cover"
                        />
                        <h2 className="text-xl text-soft">{props.title}</h2>
                        <button className="rounded-md bg-red-400 px-2 py-2">Update</button>
                    </div>
                    {Object.entries(props.info).map((item) => (
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-soft">{item[0]}:</span>
                            <span>{item[1]}</span>
                        </div>
                    ))}
                </div>
                <hr className="w-[90%] border-[0.5px] border-solid border-gray-500" />
                {props.chart && (
                    <ResponsiveContainer width="90%" height="100%" className="hidden lg:block">
                        <LineChart
                            data={props.chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {props.chart.dataKeys.map((item) => (
                                <Line
                                    type="monotone"
                                    dataKey={item.name}
                                    stroke={item.color}
                                    activeDot={{ r: 8 }}
                                />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                )}
            </div>
            <div className="flex h-full flex-col items-start justify-between gap-2">
                <h2 className="text-xl font-semibold text-soft">Latest Activites</h2>
                {props.activities && (
                    <ul className="bordere-solid flex flex-col self-start justify-self-end border-l border-[#f45b69] ">
                        {props.activities.map((activity) => (
                            <li className="relative mt-8 flex min-w-[200px] flex-col gap-2 rounded-md bg-[#f45b6810] px-2 py-2 md:min-w-[400px]">
                                <div className="absolute -left-1 bottom-0 h-2 w-2 rounded-full bg-[#f45b69]"></div>
                                <span className="text-sm">{activity.text}</span>
                                <span className="text-xs text-soft">{activity.time}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Single;
