const users = ["alice", "bob", "charlie"];

interface User {
  id: number;
  name: string;
}

// const toUserObjects = (users: string[]): User[] => {
//   let userObjects: User[] = [];

//   users.forEach((user, index) => {
//     index += 1;
//     userObjects.push({ id: index, name: user });
//   });

//   return userObjects;
// };

const toUserObjects = (users: string[]): User[] => {
  return users.map((user, index) => {
    return { id: index + 1, name: user };
  });
};

console.log(toUserObjects(users));
