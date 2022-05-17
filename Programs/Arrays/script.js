// Task 3: Simple Programs todo for Condition , Looping and Arrays

// 1.Write a loop that makes seven calls to console.log to output the following triangle
for (var i = "#"; i.length < 8; i += "#") {
  console.log(i);
}

// 2.Iterate through the string array and print it contents
var strArray = [
  "<option>Jazz</option>",
  ,
  "<option>Blues</option>",
  ,
  "<option>New Age</option>",
  ,
  "<option>Classical</option>",
  ,
  "<option>Opera</option>",
];
for (var i = 0; i < strArray.length; i++) {
  console.log(strArray[i]);
}

// Arrays
// write a code to count the elements in the array . Don’t use length property
var myarray = [11, 22, 33, 44, 55];
let length = 0;
for (let i of myarray) {
  length++;
}
console.log(length);

// Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods = [
  "Biriyani",
  "Idly",
  "Dosa",
  "Chappathi",
  "Pongal",
  "Puri",
  "Coconut rise",
  "Tomato rise",
  "Lemon rise",
  "Fish fry",
  "Chicken65",
  "Parotta",
  "Meals",
  "Fried rise",
  "Noodles",
  "Curd rise",
  "Pizza",
  "Fruit salad",
  "Idiyaapam",
  "Daal rise",
];
console.log(foods[4]);

// Find the length of your foods array
console.log(foods.length);

// Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
var friends = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];
friends[0] = "Munnabai";
console.log(friends);

// Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
const friend = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

function dataHandling(input) {
  for (var i = 0; i < 3; i++) {
    console.log(input[i]);
  }
}

dataHandling(friend);

// Find the person is ur friend or not.
function datasHandling(input, name) {
  for (var i = 0; i < input.length; i++) {
    if (input[4] == name) {
      console.log("my friend");
    }
  }
}
datasHandling(friend, "Jeff");

// We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
  "Mari",
  "MaryJane",
  "CaptianAmerica",
  "Munnabai",
  "Jeff",
  "AAK chandran",
];

var friends2 = ["Gabbar", "Rajinikanth", "Mass", "Spiderman", "Jeff", "ET"];
var friends = [...friends1, ...friends2];
console.log(friends);
function dataHandling(input) {
  // 1.Get the first item, the middle item and the last item of the array

  console.log(friends.shift());

  console.log(friends.pop());

  console.log(friends.splice(5, 1));

  // 2.Add your name to the end of the friends array, and add another name to beginning.
  console.log(friends.push("Rajesh"));
  console.log(friends.unshift("Rahul"));
  console.log(friends);

  // 3.Add Mr or Ms to the names in the friends array.
  var friendsl = friends.map((word) => {
    return "Mr" + word;
  });
  console.log(friendsl);
  // 4.Concat all the names the friends array and return as comma “,” seperated string
  console.log(friends.join(","));

  // 5.Find the friends names who has letter ‘a’ and return the list.
  console.log(friends.find((e) => e === "A"));

  // 6.Find the avg length of all the friends names. Get the individual length of the names and do the avg.
  var friendsLength = friends.map((word) => {
    return word.length;
  });
  console.log(friendsLength);
  const totalsum = friendsLength.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log(totalsum);
  const totalLength = friendsLength.length;
  console.log(totalLength);
  const avgLength = totalsum / totalLength;
  console.log(avgLength.toFixed(2));

  // 8.Find the name with max characters and return the name.
  var maximum = Math.max.apply(
    Math,
    friends.map(function (str) {
      return str.length;
    })
  );
  console.log(maximum);

  // 9.Find the name with min characters and return the name.
  var minimum = Math.min.apply(
    Math,
    friends.map(function (str) {
      return str.length;
    })
  );
  console.log(minimum);
}
dataHandling(friends);

// Find the average in the array below.Make sure you add only the numbers and do avg.
const friendsInfo = [
  6,
  12,
  "Mari",
  1,
  true,
  "Munnabai",
  "200",
  "CaptianAmerica",
  8,
  10,
];
const findNum = friendsInfo.filter((element) => typeof element === "number");
console.log(findNum);
const sumofNum = findNum.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0
);
const avgofNum = sumofNum / findNum.length;
console.log(sumofNum);
console.log(avgofNum);

// Print the contents of the input variable
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(input) {
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}
dataHandling(input);
