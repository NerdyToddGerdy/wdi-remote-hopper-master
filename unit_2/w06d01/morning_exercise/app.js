var alpha = []; //http://stackoverflow.com/questions/33084862/js-how-to-shift-each-letter-in-the-given-string-n-places-down-in-the-alphabet

function genCharArray(charA, charZ) {
     alpha = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        alpha.push(String.fromCharCode(i));
    }
    return alpha;
}
genCharArray('a', 'z'); // ["a", ..., "z"]

console.log(alpha);

//http://stackoverflow.com/questions/19748954/caesar-cipher-in-javascript-cipher-broken

var currentkey = -13;  //for example
function convertKey(str) {
    var o_text = str;
    var o_letters = o_text.split("");
    var alphabet = alpha;
    var c_text="", _x = "";
    for ( var x in o_letters) {
        if (currentkey > 0) {
            _x = alphabet[(alphabet.indexOf(o_letters[x]) + currentkey) % alphabet.length];
        } else {
            _x = alphabet[(alphabet.indexOf(o_letters[x]) + (26 - currentkey)) % alphabet.length];
        }
        c_text = c_text + _x;
    }
    return c_text;
}

console.log(convertKey('zvahgrf yrsg'));
