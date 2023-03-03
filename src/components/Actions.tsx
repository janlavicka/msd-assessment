import { font } from "@/utils/fonts";
import {
  AlignCenterOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";

export function Actions() {
  return (
    <Space>
      <Button
        type="text"
        icon={<DownloadOutlined style={{ color: "#369d8f", fontSize: 16 }} />}
        style={{ backgroundColor: "white", ...font.style }}
      >
        Export to PDF
      </Button>
      <Button
        type="text"
        icon={
          <AlignCenterOutlined style={{ color: "#369d8f", fontSize: 16 }} />
        }
        style={{ backgroundColor: "white", ...font.style }}
      >
        Notes <span style={{ color: "#9a9a9e", marginLeft: 5 }}>(3)</span>
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
        Filter{" "}
        <span
          style={{
            display: "inline-flex",
            height: 22,
            width: 22,
            marginLeft: 5,
            justifyContent: "center",
            borderRadius: "100%",
            backgroundColor: "#369d8f",
            color: "white",
            fontSize: 12,
            lineHeight: "22px",
          }}
        >
          9+
        </span>
      </Button>
    </Space>
  );
}
