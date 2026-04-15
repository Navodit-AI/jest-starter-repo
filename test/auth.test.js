const { registerUser } = require("../src/services/authService");

test("returns error when user is null", () => {
  expect(registerUser(null)).toEqual({
    success: false,
    message: "User data is required",
  });
});

test("returns error when user is not an object", () => {
  expect(registerUser("abc")).toEqual({
    success: false,
    message: "User data is required",
  });
});

test("returns error for valid user with name only", () => {
  expect(registerUser({ name: "Navodit" })).toEqual({
    success: false,
    message: "Invalid email",
  });
});

test("returns error for valid user with name and email but no password", () => {
  expect(registerUser({
    name: "Navodit",
    email: "navodit@example.com",
  })).toEqual({
    success: false,
    message: "Password is not strong enough",
  });
});

test("returns success for valid user with name, email, and strong password", () => {
  expect(registerUser({
    name: "Navodit",
    email: "navodit@example.com",
    password: "StrongPassword123!",
  })).toEqual({
    success: true,
    message: "User registered successfully",
  });
});