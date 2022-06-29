
class people {
    constructor(){
        this.peopleList = []
    }

    addPelople(person){
        this.peopleList.push(person)
    }

    getAll(){
        return this.peopleList
    }
}

class customers extends people {
    constructor(){
        super()
        
    }
}

const _people = new people()

_people.addPelople({nome: 'Fernando'})

console.log('List ', _people.getAll())

const _customers = new customers()

_customers.addPelople({nome: 'Kauan'})
_customers.addPelople({nome: 'Livia Maria'})

console.log('Customers ', _customers.getAll())
