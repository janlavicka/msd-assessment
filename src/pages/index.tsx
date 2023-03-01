import Head from "next/head";
import { Inter } from "next/font/google";
import { Button, Card, Col, Layout, Row } from "antd";

const inter = Inter({ subsets: ["latin"] });

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
        <Layout.Header style={{ backgroundColor: "white" }}>
          <div style={{ fontWeight: "bold" }}>App Title</div>
        </Layout.Header>

        <Layout.Content style={{ padding: "25px 50px" }}>
          <h1>Page Title</h1>

          <Row gutter={16}>
            <Col span={12}>
              <Card title="Chart Title">
                <Card.Grid hoverable={false} style={{ width: "100%" }}>
                  content
                </Card.Grid>
                <Card.Grid
                  hoverable={false}
                  style={{ width: "100%", padding: "12px 24px" }}
                >
                  footer
                </Card.Grid>
              </Card>
            </Col>

            <Col span={12}>
              <Card title="Chart Title">
                <Card.Grid hoverable={false} style={{ width: "100%" }}>
                  content
                </Card.Grid>
                <Card.Grid
                  hoverable={false}
                  style={{ width: "100%", padding: "12px 24px" }}
                >
                  footer
                </Card.Grid>
              </Card>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </>
  );
}
