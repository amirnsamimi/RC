## this

```js

const person = { 
    name: "Amir" //dynamic scope 
    say: function (str) {
        console.log(this.name + "said" + str ) // Amir
    }
}

person.say("I'm Amir")
const say = person.say
window.name = "Ali" // Global Scope
say("I'm Ali") // Ali


const person2 = { 
    name: "Mammad" //dynamic scope 
    say: person.say
    }
}

person2.say("I'm Mammad") // Mammad

```

## Function Methods / Properties

- bind
- apply 
- call

```js

say.call({name: "Adel"}, "I'm Adel") // it means, your this is Adel
const sayKiarash = say.bind({name: "Kiarash"}) // ta hamishe this.name kiarashe, yedoone tabe jadid misaze, tooye bind mamoolan as this esh estefade mikonim
sayKiarash("I'm from Global") // kiarash say I'm from global 
person2.say2 = sayKiarash // inja ham baz kiarash mishe this 

say.apply({name:"naser"},["hello"]) // naser say hello  baraye input array khoobe

```

## Clouser

```js

function myClouser(x) {
    const name = x + "XYZ"
    return function(z){
        console.log(this.name + "z")
    }
}



```


- this inside arrow function points to lexical env - arrow use the topest defined this
- this inside expression function points to global env - use this from who called it
- use strict