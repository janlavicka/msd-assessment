import { font } from "@/utils/fonts";
import { CommentOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import dynamic from "next/dynamic";

const Chart = dynamic(
  () => import("../charts/BarChart").then((mod) => mod.BarChart),
  {
    ssr: false,
  },
);

export function CasesByAgePanel() {
  return (
    <Card title="New cases by age group" style={font.style}>
      <Card.Grid hoverable={false} style={{ width: "100%" }}>
        <Chart />
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
