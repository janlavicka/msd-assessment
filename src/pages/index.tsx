import { Actions } from "@/components/Actions";
import { Header } from "@/components/Header";
import { CasesByAgePanel } from "@/components/panels/CasesByAgePanel";
import { VariantsPanel } from "@/components/panels/VariantsPanel";
import { font } from "@/utils/fonts";
import { Col, Layout, Row, Typography } from "antd";
import Head from "next/head";

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
        <Header />

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
                Dashboard
              </Typography.Title>
            </Col>

            <Col flex="none">
              <Actions />
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <CasesByAgePanel />
            </Col>

            <Col span={12}>
              <VariantsPanel />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </>
  );
}
