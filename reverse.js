const sentence = 'jahid is a good boy';
let reverse = ''
for (const letter of sentence){
    //console.log(letter);
    reverse = letter + reverse;
}
//console.log(reverse);

//loop diyye reverse
for (i = 0; i<sentence.length;i++){
//console.log(i);
//console.log(sentence[i],i);
}

//shortcut 
const reversed = sentence.split('').reverse();
console.log (reversed);