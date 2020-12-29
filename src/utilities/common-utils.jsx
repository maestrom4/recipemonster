import { compact } from 'lodash';

function getRndInteger(minimum, maximum) {
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}

export function gradientProvider(colors) {
  return colors[getRndInteger(0, 4)];
}

export default getRndInteger;

export function mergeWithSameKey(ingredients, specialRecipe) {
  return ingredients.map((item) => {
    let ingredient = specialRecipe.find((recipeItem) => recipeItem.ingredientId === item.uuid);
    ingredient = ingredient === undefined ? compact(ingredient) : ingredient;
    return { ...item, ingredient };
  });
}
