import style from "./style.module.scss";
import Input from "../Input/Input";

// eslint-disable-next-line react/prop-types
const Card = ({title, paragraph, image, count}) => {
    console.log();
    return(
        <div className={style.card}>
        <div>
            <img src ={image} alt="React Logo" />
        </div>
        <h4>{title}</h4>
        <p>{paragraph}</p>
        < Input value = {count} />
        </div>
    );
};

export default Card;