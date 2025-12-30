export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  image: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  company: {
    name: string;
  };
}

export interface UserListResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
