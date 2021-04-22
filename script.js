let array = [1,2,3,4,5,6,1,4,9,10,10]
let dupArray = [];

for (let i = 0; i < array.length; i++) {

    for (let j = i+1; j < array.length; j++) {
      if(array[i]==array[j]){
          dupArray.push(array[j])
      }
    }
    
}
array = [...new Set(array)];
console.log(array);
for(let i=0; i<dupArray.length; i++){
     var index = array.indexOf(dupArray[i]);
     array.splice(index,1)
}
console.log(array);