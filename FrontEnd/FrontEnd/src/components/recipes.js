import React, { useEffect, useState } from "react";
import "../styles/RecipePage.css";

export const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [category, setCategory] = useState("All"); // Filter by category

  // Fetch recipes from API
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("https://localhost:44305/api/Recipes");
        const data = await response.json();
        console.log(data);
        setRecipes(data);
        setFilteredRecipes(data); // Initially display all recipes
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  // Handle category filtering
  const handleCategoryChange = (selectedCategory) => {
    setCategory(selectedCategory);

    if (selectedCategory === "All") {
      setFilteredRecipes(recipes); // Show all recipes if "All" is selected
    } else {
      const filtered = recipes.filter((recipe) => recipe.category === selectedCategory);
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div className="container container1">
      <div className="section-title">
        <h2>Recipes</h2>
        <p>Explore our collection of healthy meals and snacks.</p>
      </div>

      {/* Filter by Category */}
      <div className="filter-container">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select
          id="category-filter"
          value={category}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Healthy Sweets">Healthy Sweets</option>
          {/* Add more categories if needed */}
        </select>
      </div>

      {/* Display Recipe Cards */}
      <div className="row">
        {filteredRecipes.map((recipe) => (
          <div className="col-md-4" key={recipe.recipeId}>
            <div className="recipe-card">
              <img style={{height:260}}
                src={recipe.imageUrl}
                alt={recipe.title}
                className="img-responsive"
              />
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <p><strong>Prep Time:</strong> {recipe.prepTime} min</p>
              <p><strong>Nutrition Facts:</strong> {recipe.nutritionFacts}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
