
import { Card } from "antd";
import RemoveCar from "../buttons/RemoveCar";
import UpdateCar from "../forms/UpdateCar";
import { EditOutlined } from "@ant-design/icons";
import { useState } from "react";

const CarSubItem = ({ carId, brand, modelType, productionYear, cost, ownerId }) => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const cardStyles = applyCardStyles();

  return (
    <>
      {isEditing ? (
        <UpdateCar
          carId={carId}
          brand={brand}
          modelType={modelType}
          productionYear={productionYear}
          cost={cost}
          ownerId={ownerId}
          onToggleEdit={toggleEditMode}
        />
      ) : (
        <Card
          style={cardStyles.card}
          actions={[
            <EditOutlined
              style={{ color: "blue" }}
              key="edit"
              onClick={toggleEditMode}
            />,
            <RemoveCar carId={carId} carBrand={brand} carModelType={modelType} />,
          ]}
        >
          {productionYear} {brand} {modelType} → ${parseInt(cost).toLocaleString()}
        </Card>
      )}
    </>
  );
};

const applyCardStyles = () => ({
  card: {
    width: "100%",
  },
});

export default CarSubItem;
