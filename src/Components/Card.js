import styles from "../Styles/card.module.css";
const Card = (props) => {
  const recipe = props.recipe.recipe;
  // console.log();
  return (
    <div className={styles.card}>
      <div>
        <img src={recipe.image} className={styles.img} alt={recipe.label} />
      </div>
      <div>
        <a href={recipe.url} className={styles.links}>
          <h2>{recipe.label}</h2>
        </a>
        <a href={props.recipe._links.self.href}>
          <button className={styles.btn}>See More...</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
