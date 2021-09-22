import { useParams } from "react-router-dom";
import Card from "./Card";

export default function PersonRoute({ data }) {
  const { name } = useParams();

  const personInfo = data.find(
    (person) => person.name.toLowerCase() === name.toLowerCase()
  );

  return personInfo ? (
    <Card name={personInfo.name} house={personInfo.house} />
  ) : (
    <div>PERSON NOT FOUND: {name}</div>
  );
}
