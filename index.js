const app = "I don't do much."
const kittens = ["Milo", "Otis", " Garfield"]

function appendKitten (name){
  return [...kittens, name];
}

function destructivelyAppendKitten (name){
   return kittens.push(name);
}
 function prependKitten(name){
   return [name, ...kittens];
 }
 function destructivelyPrependKitten(name) {
    return kittens.unshift(name);
  }


 function removeLastKitten(){
   return kittens.slice(0, kittens.length-1);
 }

 function destructivelyRemoveLastKitten(){
   kittens.pop();
   return kittens;
 }

 function removeFirstKitten(){
    newkittens= kittens.slice(1);
    return newkittens
 }
function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}
