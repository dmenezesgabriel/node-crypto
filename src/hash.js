import { createHash } from "crypto";

function hash(input) {
  return createHash("sha256").update(input).digest("hex");
}

let password = "Hello, World!";
const hashedPassword = hash(password);

password = "Hello, World!";
const confirmHashedPassword = hash(password);
const match = hashedPassword === confirmHashedPassword;

console.log(match ? "✔️ passwords match" : "✖️ passwords does not match");
