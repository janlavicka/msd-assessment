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
  );
}
