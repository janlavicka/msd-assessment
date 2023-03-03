import { Spin } from "antd";

export function Loading() {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Spin tip="Loading" size="large" />
    </div>
  );
}
