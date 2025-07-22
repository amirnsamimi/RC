## JSON

```js

class Course {
    constructor(lesson,score){
        this.lesson = lesson
        this.course = course
    }

    toJSON(){
        return { course: this.lesson, score:this.score}  // how new Date() works
    }
}

const person = {
    firstName: "Amir",
    lastName: "Samimi",
    age:10,
    foods:["pizza","sandwich"]
    isMale: true,
    birthday: new Date('1995-04-08')
}

//ARRAYS, STRING, BOOLEAN, NULL, NUMBER, OBJECTS


console.log(JSON.stringify(person, ['firstName'], 2 )) // second arg is replacer , second argument is space ( indentation )

const personString = JSON.stringify(person)
const personRaw = JSON.parse(personString,
// (key,value)=> {
//     if(key === "birthday"){
//         return new Date(value)
//     }
//     return value
// }
// issue is that if any key finded labeled birthday it will changed to new Date(value) so we use below
)

const person2 = {...personRaw, birthday: new Date(personRaw.birthday)}

console.log(person.birthday instanceof Date) // true

```
