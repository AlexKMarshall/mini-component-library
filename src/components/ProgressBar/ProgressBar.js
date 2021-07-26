/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

function clamp({ value, min, max }) {
  return Math.max(Math.min(value, max), min);
}

function ProgressBar({ value, size }) {
  const clampedValue = clamp({ value, min: 0, max: 100 });
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      value={clampedValue}
      size={size}
    >
      <ProgressValue value={clampedValue} />
      <VisuallyHidden>{clampedValue}%</VisuallyHidden>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 370px;
  height: ${(p) =>
    p.size === "large" ? "24px" : p.size === "medium" ? "12px" : "8px"};
  border-radius: ${(p) => (p.size === "large" ? "8px" : "4px")};
  background-color: ${COLORS.transparentGray15};
  padding: ${(p) => (p.size === "large" ? "4px" : "0px")};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const ProgressValue = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${COLORS.primary};
    transform: translateX(${(p) => -100 + p.value}%);
    transition: transform 0.2s ease-in-out;
  }
`;

export default ProgressBar;
