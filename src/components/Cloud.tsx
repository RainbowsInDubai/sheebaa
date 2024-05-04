import "./Cloud.css";

import { CSSProperties } from "react";

import cloudSvg from "../assets/cloud.svg";

interface CloudProps {
  style?: CSSProperties;
}

const Cloud = ({ style }: CloudProps) => {
  return <img src={cloudSvg} alt="Cloud" className="cloud" style={style} />;
};

export default Cloud;
1;
