import { useContext } from "react";
import { ColorContext } from "../App";

const GreenPage = () => {
  const Context = useContext(ColorContext);
  console.log(Context);
  return <h1 style={{ color: "green" }}>Green Page</h1>;
};

export default GreenPage;
