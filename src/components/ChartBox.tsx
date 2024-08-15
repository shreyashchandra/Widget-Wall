import AreaCharts from "./AreaCharts";
import PyCharts from "./ui/pyCharts";
import BarGraphChart from "./BarGraphChart";
import { useState } from "react";

function ChartBox() {
  const [areaChartNumber, setAreaChartNumber] = useState<{ title: string }[]>([
    { title: "One" },
    { title: "Two" },
    { title: "Three" },
    { title: "Four" },
  ]);
  const [piChartNumber, setPiChartNumber] = useState<{ title: string }[]>([
    { title: "One" },
    { title: "Two" },
    { title: "Three" },
    { title: "Four" },
  ]);
  const [barChartNumber, setBarChartNumber] = useState<{ title: string }[]>([
    { title: "One" },
    { title: "Two" },
    { title: "Three" },
    { title: "Four" },
  ]);

  const removeChart = (type: string, index: number) => {
    if (type === "area") {
      setAreaChartNumber((prev) => prev.filter((_, i) => i !== index));
    } else if (type === "pie") {
      setPiChartNumber((prev) => prev.filter((_, i) => i !== index));
    } else if (type === "bar") {
      setBarChartNumber((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <div className="p-5">
        <h1 className="text-2xl text-neutral-300 font-semibold">Area Chart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-10 gap-7 gap-y-5">
          {areaChartNumber.length > 0 ? (
            areaChartNumber.map((chart, index) => (
              <div key={index} className="flex">
                <AreaCharts cardTitle={chart.title} />
                <p
                  className="text-white text-xl font-bold -ml-10 my-7 cursor-pointer "
                  onClick={() => removeChart("area", index)}
                >
                  <img src="/cross.svg" alt="close" width={15} height={15} />
                </p>
              </div>
            ))
          ) : (
            <div className="text-xl font-semibold text-center text-neutral-400">
              No Chart Found Click on Add widget
            </div>
          )}
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl text-neutral-300 font-semibold">Pie Chart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-10 gap-7 gap-y-5">
          {piChartNumber.length > 0 ? (
            piChartNumber.map((chart, index) => (
              <div key={index} className="flex">
                <PyCharts cardTitle={chart.title} />
                <p
                  className="text-white text-xl font-bold -ml-10 my-7 cursor-pointer "
                  onClick={() => removeChart("pie", index)}
                >
                  <img src="/cross.svg" alt="close" width={15} height={15} />
                </p>
              </div>
            ))
          ) : (
            <div className="text-xl font-semibold text-center text-neutral-400">
              No Chart Found Click on Add widget
            </div>
          )}
        </div>
      </div>
      <div className="p-5">
        <h1 className="text-2xl text-neutral-300 font-semibold">Bar Chart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-10 gap-7 gap-y-5">
          {barChartNumber.length > 0 ? (
            barChartNumber.map((chart, index) => (
              <div key={index} className="flex">
                <BarGraphChart title={chart.title} />
                <p
                  className="text-white text-xl font-bold -ml-10 my-7 cursor-pointer "
                  onClick={() => removeChart("bar", index)}
                >
                  <img src="/cross.svg" alt="close" width={15} height={15} />
                </p>
              </div>
            ))
          ) : (
            <div className="text-xl font-semibold text-center text-neutral-400">
              No Chart Found Click on Add widget
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
