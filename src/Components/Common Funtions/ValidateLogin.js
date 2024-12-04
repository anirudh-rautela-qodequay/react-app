const validCredentials = [
  {
    username: "admin",
    password: "password123",
  },
  {
    username: "meow",
    password: "12341234",
  },
  {
    username: "nobody",
    password: "doesItBetter",
  },
];

export const checking = (data) => {
  const { username, password } = data;
  const isValid = validCredentials.some(
    (credential) =>
      credential.username === username && credential.password === password
  );
  return isValid;
};
