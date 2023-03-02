import { useEffect, useRef } from "react";
import { Chart as G2Chart } from "@antv/g2";

export default function Chart() {
  const container = useRef<HTMLDivElement | null>(null);
  const chart = useRef<G2Chart | null>(null);

  useEffect(() => {
    if (chart.current) return;

    const data = [
      { genre: "Sports", sold: 275 },
      { genre: "Strategy", sold: 115 },
      { genre: "Action", sold: 120 },
      { genre: "Shooter", sold: 350 },
      { genre: "Other", sold: 150 },
    ];

    chart.current = new G2Chart({
      container: container.current as HTMLElement,
      width: 500,
      height: 300,
    });

    chart.current.data(data);

    chart.current
      .interval()
      .position("genre*sold")
      .color("genre", ["#399c90", "#55b9a2", "#6dceb3", "#9e76f5"]);

    chart.current.render();
  }, []);

  return <div ref={container}></div>;
}
