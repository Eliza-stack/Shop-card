import Card from "./components/Card/Card";
import style from "./style.module.scss";
import desk from "../src/assets/img/desk.jpg"; 
import lamp from "../src/assets/img/lamp.jpg";
import sofa from "../src/assets/img/sofa.jpg"; 
import offiseDesk from "../src/assets/img/office desk.jpg";

const Cards = [
  {
    title: "Настольная лампа",
    paragraph: "Элегантная настольная лампа для работы и отдыха с регулируемой яркостью.",
    image: lamp,
    price: 2000
  },
  {
    title: "Современный рабочий стол",
    paragraph: "Функциональный стол с уникальным дизайном для вашего рабочего пространства.",
    image: desk,
    price: 12000
  },
  {
    title: "Диван",
    paragraph: "Мягкий и стильный диван, который идеально дополнит ваш интерьер.",
    image: sofa,
    price: 2500
  },
  {
    title: "Кресло для рабочего места",
    paragraph: "Удобное кресло с поддержкой для спины для долгих рабочих часов.",
    image: offiseDesk,
    price: 32888
  }
];

function App() {
  return (
    <div className={style.container}>
      {Cards.map((card, index) => (
        <Card 
          key={index} 
          title={card.title} 
          paragraph={card.paragraph} 
          image={card.image} 
          price={card.price} 
        />
      ))}
    </div>
  );
}

export default App;
