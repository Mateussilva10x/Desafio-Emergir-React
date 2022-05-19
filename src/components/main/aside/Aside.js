import { useContext } from "react";
import { DataContext } from "../../../context/Data";

import "./aside.css";

const Aside = () => {
  const { farm, rain } = useContext(DataContext);

  if (!farm) return null;
  if (!rain) return null;

  return (
    <aside className="main-aside">
      <div id="first-content" className="main-aside-content">
        <span>Fazenda</span>
        <h3>{farm.farm.name}</h3>
        <p className="text-information">{rain.plots} talhões</p>
      </div>
      <div className="main-aside-content row">
        <div className="main-aside-content-midle">
          <div className="main-aside-content-midle-text">
            <span>Data da visita</span>
            <h3>{farm.details.date.split("-").reverse().join("/")}</h3>
          </div>
          <div className="main-aside-content-midle-text">
            <span>Safra</span>
            <h3>{farm.harvest.name}</h3>
          </div>
        </div>
        <div className="row-mobile">
          <div className="main-aside-content-midle">
            <div className="main-aside-content-midle-text">
              <span>Realizada por</span>
              <h3>{farm.owner.name}</h3>
            </div>
            <div className="border-radius">
              <h3>{farm.owner.initials}</h3>
            </div>
          </div>
          <div className="main-aside-content-icon">
            <span>Pluviometria</span>
            <div className="icon-container">
              <h2>
                <i className="fa fa-droplet water-icon"></i>{" "}
                {Number.isInteger(rain.rain_until_date) === true
                  ? rain.rain_until_date + ",00"
                  : rain.rain_until_date}{" "}
                mm
              </h2>
            </div>
            <p className="text-information p4">Acumulado na safra</p>
          </div>
        </div>
      </div>

      <div className="main-aside-content">
        <span>Observações</span>
        <p>{farm.details.observation}</p>
      </div>
      <div className="main-aside-content">
        <button onClick={() => window.print()} className="btn">
          <i className="fa-solid fa-print"></i>imprimir
        </button>
      </div>
    </aside>
  );
};

export default Aside;
