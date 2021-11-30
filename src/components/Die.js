import { useState } from "react";

function rollDice(min, max) {
  return Math.floor(Math.random() * max + min);
}
export default function Die(props) {
  const { name, image, min, max } = props;
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(rollDice(min, max));
  function handleClick(e) {
    e.preventDefault();
    setActive(true);
    setValue("...");
    const newValue = rollDice(min, max);
    setTimeout(() => {
      setValue(newValue);
      setActive(false);
    }, 1000);
  }
  return (
    <>
      <div className="die">
        <label htmlFor={name}>{name}</label>
        <button
          className={`'${name} ${active ? "active" : "inactive"}`}
          type="submit"
          id={name}
          onClick={handleClick}
        >
          <div className={name}>
            <img src={image} alt={name} height="100vh" />
          </div>
        </button>
        <p className="output">{value}</p>
      </div>
    </>
  );
}
