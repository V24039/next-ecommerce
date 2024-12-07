export interface ILoginValues {
  email: string;
  password: string;
};

export interface ILogggedUserValues extends ILoginValues{
  name: string;
  selectedCategories: number[];
};

export interface ICategoriesValues {
  id:number;
  catogery: string;
}