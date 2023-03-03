import { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

export function DonutChart() {
  const container = useRef<HTMLDivElement | null>(null);
  const chart = useRef<Chart | null>(null);

  useEffect(() => {
    if (chart.current) return;

    const data = [
      { title: "Sports", value: 275 },
      { title: "Strategy", value: 115 },
      { title: "Action", value: 120 },
      { title: "Shooter", value: 350 },
      { title: "Other", value: 150 },
    ];

    chart.current = new Chart({
      container: container.current as HTMLElement,
      width: 500,
      height: 300,
    });

    chart.current.data(data);

    chart.current.coordinate("theta", {
      radius: 0.75,
      innerRadius: 0.6,
    });

    chart.current
      .interval()
      .adjust("stack")
      .position("value")
      .color("title", ["#399c90", "#55b9a2", "#6dceb3", "#9e76f5"]);

    chart.current.render();
  }, []);

  return <div ref={container}></div>;
}
