// Task 1: Code a Person class
class Person{
    constructor(name="Tom", age=20, energy=100) {
        this.name=name;
        this.age=age;
        this.energy=energy;
        

    }
    sleep(){
        energy += 10;
        
    }
    doSomethingFun() {
        energy -= 10;
        
    }
    
   
    
}
    

// Task 2: Code a Worker class
class Worker extends Person{
    constructor(name=Tom, age=20, energy=100,xp=0,hourlyWage=110) {
        super(name, age, energy);
        this.xp=xp;
        this.hourlyWage=hourlyWage;
       
    }
    goToWork() {
        this.xp += 10;
    }
    
    
}

//Task 3: Code an intern object, run methods
function intern() {
    var intern = new Worker('Bob', 21, 110, 0, 10);
    intern.goToWork();
    return intern;

}
intern();

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker('Alice', 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;

    
}


