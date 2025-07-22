## ERROR HANDLING

```js
const error = new Error("Oh Noo!");

console.log(error.message); // Oh Noo!
console.log(error.name); // Error
console.log(error.stack); // where it rise

throw error; // App Stops .
console.log("Salam");

// customizing Error
class myError extends Error {
  constructor() {
    super("this is a custom error");
    this.name = "CustomError";
  }
}

if (20 < 22) throw new myError();

const personWOCourse = {
  firstName: "Amir",
  courses: [],
};

const personBad = {
    firstName: "Amir",
}

function getPersonAvg(per) {
    try{
        const person = JSON.parse(per)
        cosnt avg = person.courses.reduce((prev,curr,_,arr)=>  (prev + curr.score ) / arr.length ,0 )
        return avg
    } catch( err)  {
        if( err instanceof myError) return 0
        throw err;
    } finally {
        console.log(" finally runs before return / error "); // ex: canceling requests that depends on other one that canceled / 2 files are comming in response but one is corrupted and want to cancle it.
    }
}

```
