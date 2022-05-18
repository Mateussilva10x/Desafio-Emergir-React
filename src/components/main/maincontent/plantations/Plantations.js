import { useContext } from "react";
import { DataContext } from "../../../../context/Data";
import PlantationsRow from "./PlantationsRow";

import "./plantations.css";

const Plantations = () => {
  const { plantations } = useContext(DataContext);

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
