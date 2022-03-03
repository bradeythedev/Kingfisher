const moo = require('moo')
const fs = require("mz/fs")

let lexer = moo.compile({
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /0|[1-9][0-9]*/,
    string:  /"(?:\\["\\]|[^\n"\\])*"/,
    lparen:  '(',
    rparen:  ')',
    lcurl:   '{',
    rcurl:   '}',
    keyword: ['while', 'if', 'else', 'moo', 'cows'],
    varid:   /[-]?[a-zA-Z_0-9]+/,
    funid:   /[.][a-zA-Z_0-9]+/,
    varnew:  /['--']+[a-zA-Z_0-9]+/,
    funnew:  /['..']+[a-zA-Z_0-9]+/,
    assign:  ':',
    greq:    /[=][>]/,
    lseq:    /[=][<]/,
    noteq:   /[!][=]/, 
    eq:      /[=]+/,
    not:     /[!]/,
    and:     /[&&]/,
    or:      /[||]/,
    gr:      /[>]/,
    ls:      /[<]/,
    async:   /[&]/,
    rand:    /[|]/,
    add:     /[+]/,
    minus:   /[-]/,
    times:   /[*]/,
    divide:  /[/]/,
    NL:      { match: /\n/, lineBreaks: true },
})

async function main() {
    const code = (await fs.readFile("example1.kf")).toString()
    lexer.reset(code)

    while (true) {
        const token = lexer.next();
        if (!token) {
            break;
        }
        console.log(token)
    }
}

main()