import React from 'react';

const FandomRecipe = ({ recipe }) => {
    return (
        <div>
            <h2>{recipe.fandom}</h2>
            <h3>{recipe.name}</h3>
            <img src={require(`../images/${recipe.image}`).default} alt={recipe.name} />
            <p>{recipe.instructions}</p>
        </div>
    );
};