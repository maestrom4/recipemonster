import http from './httpService';
import { apiUri } from '../config.json';

const endPointName = 'recipes/';
const apiEndPointRecipe = `${apiUri}${endPointName}`;

export default function getRecipes() {
  const result = http.get(apiEndPointRecipe);
  return result;
}

export function getRecipe(id) {
  const result = http.get(apiEndPointRecipe + id);
  return result;
}
