export interface CategoryBreadcrumbs {
  id: string;
  doc: number;
  url: string | null;
  label: string;
}

export interface Category {
  id: number;
  title: string;
  parent: string | null;
  breadcrumbs: CategoryBreadcrumbs[];
  updatedAt: Date;
  createdAt: Date;
}
