#!/usr/bin/node

// Files
const grammar = require("./kingfisherparser.js");

// Dependencies
const nearley = require("nearley");
const fs = require("mz/fs");

// Misc
const kfversion = "0.1.0";

// Main function
async function main() {

    const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

    parser.feed("foo\n");
    console.log(parser.results);

}