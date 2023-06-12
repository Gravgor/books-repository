import { SET_BREADCRUMB, BreadcrumbItem } from "../types/breadcrumbTypes";


export const setBreadcrumbs = (breadcrumbs: BreadcrumbItem[]) => {
  return {
    type: SET_BREADCRUMB,
    payload: breadcrumbs,
  };
};
