const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here    

    const exprArr = expr.split('**********');    

    let words = [];
    let wordsDecode = [];

    for(let word of exprArr) {
        words.push(word.match(/.{1,10}/g).map(el => el.slice(el.indexOf('1'))));   
    }
    for(let w of words) {
        
        for(letter of w) {            
            let nletter;

            nletter = letter.replace(/10/g, '.').replace(/11/g, '-').match(/.{1,2}/g).join('');
            wordsDecode.push(nletter);            
        }
        wordsDecode.push(' ');
	} 
    
    let str = '';

    for(let el of wordsDecode) {
        (el !== ' ') ? str += MORSE_TABLE[el] : str += ' ';
    }    
    
    return str.trim();
}

module.exports = {
    decode
}