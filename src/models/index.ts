export interface User {
  id: number,
  name: string, 
}

export interface UserDetails {
  id: number,
  name: string, 
  avatar: string, 
  details: {
    city: string, 
    company: string, 
    position: string, 
  }
}

export interface ListProps {
  list: User[], 
  details: UserDetails, 
  setDetails: (val: UserDetails) => void, 
}

export interface IProps1 {
  massage: string, 
  setMassage: (val: string) => void, 
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export interface ButtonProps {
  handleDelete?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  handleUpdate?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

