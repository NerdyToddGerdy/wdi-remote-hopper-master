var array = [
  {name:"john",job:""},
  {name:"tom",job:""}
]

var counter = 0;
array.forEach(function(element){
  if(element.name === "tom"){
    counter += 1;
  }
})
console.log('============');

array.forEach(function(element){
  console.log(element.name);
})

console.log(counter);
  var whoToObjectNumber = function(){
    var filteredArray = array.filter(function (element){
      return element.name === "tom"
    })
    console.log(filteredArray[0]);
    console.log(array.indexOf(filteredArray[0]));
    array[array.indexOf(filteredArray[0])].job = "attack";
    console.log(array[1]);
  }

whoToObjectNumber()


console.log(Math.round(Math.random()*(2-0)+0));
