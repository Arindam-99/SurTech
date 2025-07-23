// Singleton
// Object.create

// Object Literals
const mySym = Symbol("key1");
// console.log(mySym);

const JsUser = {
    name: "Arindam",
    "full name": "Arindam Das",
    age: 20,
    [mySym]: "mykey1",
    location: "Kolkata",
    email: "dasari@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

// JsUser.email = "arindam@frontenddev";
// Object.freeze(JsUser);
JsUser.email = "arindamdaschatgpt564@gmail.com";
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello world");
};
console.log(JsUser.greeting());

JsUser.greeting = function () {
    console.log(`hello js user ${this.age}`);
};
console.log(JsUser.greeting());
console.log(JsUser.greeting);

// -------------------------------------------------------------------------

// Singleton Object
const tinderUser = new Object();

tinderUser.id = "123ABC";
tinderUser.name = "Rio";
tinderUser.isLoggedIn = false;
console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Arindam",
            lastName: "Das"
        }
    }
};
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj6 = { 5: "a", 6: "b" };

const obj3 = { obj1, obj2 };
console.log(obj3);

const obj4 = Object.assign(obj1, obj2);
// console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2);
console.log(obj5);

const objNew = Object.assign({}, obj1, obj2, obj6);
console.log(objNew);

const objNew1 = { ...obj1, ...obj2 };
console.log(objNew1);

// If values come from database
const users = [
    {
        id: 1,
        email: "ari@265"
    },
];

// users[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// -------------------------------------------------------------------------

// Object Destructuring
const course = {
    coursename: "Js tutorial",
    courseprice: "999",
    courseInstructor: "Ari"
};

const { courseInstructor } = course;
console.log(courseInstructor);

const { courseInstructor: teacher } = course;
console.log(teacher);

// --------------------Concept of API------------------------
// Example JSON:
// {
//     "name": "arindam",
//     "coursename": "js",
//     "price": "free"
// }

// Free API for learning: https://randomuser.me/api/
// Use JSON formatter for pretty printing large JSON responses.
