import React from "react";
import styled from "styled-components";

const NumberLine = styled.div`
  position: relative;
  margin: 21px auto;
  max-width: 800px;
  font-family: "Roboto Mono";
  height: 0px;
  color: #666;
  user-select: none;
`;

const NumberList = styled.div`
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
  const numbers = Array.from(
    new Array(lineCount),
    (currentItem, index) => index + 1
  );
  return (
    <NumberLine>
      <NumberList>
        {numbers.map(num => (
          <Number key={num}>{num}</Number>
        ))}
      </NumberList>
    </NumberLine>
  );
};

export default Numbers;
