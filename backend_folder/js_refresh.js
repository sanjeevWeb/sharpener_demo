const product = (a,b) => a * b;

let num1 = 3;
let num2 = 5;

console.log(product(num1,num2));

const student = {
    name: 'Amit',
    speciality:'full stack',
    greet: function(){
        console.log('Namaste, i am '+ this.name);
    }
};

// console.log(student);
student.greet();