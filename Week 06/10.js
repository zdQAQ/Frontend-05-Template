class Creature {
    constructor(name){
        this.name = name
        this.status = 'ok'
    }
}

class Dog extends Creature{
    bite(who){
        console.log(`${this.name} bite ${who.name}!`)
        who.is('hurt')
    }
}

class Human extends Creature{
    is(status){
        this.status = status
        console.log(`${this.name} is ${status}!`)
    }
}

const dog = new Dog('peter')
const me = new Human('zd')

dog.bite(me)