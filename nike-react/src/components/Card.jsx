import Button from "./Button";

function Card({ name, age, hobbie }) {
  return (
    <div className="card">
      <span>{name}</span>
      <span>{age}</span>
      <span>{hobbie}</span>
      <Button text={"Save"} />
    </div>
  );
}

export default Card;
