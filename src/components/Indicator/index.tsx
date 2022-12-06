import React from "react";
import { IndicatorModel } from "../../interfaces/IndicatorModel";
import {
  IndicatorNameStyled,
  IndicatorStyled,
  IndicatorUnitMeasureStyled,
  IndicatorValueStyled,
} from "./styles";

type IndicatorProps = {
  data: IndicatorModel;
};

const Indicator: React.FC<IndicatorProps> = ({ data }) => {
  return (
    <IndicatorStyled>
      <IndicatorNameStyled>{data.nombre}</IndicatorNameStyled>
      <IndicatorUnitMeasureStyled>
        {data.unidad_medida}
      </IndicatorUnitMeasureStyled>
      <IndicatorValueStyled>{data.valor}</IndicatorValueStyled>
    </IndicatorStyled>
  );
};

export default Indicator;
