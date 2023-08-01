let users : UserEntity[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "a1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "doctor",
    type: "renter",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Trần Văn B",
    email: "b1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "student",
    type: "renter",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    name: "Trần Đức C",
    email: "c1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "student",
    type: "renter",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    name: "Pham Cong D",
    email: "d1@gmail.com",
    phone: "0123456789",
    age: 23,
    occupation: "doctor",
    type: "owner",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export class UserService {
  static async getUsers(): Promise<UserEntity[]> {
    return users;
  }

  static async getUserById(id: string): Promise<UserEntity | undefined> {
    return users.find(user => user.id === id);
  }
}
