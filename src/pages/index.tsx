import {
  AlignCenterOutlined,
  CommentOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Layout, Row, Space, Typography } from "antd";
import dynamic from "next/dynamic";
import { Nunito } from "next/font/google";
import Head from "next/head";

const font = Nunito({ subsets: ["latin"], weight: ["400", "700"] });

const Chart = dynamic(() => import("../components/Chart"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>MSD Assessment</title>
        <meta name="description" content="MSD Assessment" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout style={{ minHeight: "100vh" }}>
        <Layout.Header
          style={{
            backgroundColor: "white",
            boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 16, ...font.style }}>
            App Title
          </div>
        </Layout.Header>

        <Layout.Content style={{ padding: "20px 50px" }}>
          <Row wrap={false} style={{ marginBottom: "20px" }}>
            <Col flex="auto" style={{ display: "flex", alignItems: "center" }}>
              <Typography.Title
                level={1}
                style={{
                  margin: 0,
                  fontWeight: 400,
                  fontSize: 20,
                  ...font.style,
                }}
              >
                Page Title
              </Typography.Title>
            </Col>

            <Col flex="none">
              <Space>
                <Button
                  type="text"
                  icon={
                    <DownloadOutlined
                      style={{ color: "#369d8f", fontSize: 16 }}
                    />
                  }
                  style={{ backgroundColor: "white", ...font.style }}
                >
                  Export to PDF
                </Button>
                <Button
                  type="text"
                  icon={
                    <AlignCenterOutlined
                      style={{ color: "#369d8f", fontSize: 16 }}
                    />
                  }
                  style={{ backgroundColor: "white", ...font.style }}
                >
                  Notes (3)
                </Button>
                <Button
                  type="text"
                  icon={
                    <FilterOutlined
                      style={{ color: "#369d8f", fontSize: 16, ...font.style }}
                    />
                  }
                  style={{ backgroundColor: "white" }}
                >
                  Filter (9+)
                </Button>
              </Space>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Card title="Chart Title" style={font.style}>
                <Card.Grid hoverable={false} style={{ width: "100%" }}>
                  <Chart />
                </Card.Grid>

                <Card.Grid
                  hoverable={false}
                  style={{ width: "100%", padding: "6px 12px 6px 24px" }}
                >
                  <Row>
                    <Col
                      flex="auto"
                      style={{ display: "flex", alignItems: "center" }}
                    >
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
            </Col>

            <Col span={12}>
              <Card title="Chart Title" style={font.style}>
                <Card.Grid hoverable={false} style={{ width: "100%" }}>
                  <Chart />
                </Card.Grid>

                <Card.Grid
                  hoverable={false}
                  style={{ width: "100%", padding: "6px 12px 6px 24px" }}
                >
                  <Row>
                    <Col
                      flex="auto"
                      style={{ display: "flex", alignItems: "center" }}
                    >
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
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </>
  );
}
