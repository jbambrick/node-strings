var myWord = "yaqɨg" // camel case
var myVerb = "teyatastlɨg"; // I’m going to jump up and down

const vowels = [
        "a",
        "e",
        "u",
        "o",
        "i",
        "ɨ",
]; // array of Tsilhqot’in vowels

const consonants = [
    "b",
    "p",
    "m",
    "n",
    "d", // voiced (plain)
    "t", // aspirated (with air)
    "t'", // glottalized (plosive)
    "dl",
    "tl",
    "tl'",
    "j",
    "ch",
    "ch'",
    "dz",
    "ts",
    "ts'",
    "dẑ",
    "tŝ",
    "tŝ’",
    "g",
    "k",
    "k’",
    "gg",
    "q",
    "q’",
    "gw",
    "kw",
    "kw’",
    "ggw",
    "qw",
    "qw’",
    "ʔ",
    "h",
    "l",
    "lh",
    "z",
    "s",
    "ẑ",
    "ŝ",
    "w",
    "ŵ",
    "y",
    "sh",
    "gh",
    "x",
    "xw",
    "xw" //"wh",
];

let countDuplicates = 0; // number of duplicate entries
for(let i = 0; i<consonants.length;i++) { //increment
    console.log(`Consonant number ${i+1}: ${consonants[i]}`);
    for(let j = i+1;j<consonants.length;j++){
        if(consonants[j]===consonants[i]){
            countDuplicates++;
        }
    }
}
if(countDuplicates !=0){
    console.log(`Found a duplicate in consonants array!`);
} else{
    console.log(`All consonants are unique!`)
}
