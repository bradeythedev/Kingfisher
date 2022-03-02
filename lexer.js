const moo = require('moo')

let lexer = moo.compile({
    WS:      /[ \t]+/,
    comment: /\/\/.*?$/,
    number:  /0|[1-9][0-9]*/,
    string:  /"(?:\\["\\]|[^\n"\\])*"/,
    lparen:  '(',
    rparen:  ')',
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
    gr:      /[>]/,
    ls:      /[<]/,
    NL:      { match: /\n/, lineBreaks: true },
})

lexer.reset(`moo 69("poogers") -poognum .coolfun --newthing: 69 poog ..newfunky < > = == ! != =< =>`)

while (true) {
    const token = lexer.next();
    if (!token) {
        break;
    }
    console.log(token)
}