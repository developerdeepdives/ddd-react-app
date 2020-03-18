import React from "react";
import styled from "styled-components";
import { listenerCount } from "cluster";

const NumberLine = styled.div`
  position: relative;
  margin: 21px auto;
  max-width: 800px;
  font-family: "Roboto Mono";
  height: 0px;
  color: #666;
  user-select: none;
`;

const NumberContainer = styled.div`
  position: absolute;
  top: 42px;
`;

const Number = styled.div`
  position: relative;
  left: -80px;
  width: 100px;
  text-align: right;
`;

interface Props {
  lineCount?: number;
}

const Numbers: React.FC<Props> = ({ lineCount = 400 }) => {
  const numberQuantity = lineCount;
  const numbers = Array.from(
    new Array(numberQuantity),
    (_, index) => index + 1
  );
  return (
    <NumberLine>
      <NumberContainer>
        {numbers.map(num => (
          <Number key={num}>{num}</Number>
        ))}
      </NumberContainer>
    </NumberLine>
  );
};

export default Numbers;
