// Task 2: Simple Programs todo for Operators
// 1.Square of a number
// var num=prompt(); for getting user input
var num = 5;
var sqr = num * num;
console.log(sqr);

// 2.Swapping 2 numbers
var num1 = 5;
var num2 = 8;
var num3;
num3 = num1;
num1 = num2;
num2 = num3;
console.log(num1);
console.log(num2);

// 3.Addition of 3 numbers
var number1 = 2;
var number2 = 4;
var number3 = 6;
var sum = number1 + number2 + number3;
console.log(sum);

// 4.Celsius to Fahrenheit conversion
var C = 35;
var F = C * (9 / 5) + 32;
console.log(F + "°F");

// 5.Meter to miles
var meter = 10000;
var miles = meter / 1609.344;
console.log(miles);

// 6.Pounds to kg
var pound = 15;
var kilogram = pound * 0.45359237;
console.log(kilogram + "kg");

// 7.Calculate Batting Average
var Totalruns = 5000;
var Dismissaltimes = 100;
var Battingaverage = Totalruns / Dismissaltimes;
console.log(Battingaverage);

// 8.Calculate five test scores and print their average
var test1 = 80;
var test2 = 85;
var test3 = 78;
var test4 = 83;
var test5 = 92;
var sumoftest = test1 + test2 + test3 + test4 + test5;
var testaverage = sumoftest / 5;
console.log(testaverage);

// 9.Power of any number x ^ y
var x = 6;
var y = 2;
var power = Math.pow(x, y);
console.log(power);

// 10.Calculate Simple Interest
var Principal = 100000;
var RateofInterest = 4;
var Time = 2;
var SimpleInterest = (Principal * RateofInterest * Time) / 100;
console.log(SimpleInterest);

// 11.Calculate area of an equilateral triangle
var a = 4;
var Area = (Math.sqrt(3) / 4) * Math.pow(a, 2);
console.log(Area);

// 12.Area Of Isosceles Triangle
var Base = 6;
var Height = 4;
var Area = (1 / 2) * Base * Height;
console.log(Area);

// 13.Volume Of Sphere
var radius = 5;
var Volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
console.log(Volume);

// 14.Volume Of Prism
var Base = 2;
var Height = 4;
var Volume = Base * Height;
console.log(Volume);

// 15.Find area of a triangle
var Base = 8;
var Height = 5;
var Area = (1 / 2) * Base * Height;
console.log(Area);

// 16.Give the Actual cost and Sold cost, Calculate Discount Of Product
var Actualcost = 1600;
var Soldcost = 700;
var Discount = Actualcost - Soldcost;
console.log(Discount);
var Discountpercent = (Discount / Actualcost) * 100;
console.log(Discountpercent + "%");

// 17.Given their radius of a circle and find its diameter, circumference and area
var radius = 12;
var diameter = 2 * radius;
var Area = Math.PI * Math.pow(radius, 2);
var Circumference = 2 * Math.PI * radius;
console.log(diameter);
console.log(Area);
console.log(Circumference);

// 18.Given two numbers and perform all arithmetic operations.
var num1 = 18;
var num2 = 9;
var add = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;
console.log(add);
console.log(sub);
console.log(mul);
console.log(div);

// 19.Display the asterisk pattern as shown below(No loop needed)

// 20.Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
var consumption = 100;
var unitrate = 10;
var Totalunit = (consumption * 24 * 30) / 1000;
var currentbill = Totalunit * unitrate;
console.log(Totalunit);
console.log(currentbill);

// 21.Program To Calculate CGPA
// For GPA on 1 semester
// Subject1
var subject1credit = 3;
var earnedgrade1 = 8;
var gradepoint1 = subject1credit * earnedgrade1;
// Subject2
var subject2credit = 3;
var earnedgrade2 = 7;
var gradepoint2 = subject2credit * earnedgrade2;
// Subject3
var subject3credit = 4;
var earnedgrade3 = 9;
var gradepoint3 = subject3credit * earnedgrade3;
// Subject4
var subject4credit = 3;
var earnedgrade4 = 5;
var gradepoint4 = subject4credit * earnedgrade4;
// Subject5
var subject5credit = 3;
var earnedgrade5 = 10;
var gradepoint5 = subject5credit * earnedgrade5;
// Subject6
var subject6credit = 2;
var earnedgrade6 = 8;
var gradepoint6 = subject6credit * earnedgrade6;
// Subject7
var subject7credit = 1;
var earnedgrade7 = 9;
var gradepoint7 = subject7credit * earnedgrade7;
var totalCredit =
  subject1credit +
  subject2credit +
  subject3credit +
  subject4credit +
  subject5credit +
  subject6credit +
  subject7credit;
var totalgradepoint =
  gradepoint1 +
  gradepoint1 +
  gradepoint3 +
  gradepoint4 +
  gradepoint5 +
  gradepoint6 +
  gradepoint7;
var GPA1 = totalgradepoint / totalCredit;
console.log(totalCredit);
console.log(totalgradepoint);
console.log(GPA1.toFixed(2));
// for 2 semester
var GPA2 = 8.96;
console.log(GPA2.toFixed(2));
var sumofGPA = GPA1 + GPA2;
var noofsemesters = 2;
var CGPA = sumofGPA / noofsemesters;
console.log(CGPA.toFixed(2));
