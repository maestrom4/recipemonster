import http from './httpService';
import { apiUri } from '../config.json';

const endPointName = 'specials/';
const apiEndPointRecipe = `${apiUri}${endPointName}`;

export default function getSpecials() {
  const result = http.get(apiEndPointRecipe);
  return result;
}
