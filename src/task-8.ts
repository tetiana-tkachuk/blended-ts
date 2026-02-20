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

console.log(getPermissions(Role.Guest));
console.log(getPermissions(Role.Admin));
console.log(getPermissions(Role.User));
