import { createSign, createVerify } from "crypto";
import { publicKey, privateKey } from "../src/keypair.js";

const message = "This data must be signed";

/// SIGN

const signer = createSign("rsa-sha256");

signer.update(message);

const signature = signer.sign(privateKey, "hex");

/// VERIFY

const verifier = createVerify("rsa-sha256");

verifier.update(message);

const isVerified = verifier.verify(publicKey, signature, "hex");

console.log(isVerified);
