import { useContext } from "react";
import { DataContext } from "../../context/Data";
import "./header.css";
import logoFb from "../../assets/logo-fb.png";

const Header = () => {
  const { farm } = useContext(DataContext);

  if (!farm) return null;

  return (
    <header className="header">
      <div className="header-text">
        <i className="fa-solid fa-file"></i>
        <h1>
          Relatório de Visita Técnica -{" "}
          {farm.details.date.split("-").reverse().join("/")}
        </h1>
      </div>
      <div id="img-header" className="header-img">
        <img src={logoFb} alt="" />
      </div>
    </header>
  );
};

export default Header;
