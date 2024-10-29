import AddCar from "../../components/forms/AddCar";
import AddPerson from "../../components/forms/AddPerson";
import Title from "../../components/layout/Title";
import Cars from "../../components/lists/Cars";

const First = () => {
  return (
    <div className="App" style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
                
    }}>
      <div>
      <h1>PEOPLE AND THEIR CARS</h1>
      <AddPerson />
      <AddCar />
      <Title />
      <Cars />
      </div>
    </div>
  );
};

export default First;