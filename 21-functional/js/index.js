let friend = {
  friendName: "Sarah",
  age: 30,
  residence: "Seattle"
}

function friendInfo({ friendName, age, car }) {
  // const { friendName, age } = input;
  return `${friendName}, is ${age} years old. They drive a ${car}`
}

// function buildFriend(friendName, age, residence) {
//   return {
//     friendName,
//     age,
//     residence
//   };
// } 




function addCar(friend) {
  friend.car = "Honda";
  // return {...friend, car: "Honda"};
  return friend;
}

function increaseAge(friend) {
  // console.log(friend.age + 1);
  return {...friend, age: friend.age+1};
}

//functional alternative to OO

// destructure
// key/value assignment
// spread

// const myNameIs = () => {
//   return "My name is Ted"
// }

// const myNameIs = () => "My name is Ted";

const myNameIs = ({friendName}) => `My name is ${friendName}`;

const buildFriend = (friendName, age, residence) => ({friendName, age, residence})

const hireMyFriend = function() {
  // console.log(this);
  return (job) => {
    // console.log(this)
    return `My friend, ${this.friendName}, was hired to be a ${job}`;
  }
}

const hireSarah = hireMyFriend.bind(friend)
const hireJake = hireMyFriend.bind(buildFriend("Jake", 21, "Portland"));

const payDay = function(employee) {
  return (paycheck) => {
    employee.accountBalance= parseInt(employee.accountBalance)+paycheck;
    return employee
  }
}

let hal = { name: "Hal", accountBalance: 0 };
let clarion = {name: "Clarion", accountBalance: 0}

const payHal = payDay(hal);
const payClarion = payDay(clarion);
const payHal100 = () => payHal(100);
const payHal1 = () => payHal(1);
const payHal10 = () => payHal(10);
const payHal35 = () => payHal(35);
const payClarion100 = () => payClarion(100)







// arrow uses
// closure



console.log(friendInfo(addCar(buildFriend("Jake", 25, "Portland"))));
// bind vs arrow
// dynamic object keys