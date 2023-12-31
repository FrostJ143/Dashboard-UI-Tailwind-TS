import BarChartBox from "../components/BarChartBox";
import BigChartBox from "../components/BigChartBox";
import ChartBox from "../components/ChartBox";
import PieChartBox from "../components/PieChartBox";
import Topdeal from "../components/Topdeal";
import {
    chartBoxConversion,
    chartBoxProduct,
    chartBoxRevenue,
    chartBoxUser,
    barChartBoxVisit,
    barChartBoxRevenue,
} from "../data";

const Home = () => {
    return (
        <div className=" grid h-full auto-rows-[minmax(120px,auto)] gap-4 sm:grid-rows-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="grid-box-border row-span-3">
                <Topdeal />
            </div>
            <div className="grid-box-border">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="grid-box-border">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="grid-box-border row-span-3">
                <PieChartBox />
            </div>
            <div className="grid-box-border">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="grid-box-border">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="grid-box-border col-span-2 row-span-2 hidden md:block">
                <BigChartBox />
            </div>
            <div className="grid-box-border">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="grid-box-border">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    );
};

export default Home;
