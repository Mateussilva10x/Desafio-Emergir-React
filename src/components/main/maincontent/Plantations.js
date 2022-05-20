import { useContext } from "react";
import { PlantationsContext } from "../../../context/PlantationsContext";

import PlantationsRow from "./PlantationsRow";

import "../../../styles/plantations.scss";

const Plantations = () => {
  const { plantations } = useContext(PlantationsContext);

  if (!plantations) return null;

  return (
    <>
      {plantations.results.map((plantations, index) => (
        <PlantationsRow
          isFirst={index === 0}
          key={plantations.id}
          plantations={plantations}
        />
      ))}
    </>
  );
};

export default Plantations;
