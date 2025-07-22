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

##  Function Methods / Properties

- bind
- apply 
- call

```js

say.call({name: "Adel"}) // it means, your this is Adel

```

- length 
- Prototype


