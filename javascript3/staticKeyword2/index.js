//static = keyword that defines properties or methods that belong
//         to a class itself rather than the objects created
//         from that class (class owns anything static, not the objects)

class User{

    static userCount=0;

    constructor(username){
        this.username=username;
        User.userCount++;
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}

const user1=new User("Spongebob");
const user2=new User("Patrick");
const user3=new User("Sandy");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);
user1.sayHello();
user2.sayHello();
user3.sayHello();