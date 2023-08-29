// Take the student class and write a function called setPlacementAge which 
// basically takes the minimum board marks required by a candidate to sit for the 
// company coming for placement and it returns a function.
// The function takes minAge as an argument and returns true if the given student
//  has board marks greater than minimum board marks required by company and is
//   above the required age set by the company.[If stuck check the hint 1]
// Run the code across all the students and print the names of egligible students.



class Student{
    constructor(name,age,marks){
      this.name=name;
      this.age=age;
      this.marks=marks;
    }
    setPlacementAge(minPlacementAge) {
       //return a function which takes in argument -> minMarks
       //returns true if students marks are gretaer than minMarks and age gretaer than minPlacementAge
       //Complete this function only. Do not alter any other thing.
       return (minMarks) => {
      return this.marks >= minMarks && this.age >= minPlacementAge;
    };
  
    }
  }
  
  
  
  //Do not touching anything below this line
  
  function createNewStudents(name, age, marks){
    const Riya=new Student(name, age, marks);
    
    console.log(Riya.setPlacementAge(18)(40))
  
  }
  
  async function readInput() {
  
      let inputString = '';
  
      var output=[];
  
      process.stdin.on('data', inputStdin => {
  
        inputString += inputStdin;
  
        const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
  
        const argumentsArr = inputArr[0].split(',');
  
        createNewStudents(argumentsArr[0], Number(argumentsArr[1]), Number(argumentsArr[2]))
  
        process.exit();
  
      })
  
  }
  
  readInput();