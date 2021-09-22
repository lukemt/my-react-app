import { useParams } from "react-router-dom";
import Card from "./Card";

export default function PersonRoute({ data }) {
  // get name from the url
  const { name } = useParams();

  // search data array for the data of the person
  const personInfo = data.find(
    (person) => person.name.toLowerCase() === name.toLowerCase()
  );

  // display a card with information about the character if the character is found
  return personInfo ? (
    <Card name={personInfo.name} house={personInfo.house} />
  ) : (
    <div>PERSON NOT FOUND: {name}</div>
  );
}
