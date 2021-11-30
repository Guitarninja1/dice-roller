import Die from "./Die";
import D20 from "../img/d20.png";
import D6 from "../img/d6.png";
import D12 from "../img/d12.svg";
import D10 from "../img/d10.svg";
import D10P from "../img/d10.svg";
import D8 from "../img/d8.png";
import D4 from "../img/d4.svg";

export default function Dice() {
  return (
    <>
      <Die name="D20" image={D20} min={1} max={20} />
      <Die name="D12" image={D12} min={1} max={12} />
      <Die name="D10" image={D10} min={1} max={10} />
      <Die name="D10P" image={D10P} min={0} max={10} />
      <Die name="D8" image={D8} min={1} max={8} />
      <Die name="D6" image={D6} min={1} max={6} />
      <Die name="D4" image={D4} min={1} max={4} />
    </>
  );
}
