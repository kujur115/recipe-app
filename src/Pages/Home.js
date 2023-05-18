import React, { useState } from "react";
import Card from "../Components/Card";
import API from "../Utils";
import Styles from "../Styles/home.module.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [recipes, setRecipe] = useState([]);
  // useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch(
      `${API.ROOT_URL}?app_id=${API.APP_ID}&q=${input}&type=public&app_key=${API.APP_KEY}`
    );
    const myJson = await response.json();
    // console.log(myJson.hits);
    setRecipe(myJson.hits);
  };
  // fetchPosts();
  // }, []);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={Styles.search}
      />
      <button className={Styles.searchButton} onClick={fetchPosts}>
        Search
      </button>
      <div className={Styles.list}>
        {recipes.map((recipe, index) => (
          <Card recipe={recipe} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
