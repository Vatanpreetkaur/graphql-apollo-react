
import { DeleteOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { GET_PEOPLE, REMOVE_PERSON } from "../graphql/queries";

const RemovePerson = ({ id, firstName, lastName }) => {
  // Define the mutation to remove a person from the list
  const [removePerson] = useMutation(REMOVE_PERSON, {
    update(cache, { data: { removePerson } }) {
      // Read the current list of people from the cache
      const existingPeople = cache.readQuery({ query: GET_PEOPLE }).people;

      // Filter out the person who was removed by matching their ID
      const updatedPeople = existingPeople.filter((person) => person.id !== removePerson.id);

      // Update the cache with the new list of people
      cache.writeQuery({
        query: GET_PEOPLE,
        data: { people: updatedPeople },
      });
    },
  });

  // Function to handle the delete button click
  const handleButtonClick = () => {
    // Show a confirmation dialog to the user
    const confirmDelete = window.confirm(
      `Do you want to delete this person: ${firstName} ${lastName}?`
    );

    // If user confirms, call the removePerson mutation with the person ID
    if (confirmDelete) {
      removePerson({ variables: { id } });
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

export default RemovePerson;
