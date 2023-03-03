import { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

type Props = {
  data: { title: string; value: number }[];
};

export function DonutChart({ data }: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const chart = useRef<Chart | null>(null);

  useEffect(() => {
    if (chart.current || !container.current) return;

    chart.current = new Chart({
      container: container.current as HTMLElement,
      width: container.current.clientWidth,
      height: 300,
    });

    chart.current.data(data);

    chart.current.coordinate("theta", {
      radius: 0.75,
      innerRadius: 0.6,
    });

    chart.current.scale("value", {
      formatter: (val) => val + "%",
    });

    chart.current
      .interval()
      .adjust("stack")
      .position("value")
      .color("title", ["#399c90", "#55b9a2", "#6dceb3", "#9e76f5"]);

    chart.current.render();
  }, [data]);

  return <div ref={container}></div>;
}
