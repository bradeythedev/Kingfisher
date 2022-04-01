#!/usr/bin/node

// Files
const lexer = require("./lexer.js");
const parse = require("./parse.js");

// Dependencies
const fs = require("mz/fs");

// Misc
const kfversion = "0.1.0";

// Print Kingfisher version number
console.log("Kingfisher Version", kfversion);

parse.main();