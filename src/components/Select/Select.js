import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalElement>
        {displayedValue}
        <Icon id="chevron-down" />
      </PresentationalElement>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-areas: "layer";
  width: max-content;
`;

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const PresentationalElement = styled.div`
  order: -1;
  display: inline-flex;
  align-items: center;
  padding: 16px 6px 16px 12px;
  gap: 18px;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  ${NativeSelect}:focus + & {
    outline: 5px auto ${COLORS.primary};
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

export default Select;
