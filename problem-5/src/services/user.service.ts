import User from "../models/user.model";

type Query = {
  sortField?: string;
  sortValue?: string;
};

export async function getUsers(query: Query) {
  let sort = {};
  if (query.sortField && query.sortValue) {
    sort[query.sortField] = query.sortValue;
  } else {
    sort["age"] = "asc";
  }
  return await User.find().sort(sort);
}

export async function getDetailUser(id: string) {
  const user = await User.findOne({ _id: id });
  console.log(user);
  if (!user) {
    throw new Error("User not found");
  }
  return user;
}

export async function createUser(dto: {
  fullName: string;
  address: string;
  email: string;
  age: number;
}) {
  const existsEmail = await User.findOne({
    email: dto.email
  });
  if (existsEmail) {
    throw new Error("Email already exists");
  }
  const newUser = await User.create(dto);
  newUser.save();
  return await User.findOne({
    _id: newUser.id
  });
}

export async function updateUser(
  id: string,
  dto: {
    fullName?: string;
    address?: string;
    email?: string;
    age?: number;
  }
) {
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new Error("User not found");
  }
  await User.updateOne(dto);
  return await User.findOne({ _id: id });
}

export async function deleteUser(id: string) {
  const user = await User.findOne({ _id: id });
  if (!user) {
    throw new Error("User not found");
  }
  const test = await User.deleteOne({ _id: id });
  console.log(test);
  return user;
}
