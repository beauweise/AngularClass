// function printPerson(name:string, age:number){
//     console.log(`Name: ${name} age:${age}`);   
// } 
// printPerson("Billy",8)

// function isMinimumAge(age:number):boolean{
//     return age >=21
// }
// console.log("is minimum age:",isMinimumAge(22));
class Product {
    constructor(public id: number,
        public title:string,
        public price: number){
}

  
    printDetails() {
        console.log(`Title:${this.title}`)
        console.log(`ID: ${this.id}`)
        console.log(`Price: ${this.price}`);  
    }
}
let p = new Product(100,"Baseball Gloves", 39.95)
p.printDetails()

let database= new Map<number, Product>()
let p1 = new Product(100, "Baseball Gloves", 39.95)
let p2 = new Product(350, "Golf Club", 129.95)

database.set(p1.id,p1)
database.set(p2.id,p2)

database.forEach((p, key)=> {
    console.log("Key is:", key);
    p.printDetails()
    
})

function getOrDefault<K,V>(
    key: K,
    map: Map<K, V>, 
    defaultValue:V) : V {
        let data: V = map.get(key)

        if (data === undefined){
            return defaultValue
        } else {
            return data
        
    }
}
let p3 = getOrDefault(11, database, new Product(0,"Unknown", 0.0))
p3.printDetails()
