export interface userEntityInterface extends commonFieldsInterface {
  FullName: string;
  age: string;
  email: string;
  password?: string;
  posts?: postEntityInterface[];
}
export interface postEntityInterface extends commonFieldsInterface {
  title: string;
  content: string;
  likes: number;
  user?: userEntityInterface;
}

export interface commonFieldsInterface {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
