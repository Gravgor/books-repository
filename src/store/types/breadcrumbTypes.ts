export interface BreadcrumbItem {
    label: string;
    url: string;
  }


  export interface BreadcrumbState {
    breadcrumbs: BreadcrumbItem[];
  }

export const SET_BREADCRUMB = 'SET_BREADCRUMB';

interface SetBreadcrumbAction {
    type: typeof SET_BREADCRUMB;
    payload: BreadcrumbItem[];
}

export type BreadcrumbAction = SetBreadcrumbAction;