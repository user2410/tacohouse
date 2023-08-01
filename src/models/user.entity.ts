type UserEntity = {
  id: string;
  name: string;
  email: string;
  phone: string;
  age: number;
  occupation: string;
  type: "renter" | "owner";
  createdAt: Date;
  updatedAt: Date;
}