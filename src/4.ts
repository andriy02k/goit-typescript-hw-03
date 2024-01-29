class Key {
    private signature: number = Math.random()

    getSignature(): number {
        return this.signature
    }
}

class Person {
    constructor(private key: Key) { }
    
    getKey(): Key {
        return this.key
    }
}

abstract class House {
    protected door: boolean = false
    protected tenants: Person[] = []
    
    constructor(protected key: Key) { }

    comeIn(tenant: Person): void {
        if (this.door) {
            this.tenants.push(tenant)
        }
    }

    openDoor(key: Key): void { }
}

class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true
        }
    }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

const result = house.openDoor(person.getKey());
const result1 = house.comeIn(person);

export {};