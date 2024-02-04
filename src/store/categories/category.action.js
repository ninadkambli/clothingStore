import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategories = (catogoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CAREGORIES, catogoriesArray);
