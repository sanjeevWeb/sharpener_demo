const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

console.log(array.map(eachEle => {
    if(eachEle == ' '){
        eachEle = 'empty string';
    }
    return eachEle;
}))

// 2nd method
const transformedArray = array.map(eachEle => {
    if(eachEle === ' '){
        return 'empty string';
    }
    else{
        return eachEle;
    }
})

console.log(transformedArray);

// 3rd method, trim will If an element is an empty string 
//(after trimming leading and trailing spaces), it replaces it with the string 'empty string'.
const inputArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];

const transArray = inputArray.map(item => {
  if (item.trim() === '') {
    return 'empty string';
  } else {
    return item;
  }
});

console.log(transArray);

// spread operator-> if i have to copy tje elements of an array or object to some other array or object,
// spread operator gives a simple approach that is, add three dots before the array or objects name and put 
// it inside [] or {} braces

// rest operator -> rest parameter allows a function to accept an indefinite amount of parameters as an array
// But with some aonditions as-> A function definition can only have one rest parameter, 
// and the rest parameter must be the last parameter in the function definition
// example->

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
  }
  
  myFun("one", "two", "three", "four", "five", "six");


//   const obj1 = {'key1': 1}

//   const obj2 = { ...obj1}
  
//   if(obj2 === obj1){
  
//   console.log('same objects')
  
//   }
  
//   else{
  
//   console.log('different objects')
  
//   }

  const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}



console.log(obj1)

console.log(obj2)