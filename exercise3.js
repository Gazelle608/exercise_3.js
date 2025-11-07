// TODO: Create a global variable called globalCount
let globalCount = 0;

// TODO: Create a function that demonstrates local scope
function localScopeDemo() {
    let localCount = 0;
    localCount++;
    globalCount++;
    console.log("Inside localScopeDemo:");
    console.log("Local Count:", localCount);
    console.log("Global Count:", globalCount);
}

localScopeDemo();
localScopeDemo();

// TODO: Create a function that tries to modify both variables
function modifyCounts() {
    let localCount = 0;
    localCount++;
    globalCount++;
    console.log("Inside modifyCounts:");
    console.log("Local Count:", localCount);
    console.log("Global Count:", globalCount);
}

modifyCounts();
modifyCounts();

// TODO: Create a Student constructor function
function Student(name, age) {
    this.name = name;
    this.age = age;
}

// TODO: Create several student instances
let student1 = new Student("Thina", 22);
let student2 = new Student("Onke", 18);
let student3 = new Student("Yaqoob", 19);

console.log(student1);
console.log(student2);
console.log(student3);

// TODO: Create an object literal with nested properties
let classroom = {
    teacher: "Matthew Brown",
    students: [student1, student2, student3]
};

console.log(classroom);