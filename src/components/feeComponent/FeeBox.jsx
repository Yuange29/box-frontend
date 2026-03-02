import styled from "styled-components";
import { useContext } from "react";

import { LoadingContext } from "../../contexts/LoadingContext";
import { DataContext } from "../../contexts/DataContext";
import { ConfirmContext } from "../../contexts/ConfirmContext";

import { deleteFee } from "../../services/fee.service";

const BoxWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center; /* ← sửa align-item → align-items */
  flex-direction: column;
  gap: 12px;
`;

const FeeItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr auto auto;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  border-radius: 8px;
  background: #f5f5f5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .title {
    font-size: 16px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    color: #176782;
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
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  }

  .more {
    background: #176782;
    color: white;
  }

  .delete {
    background: #dc3545;
    color: white;
  }
`;

function FeeCard({ fee }) {
  const { setLoadingData } = useContext(LoadingContext);
  const { setLoadingFees } = useContext(DataContext);
  const { confirm } = useContext(ConfirmContext);

  const handleDelete = async (feeId) => {
    const ok = await confirm({
      title: "Xóa chi tiêu",
      message: "Bạn chắc chắn muốn xóa chi tiêu này chứ!",
      danger: true,
    });

    if (!ok) return;

    try {
      setLoadingData(true);
      await deleteFee(feeId);
      setLoadingFees(true);
    } catch (err) {
      console.log("Lỗi: ", err);
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
        <p style={{ textAlign: "center", marginTop: "40px" }}>
          Bạn chưa có chi phí nào!
        </p>
      )}
    </BoxWrapper>
  );
}
