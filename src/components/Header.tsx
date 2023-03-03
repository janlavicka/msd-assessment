import { font } from "@/utils/fonts";
import { Layout } from "antd";

export function Header() {
  return (
    <Layout.Header
      style={{
        backgroundColor: "white",
        boxShadow: "0px 5px 10px 0px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: 16, ...font.style }}>
        MSD Assessment
      </div>
    </Layout.Header>
  );
}
