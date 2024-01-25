import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (CategoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CAREGORIES_MAP, CategoriesMap);
