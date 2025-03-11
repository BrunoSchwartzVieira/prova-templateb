import coffe from "../../../public/images/coffees/americano.png";
import { ShoppingCart } from "lucide-react";
import "../card/style.css";

export function Card() {
  return (
    <div>
      <img src={coffe} />
      <h1>Expresso Tradicional</h1>
      <p>O tradicional café feito com água quente e grãos moídos</p>
    </div>
  );
}
