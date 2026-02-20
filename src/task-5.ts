interface UserParams {
  name: string;
  age: number;
  isAdmin?: boolean;
}

interface User {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age, isAdmin = false }: UserParams): User {
  return { name, age, isAdmin };
}

// function createUser({ name, age, isAdmin }: UserParams): User {
//   return !isAdmin ? { name, age, isAdmin: false } : { name, age, isAdmin };
// }

// function createUser({ name, age, isAdmin }: UserParams): User {
//   if (!isAdmin) {
//     return { name, age, isAdmin: false };
//   }
//   return { name, age, isAdmin };
// }

// function createUser({ name, age, isAdmin }: UserParams): User {
//   return {
//     name,
//     age,
//     isAdmin: isAdmin ?? false,
//   };
// }

console.log(createUser({ name: "Alice", age: 30, isAdmin: true }));
console.log(createUser({ name: "Alice", age: 30 }));
