import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SmallInput = styled.input`
  width: ${(p) => p.width}px;
  padding: 4px;
  padding-left: 24px;
  border: none;
  border-bottom: 1px solid ${COLORS.black};
  font-size: ${14 / 16}rem;
  font-weight: bold;
  color: ${COLORS.gray700};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const LargeInput = styled(SmallInput)`
  font-size: ${18 / 16}rem;
  padding: 7px;
  padding-left: 24px;
  border-width: 2px;
`;

const inputComponents = {
  small: SmallInput,
  large: LargeInput,
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const Input = inputComponents[size];

  return (
    <Wrapper>
      <InputIcon id={icon} size={16} />
      <Input placeholder={placeholder} width={width} aria-label={label} />
    </Wrapper>
  );
};

const InputIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

const Wrapper = styled.div`
  position: relative;
`;

export default IconInput;
