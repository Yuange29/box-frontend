import styled from "styled-components";
import { useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";
import { ToastContext } from "../../contexts/ToastContext";

import { deleteFee } from "../../services/fee.service";

const BoxWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FeeItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr auto auto;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 8px;
  background: var(--bg-card);
  border-bottom: 1px solid var(--border-primary);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  transition: border-color 0.2s ease;

  &:hover {
    border-color: var(--border-hover);
    scale: 1.01;
  }

  .title {
    font-size: 16px;
    font-weight: 500;
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    color: var(--text-secondary);
    white-space: nowrap;
  }

  button {
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    &:active {
      opacity: 0.8;
      transform: translateY(0);
    }
  }

  .more {
    background: var(--bg-hover);
    color: var(--text-primary);
    border: 1px solid var(--border-primary);
  }

  .delete {
    background: var(--error);
    color: white;
  }

  @media (max-width: 768px) {
    gap: 8px;
    padding: 4px 8px 4px 12px;

    .title,
    .price {
      font-size: 16px;
      margin: 4px 8px;
    }

    button {
      width: 30px;
      height: 30px;
    }
  }
`;

function FeeCard({ fee }) {
  const { setLoadingData } = useContext(LoadingContext);
  const { setLoadingFees } = useContext(DataContext);
  const { confirm } = useContext(ConfirmContext);
  const { toast } = useContext(ToastContext);

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
    <FeeItem>
      <p className="title">{fee.feeName}</p>
      <p className="price">{fee.feePrice?.toLocaleString("vi-VN")}đ</p>
      <button className="more">
        <i className="fa-solid fa-plus"></i>
      </button>
      <button className="delete" onClick={() => handleDelete(fee.feeId)}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </FeeItem>
  );
}

export default function FeeBox({ fees }) {
  return (
    <BoxWrapper>
      {fees && fees.length > 0 ? (
        fees.map((fee) => <FeeCard key={fee.feeId} fee={fee} />)
      ) : (
        <p
          style={{
            textAlign: "center",
            marginTop: "40px",
            color: "var(--text-muted)",
          }}
        >
          Bạn chưa có chi phí nào!
        </p>
      )}
    </BoxWrapper>
  );
}
