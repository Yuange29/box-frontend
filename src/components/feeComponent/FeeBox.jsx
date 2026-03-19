import { useContext, useState } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";

import { Text } from "../ui/Typography";
import {
  BoxWrapper,
  FeeItem,
  InfoWrapper,
  Overlay,
} from "../../styles/FeeBoxStyle";

import { deleteFee } from "../../services/fee.service";

const formatDate = (dateStr) => {
  if (!dateStr) return "—";

  const date = new Date(dateStr);
  const days = [
    "Chủ nhật",
    "Thứ 2",
    "Thứ 3",
    "Thứ 4",
    "Thứ 5",
    "Thứ 6",
    "Thứ 7",
  ];

  const day = days[date.getDay()];
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${day} - ${dd} - ${mm} - ${yyyy}`;
};

function InfoCard({ fee, onClose }) {
  return (
    <>
      <Overlay onClick={onClose} />
      <InfoWrapper>
        <div className="info-header">
          <h3 className="info-title">{fee.feeName}</h3>
          <button className="close-btn" onClick={onClose}>
            <i className="fa-solid fa-xmark" />
          </button>
        </div>

        <p className="price-tag">{fee.feePrice?.toLocaleString("vi-VN")}đ</p>

        <div className="divider" />

        <div className="info-row">
          <span className="info-label">
            <i className="fa-solid fa-tag" /> Danh mục
          </span>
          <span className="info-value">{fee.categoryName || "—"}</span>
        </div>
        <div className="info-row">
          <span className="info-label">
            <i className="fa-regular fa-calendar" /> Ngày
          </span>
          <span className="info-value">{formatDate(fee.date)}</span>
        </div>
        <div className="info-row">
          <span className="info-label">
            <i className="fa-solid fa-note-sticky" /> Ghi chú
          </span>
          <span className="info-value">
            {fee.feeDescription || "Không có ghi chú"}
          </span>
        </div>
      </InfoWrapper>
    </>
  );
}

function FeeCard({ fee }) {
  const { setLoadingData } = useContext(LoadingContext);
  const { setLoadingFees } = useContext(DataContext);
  const { confirm } = useContext(ConfirmContext);
  const { toast } = useContext(ToastContext);

  const [showInfo, setShowInfo] = useState(false);

  const handleInfo = async () => setShowInfo(true);

  const handleDelete = async (feeId) => {
    const ok = await confirm({
      title: "Xóa chi tiêu",
      message: `Bạn chắc chắn muốn xóa chi tiêu "${fee.feeName}" không?`,
      danger: true,
    });

    if (!ok) return;

    try {
      setLoadingData(true);
      await deleteFee(feeId);
      toast.success(`Xóa chi tiêu "${fee.feeName}" thành công!`);
      setLoadingFees(true);
    } catch (err) {
      const msg =
        err?.response?.data?.message || err?.message || "Xóa thất bại";
      toast.error(msg);
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <>
      <FeeItem>
        <p className="title">{fee.feeName}</p>
        <p className="price">{fee.feePrice?.toLocaleString("vi-VN")}đ</p>
        <button className="more" onClick={() => handleInfo()}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <button className="delete" onClick={() => handleDelete(fee.feeId)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </FeeItem>
      {showInfo && <InfoCard fee={fee} onClose={() => setShowInfo(false)} />}
    </>
  );
}

export default function FeeBox({ fees }) {
  return (
    <BoxWrapper>
      {fees && fees.length > 0 ? (
        fees
          .slice()
          .reverse()
          .map((fee) => <FeeCard key={fee.feeId} fee={fee} />)
      ) : (
        <Text
          style={{
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Bạn chưa có chi phí nào!
        </Text>
      )}
    </BoxWrapper>
  );
}
