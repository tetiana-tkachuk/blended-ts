enum Role {
  Admin,
  User,
  Guest,
}

const getPermissions = (role: Role): string[] => {
  if (role === 0) {
    return ["create", "read", "update", "delete"];
  } else if (role === 1) {
    return ["read", "update"];
  }
  return ["read"];
};

// function getPermissions(role: Role) {
//   switch (role) {
//     case Role.Admin:
//       return ["create", "read", "update", "delete"];
//     case Role.Guest:
//       return ["read", "update"];
//     case Role.User:
//       return ["read"];

//     default:
//       return [];
//   }
// }

console.log(getPermissions(Role.Guest));
console.log(getPermissions(Role.Admin));
console.log(getPermissions(Role.User));
