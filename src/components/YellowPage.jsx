import { useContext } from "react";
import { ColorContext } from "../App";

const YellowPage = () => {
  const Context = useContext(ColorContext);
  console.log(Context);
  return <h1 style={{ color: "yellow" }}>Yellow Page</h1>;
};

export default YellowPage;
