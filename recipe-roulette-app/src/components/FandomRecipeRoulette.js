import React from 'react';
import FandomRecipe from './FandomRecipe';
import fandomRecipes from '../data/fandomRecipes';

const FandomRecipeRoulette = () => {
    const randomFandomRecipe = fandomRecipes[Math.floor(Math.random() * fandomRecipes.length)];

    return (
        <div>
            <FandomRecipe recipe={randomFandomRecipe} />
        </div>
    );
};

export default FandomRecipeRoulette;