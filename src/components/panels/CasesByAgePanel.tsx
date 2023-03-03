import { font } from "@/utils/fonts";
import { trpc } from "@/utils/trpc";
import { CommentOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import dynamic from "next/dynamic";
import { useCallback } from "react";
import { Loading } from "../Loading";

const Chart = dynamic(
  () => import("../charts/BarChart").then((mod) => mod.BarChart),
  {
    ssr: false,
  },
);

export function CasesByAgePanel() {
  const { data, isFetched } = trpc.variants.useQuery();

  const renderChart = useCallback(() => {
    if (!isFetched) return <Loading />;

    if (data) return <Chart data={data} />;

    return null;
  }, [data, isFetched]);

  return (
    <Card title="New cases by age group" style={font.style}>
      <Card.Grid hoverable={false} style={{ width: "100%" }}>
        {renderChart()}
      </Card.Grid>

      <Card.Grid
        hoverable={false}
        style={{ width: "100%", padding: "6px 12px 6px 24px" }}
      >
        <Row>
          <Col flex="auto" style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              alt="User Avatar"
              width={25}
              height={25}
              style={{ borderRadius: "100%" }}
              loading="lazy"
            />
          </Col>

          <Col>
            <Button type="text" icon={<CommentOutlined />}>
              3
            </Button>
          </Col>
        </Row>
      </Card.Grid>
    </Card>
  );
}
