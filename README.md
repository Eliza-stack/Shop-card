# Карточки товаров для интернет-магазина
## Описание

Этот проект представляет собой веб-приложение, созданное с помощью React, которое отображает карточки товаров с изображением, названием, описанием, ценой и кнопкой "Добавить в корзину". Данные о товарах хранятся в массиве и динамически рендерятся с использованием метода map().

### Карточки включают:

 - Изображение товара
 
 - Название
 
 - Описание
 
 - Цену
 
 - Кнопку "Добавить в корзину".


**СODE**

```
import style from "./style.module.scss";

const Card = ({title, paragraph, image, price}) => {
    return (
        <div className={style.container}>
            <div className={style.card}>
                <img src={image} alt={title} />

                <div className={style.content}>
                    <h4>{title}</h4>
                    <p>{paragraph}</p>
                    <div className={style.priceContainer}>
                        <div className={style.price}>
                            <span> {price} сом </span> 
                        </div>
                        <button className={style.addToCartBtn}>Add to Cart</button>
                    </div> 
                </div>
            </div>        
        </div>
    );
};

export default Card;
```

**VIEW**

<img src="https://github.com/user-attachments/assets/bf00dcbd-5a99-4847-adb5-ebc7b030e441" width="400" />

### Map()
Данные о товарах хранятся в массиве и рендерятся с использованием метода map().
```
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
```


## Используемые технологии

- React 

- SCSS (CSS Modules)

- JavaScript (ES6)


