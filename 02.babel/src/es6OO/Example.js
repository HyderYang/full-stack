class Person {
    constructor(name, age){
        this.name = name,
        this.age = age
    };

    show() {
        alert(this.name);
        alert(this.age);
    }
}

const person = new Person('tom', 19);
person.show();

// ------------------------------------
// 继承
class Worker extends Person{
    constructor(name, age, job){
        super(name, age);
        this.job = job
    }

    showJob(){
        alert(this.job);
    }
}

const labor = (new Worker('tom', 12, 'haha')).showJob();
