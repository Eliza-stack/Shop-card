import style from "./style.module.scss";

// eslint-disable-next-line react/prop-types
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
