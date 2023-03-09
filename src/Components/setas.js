import "./CSS/setas.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Setas(props) {
  return (
    <>
      <div className="seta esquerda" onClick={props.Anterior}>
        <IoIosArrowBack />
      </div>
      <div className="seta direita" onClick={props.Proximo}>
        <IoIosArrowForward />
      </div>
    </>
  );
}
export default Setas;
