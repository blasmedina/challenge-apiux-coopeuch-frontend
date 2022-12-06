import styled from "styled-components";

export const IndicatorStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 5px;
  grid-template-areas: "name value unitMeasure";
`;

export const IndicatorNameStyled = styled.div`
  grid-area: name;
`;

export const IndicatorUnitMeasureStyled = styled.div`
  grid-area: unitMeasure;
`;

export const IndicatorValueStyled = styled.div`
  grid-area: value;
  text-align: end;
`;
