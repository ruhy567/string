//slice -  sentence er kichu word baad dewa
const makeup ="HUDABEAUTY ";
//const part = makeup.slice(4,10);
console.log(makeup.slice(4,10));

// split-sentexce theke array te convert
const sentence ="jahid is a good and hardworking man";
console.log(sentence.split(' '));
const modiarray = sentence.split(' ');
for(let i=0; i<modiarray.length; i++ ){
    console.log(modiarray[i].toUpperCase());
}
/*const frnds = 'jakir,jahid,karim,rahim';
console.log(frnds.split(','));

const realFrnd = [ 'montu', 'jhontu', 'lulu','niklu'];
console.log(realFrnd.join());
console.log(realFrnd.join('-'));
console.log(realFrnd.join('|'));
*/
