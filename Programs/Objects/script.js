// Objects:
// What the output
myobject = {1:"one","11":1,"name":"arun"}
console.log(myobject[11]); 
console.log(myobject.name);

// Add a new key value pair to myobject
// key : ten
// value : ten
myobject = {1:"one","11":1,"name":"arun"}
myobject.ten="ten";
console.log(myobject);

// Write out an object literal to represent the data below.
const companyAddress={
    firstname:"Guvi",
    lastname:"Geek",
    block:6,
    place:"IIT-M RP",
    location:"Chennai"
};
console.log(companyAddress.firstname,companyAddress.lastname,companyAddress.block,companyAddress.place,companyAddress.location);

// How would you represent the following data using a combination of object literals and arrays?
const companyInfo=[{
    firstname:"Guvi",
    lastname:"Geek",
    block:6,
    place:"IIT-M RP",
    location:"Chennai"
},
{
    firstname:"Amazon",
    lastname:"Inc",
    block:31,
    place:"SP Infocity",
    location:"Chennai"
},
{
    firstname:"Google",
    lastname:"Alphabet",
    block:34,
    place:"Amphitheater Parkway",
    location:"MountainView"
},
{
    firstname:"Tesla",
    lastname:"Inc",
    block:32,
    place:"333 Santana Row",
    location:"San Jose"
},
];
console.log(companyInfo);

