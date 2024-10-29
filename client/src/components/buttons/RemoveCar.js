
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { GET_CARS, REMOVE_CAR } from "../graphql/queries";

const RemoveCar = ({ id, carMake, carModel }) => {
  // Use mutation to remove a car from the list
  const [removeCar] = useMutation(REMOVE_CAR, {
    update(cache, { data: { removeCar } }) {
      // Get the current list of cars from the cache
      const existingCars = cache.readQuery({ query: GET_CARS }).cars;

      // Filter out the removed car by ID
      const newCars = existingCars.filter((car) => car.id !== removeCar.id);

      // Update the cache with the new list of cars
      cache.writeQuery({
        query: GET_CARS,
        data: { cars: newCars },
      });
    },
  });

  // Handle the button click to remove a car
  const handleButtonClick = () => {
    // Show a confirmation dialog to the user
    const confirmDelete = window.confirm(
      `Do you want to delete this ${carMake} ${carModel}?`
    );

    // If the user confirms, call the removeCar mutation with the car ID
    if (confirmDelete) {
      removeCar({ variables: { id } });
    }
  };

  return (
    <DeleteOutlined
      key="delete"
      style={{ color: "red" }}
      onClick={handleButtonClick}
    />
  );
};

export default RemoveCar;

