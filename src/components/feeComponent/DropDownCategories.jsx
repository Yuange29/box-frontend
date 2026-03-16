import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

export function DropDownCategories({
  id,
  name,
  value,
  onChange,
  options,
  disabled,
  placeholder = "Chọn danh mục...",
}) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState({});
  const ref = useRef(null);

  // Tính toán vị trí của trigger để menu fixed bám theo
  const handleOpen = () => {
    if (!open && ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
    setOpen((v) => !v);
  };

  // Cập nhật vị trí khi scroll / resize
  useEffect(() => {
    if (!open) return;
    const update = () => {
      if (ref.current) setRect(ref.current.getBoundingClientRect());
    };
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [open]);

  // Đóng khi click ngoài
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (val) => {
    onChange({ target: { name, value: val } });
    setOpen(false);
  };

  return (
    <Wrapper ref={ref}>
      <Trigger
        id={id}
        type="button"
        className={open ? "is-open" : ""}
        onClick={handleOpen}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
      >
        <TriggerText $empty={!value}>{value || placeholder}</TriggerText>
        <Chevron viewBox="0 0 20 20">
          <polyline points="5 8 10 13 15 8" />
        </Chevron>
      </Trigger>

      {open && (
        <Menu $rect={rect} role="listbox">
          <List>
            {options.map((item) => (
              <Option
                key={item.categoryName}
                role="option"
                aria-selected={value === item.categoryName}
                className={value === item.categoryName ? "selected" : ""}
                onClick={() => handleSelect(item.categoryName)}
              >
                {item.categoryName}
              </Option>
            ))}
          </List>
        </Menu>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Trigger = styled.button`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 14px;
  height: 42px;
  background: var(--bg-secondary);
  border: 1.5px solid var(--border-primary)
  border-radius: 16px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-family: inherit;
  transition:
    border-color 0.2s,
    box-shadow 0.2s,
    background 0.2s;

  &:hover {
     border-color: var(--border-hover);
    background: var(--bg-hover);
    border-color: var(--border-hover);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.05);
  }

  &.is-open {
    border-color: var(--border-hover);
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.06);
    background: var(--bg-hover);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TriggerText = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ $empty }) =>
    $empty ? "var(--text-muted)" : "var(--text-primary)"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Chevron = styled.svg`
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  color: var(--text-muted);
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition:
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    color 0.2s;

  ${Trigger}.is-open & {
    transform: rotate(180deg);
    color: var(--text-secondary);
  }
`;

const Menu = styled.div`
  position: fixed;
  left: ${({ $rect }) => $rect.left}px;
  top: ${({ $rect }) => $rect.bottom + 6}px;
  width: ${({ $rect }) => $rect.width}px;
  z-index: 9999;
  background: var(--bg-card);
  border: 1.5px solid var(--border-primary);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  transform-origin: top center;
  animation: ddOpen 0.2s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;

  @keyframes ddOpen {
    from {
      opacity: 0;
      transform: scaleY(0.88) translateY(-6px);
    }
    to {
      opacity: 1;
      transform: scaleY(1) translateY(0);
    }
  }
`;

const List = styled.div`
  overflow-y: auto;
  max-height: ${48 * 4}px;
  padding: 4px;
  scrollbar-width: thin;
  scrollbar-color: var(--border-primary) transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border-primary);
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--border-hover);
  }
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 14px;
  border-radius: 7px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  color: var(--text-secondary);
  user-select: none;
  position: relative;
  transition:
    background 0.15s,
    color 0.15s;

  &:hover {
    background: var(--bg-hover);
    color: var(--text-primary);
  }

  &.selected {
    background: rgba(255, 255, 255, 0.06);
    color: var(--text-primary);
    font-weight: 500;

    &::after {
      content: "";
      position: absolute;
      right: 14px;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: var(--text-primary);
    }
  }

  @media (max-width: 480px) {
    font-size: 18px;
    height: 30px;
  }
`;
