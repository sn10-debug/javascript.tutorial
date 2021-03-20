/*
//lecture 1
let sn = 'fun';
if (sn === 'funny') alert('hello world');
alert('hello');
console.log(40 + 50);
console.log("shakti");
console.log(sn);
let firstName = 'this method of writing the variable name is camelcase that is first letter small then another word starting with capita letter and variable name cannot start with a number and this name can contain only number underscore dollar sign and the reserved keywords in the javascript cannot be used as the name and a variable name should not start with a uppercase letter';
console.log(firstName);
let myCurrentStatus = 'Student';
let myFuture = 'coder';
console.log(myCurrentStatus);
console.log(myFuture);
console.log(100 + 30 + 98 - 70);
//let sam = 'x';
//console.log(sam);
//alert('hello world');

//assignment.
let country = 'india';
let continent = 'asia';
let population = '100 crores';
console.log(country);
console.log(continent);
console.log(population);*/






/*
//lecture 2

console.log(true);//as true is not a string it is a boolean value
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);//type of just says the type of data stored
console.log(typeof javascriptIsFun);//here this will be shown as boolean beacause a true is a boolean
console.log(typeof 23);
console.log(typeof 'hello');
alert(typeof '25');//here in this it just displays the type of data stored to be displayed and this apostrophe makes the number string.
alert(typeof 25);//this takes the data as number and without apostrophe the string wil be recognized as a variable by javascript.
javascriptIsFun = 'hello';//this is called dynamic data type that is we have changed the value and its value without defining the variable again.
console.log(typeof javascriptIsFun);//here it will be displayed as a string because a boolean is replaced by a string.
let green;//here no value is defned to the variable.
console.log(green);
console.log(typeof green);//here it will display undefined because no kind of value is stored
green = 2003;
console.log(typeof green);
console.log(typeof null);//here null is ame as undefined but in javascript it is recognized as a object and therefore as it does not make sense and therefore it is considered as a bug.
*/
/*
let age = 17;//here the value of value can be changed
console.log(age);
const birthYear = 2003//here the value of the variable cannot be changed again as const is used.
console.log(birthYear);
//birthYear = 2004;//here error will occur as soon as this value of const variable is changed.
var hello = 'x';
console.log(hello);*/




/*


//math operators
const now = 2028
const ageAtlanta$1 = now - 2025;
const ageAtlanta$2 = now - 2026;
console.log(ageAtlanta$1 + ageAtlanta$2);
console.log(typeof ageAtlanta$1, typeof ageAtlanta$2);
console.log(ageAtlanta$1 * 2 + ageAtlanta$2 / 2 + 2 ** 4);//2**4 means 2 to the power 4;
console.log(ageAtlanta$1 * 2, ageAtlanta$2 / 2, 2 ** 4);
let num1 = 2;
let num2 = 3;
console.log(num1 + num2);
num1 = 4;
console.log(num1 + num2);//here the value of num1 is changed
const firstName = 'Shakti';
const lastName = 'Santosh Nayak'
console.log(firstName + lastName);//here there will be no space between the string variables as here apostrophe for the space is not used.
console.log(firstName + ' ' + lastName);


//assignment operators
let y = 10 + 7;//17
alert(firstName + ' ' + y);//here also operator works.
console.log(y);
let x = "Addition with 10 of the number is "
y += 10//this means y=y+10
console.log(x + y);
let z = "the substraction is "
y -= 10;
console.log(z + y)//here space was needed beacuse in the variable we defined space.
y = 17;//here again we defined y beacuse previously the value of y was changed
y *= 2;
console.log(y);//34
y++;//y=y+1;
console.log(y);//35
y--;//y=y-1
y--;
console.log(y);//33 as two times --

//comparison operators
console.log(ageAtlanta$1 > ageAtlanta$2);//this just says whether the statement is true or false like a boolean
let a = ageAtlanta$1 > ageAtlanta$2;
if (a === true) alert("atlanta1 is elder to atlanta2")
console.log(typeof a);//as the comparison is a boolean so the output comes out to be boolean.
console.log(ageAtlanta$1 >= 18)//>= is used to show greater than equal to.
let b = ageAtlanta$1 >= 18;
if (b === false) alert("Atlanta1 is not yet 18");//as this is true so this will display
console.log(now - 2025 > now - 2026);//first javascript will perform mathematical operations and then it compares and this is beacuse the addition has the highest preference.most of the mathematical operations are evaluated left to right that is calculation starts from left to right and if it would start from left to right then the answer would have come different.

let c, d;

c = d = 10;
console.log(c > d);
let averageAge = ageAtlanta$1 + ageAtlanta$2 / 2;//4//here first division will occur because it has higher precedence than addition then therefore agratlanta2 will be divided by 2 first then it will be added to age of atlanta1.
console.log(ageAtlanta$1, ageAtlanta$2, averageAge);
let averageAge1 = (ageAtlanta$1 + ageAtlanta$2) / 2;//2.5//here the bracket will be calculated first because gropuping has the most precedence in the javascript
console.log(ageAtlanta$1, ageAtlanta$2, averageAge1);


*/




/*


//coding challenge
//first data
let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 95;
let johnHeight = 1.95;
let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(marksBMI, johnBMI);
console.log(marksBMI > johnBMI);

//second data
let marksWeight2 = 95;
let marksHeight2 = 1.88;
let johnWeight2 = 85;
let johnHeight2 = 1.76;
let marksBMI2 = marksWeight2 / marksHeight2 ** 2;
let johnBMI2 = johnWeight2 / johnHeight2 ** 2;
console.log(marksBMI2, johnBMI2);
console.log(marksBMI2 > johnBMI2);

let marksData = marksBMI > marksBMI2;
console.log(marksData);
//if (marksData === true) alert('marks earlier data was accurate');
let johnData = johnBMI > johnBMI2;
console.log(johnData);

//practice
 let now = 2020;
let dogAge = now - 2015;
let catAge = now - 2018;
console.log(dogAge, catAge, dogAge > catAge);
let ageFactor = dogAge > catAge;
if (ageFactor === true) alert('the dog is elder to cat');
if (ageFactor === false) alert('the cat is elder to the dog');
*/



/*
let presentYear = 2021;
let shaktiAge = presentYear - 2003;
let snigdhaAge = presentYear - 2010;
let ageCompare = shaktiAge > snigdhaAge;
console.log(shaktiAge > snigdhaAge);


*/


/*

// new lecture
const firstName = ' Shakti Santosh Nayak'
const now = 2021;
const bornYear = 2004;
const profession = 'developer';
const shakti1 = "I'm" + firstName + " , " + (now - bornYear) + " year old " + profession + " ! ";
console.log("I'm" + firstName + " , " + (now - bornYear) + " year old " + profession + " ! ");
console.log(shakti1);
const shakti2 = `I'm ${firstName}`;//this sign `` is used to directly write a string without putting appostrophe again and again and with dollar sign and curly bracket we represent the variable.
console.log(shakti2)//this above method is called as template literals.
const age = now - bornYear;
console.log(`here is the result about the age that is predicted is ${age > bornYear}`);
console.log("simple string");
console.log('hello \n\
world ');// here in javascript to write in multiple line is used with writing \n\ which means end of the line like in other languages
//another method
console.log(`string
with
multiple lines`);
console.log(`hello
${firstName}
your age is
${age}`)
const driving = age >= 18
const drivingAge = 18;
if (driving) alert("You can drive a vehicle 🚘")// windows + '.'(fullstop) is the shotcut for emoji
if (driving === true) {

    console.log(` ${firstName} You can drive the vehicle legally 🚗 `)//use of if else statement and here it is not require to define the boolean true while writing after the if because by default it is true.
} else {
    console.log(`${firstName} You are under age to drive and you should wait for ${drivingAge - age} years`)
}



const productPrice = 200;
const discountPrice = 500;
if (productPrice >= 500) {
    console.log("you can get a discount")
}
else {
    console.log(`You cannot get a discout and you need to buy more things of rupees ${discountPrice - productPrice}`)
}

const age1 = 19;
if (age1 <= 18) {

    alert("hello boy");
}
else {
    alert("hello man");
}


*/



/*
const birthYear = 1967;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}//here we need to define century outside the if else statement brackets beacuse if not defined outside then it will not work outside the brackets of if else statement.
console.log(century);


//2nd coding challenge
let marksWeight = 78;
let marksHeight = 1.69;
let johnWeight = 95;
let johnHeight = 1.95;
let marksBMI = marksWeight / marksHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(marksBMI, johnBMI);
if (marksBMI > johnBMI) {
    console.log("Marks's BMI is higher than John's BMI");
}
else {
    console.log("John's BMI is higher than Mark's BMI");
}
console.log(`Mark's BMI  is (${marksBMI}) and John's BMI is (${johnBMI})`);


*/


/*


//type conversion
//here we changed all the types manually.

const targetYear = '2023';//with the apostrophe the variable takes it as a string and therefore it cannot be added directly but without apostrophe if it is written then it can be added.
console.log(targetYear + 10);
console.log(Number(targetYear) + 10);
const processingYear = '2022';
console.log(Number(processingYear) + 10);
console.log(Number(targetYear), targetYear)//the left targetyear represents a number while the other targetyear represents a string.
console.log(Number(targetYear) + Number(processingYear));
console.log(Number('shakti'));//here the output comes out to be Nan which represents not a number.
console.log(String(50), 50);//as here both the output are same but appear to be in different colour and this beacuse the first at left is a string and the second one is number.






//type coercion
console.log(" I'm " + 17 + ' years old ');//whenever + sign is used between a string and a number then the umber is converted in the string autmoatically by javascript.
console.log('23' + '50' + 2);//here the number is not converted into number but it is taken as string by javascript as + sign is used.
//but writing a number without apostrophe will obviously treated as a number.
console.log('23' - '10' - 2);//here then - sign will convert the string into number.
console.log('23' / '2');//here also the string is converted into number and only in = sign the number in between string and number is taken as string.
console.log('23' * '2');
console.log('23' > '46');//here also taken as number




let n = '1' + 1;//11
n--;//here - operator is used so the number written in apostrophe is converted into number
console.log(n);//here the output comes out to be 10 because in + sign all the numbers with apostrophe which is a string taken as string and written together.
let m = '1' + '0' + 0;
m--;
console.log(m);
let z = 2 + 3 + 4 + '5';//here the output is 95 because the number written before a string that is(a number in the apostrophe) are taken as number but after that if simple numbers(without apostrophe) are written are taken as string.
y = '5' + 4 + 3 + 2;
console.log(z, y);
console.log('10' - '3' - '2' + '5');//55 is the solution beacuse first the substraction operation is carried out.
console.log(typeof '2');//here the output is string.



*/


/*

//falsy values:There are five falsy values.
//falsy values:0 , undefined , null , '' , Nan;
//falsy values are the values which are not false but are converted into false when they are converted into boolean.
//All other values except these 5 values are truthy values.
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));// '' is empty string.
console.log(Boolean('hello'));
console.log(Boolean({}));//{} represents a empty object and its boolean value comes out to be true.
let x = '1' + 0 + 0 + 0;
x--;
console.log(x);//999
let y = '1' - 0 - 1;
console.log(y);//0 according to type coercion
console.log(18 > 0);
console.log(Boolean(18 > 0));
console.log(`the result is ${18 > 0}`);


let money1 = 0;
if (money1) {
    console.log("You should not spend it all");
} else {
    console.log("You should get a job!");
}//here as money has value 0 and since here we have not given javascript any condition then it converts the value into a boolean and as 0 is falsy value so it executes the else statement

let money2 = 100;
if (money2) {
    console.log("You should not spend it all");
} else {
    console.log("You should get a job!");
}//here the 100 is a truthy value so the javascript gets the boolean as a true as again no condition is given to the javascript so it executes the first statement.

let food1;
if (food1) {
    console.log("You should eat it.");
}
else {
    console.log("You should not eat it.");
}
//as here food is not defined so the javascript converts food into a boolean and the boolean value comes out to be false beacuse food is undefined.





let food2 = 'dosa';
if (food2) {
    console.log("You should eat it.");
}
else {
    console.log("You should not eat it.");
}

let food3 = 0;
if (food3) {
    console.log("You should eat it.");
}
else {
    console.log("You should not eat it.");
}//the result is clear from the concept



*/




/*

let payableAmount = 500000;
if (payableAmount >= 50000) {
    alert('you have got a dicount of 30000')
}
else {
    alert('you have got nothing');
}
if (payableAmount >= 100000) {
    alert('congragulations! you have won a lottery');

}
else {
    alert('you have not won anything');
}


*/





/*



//EQUALTIY OPERATORS.

let age1 = 18;//here single = is just used for assignment
//if (age1 === 18) alert("you have become an adult");//whereas three = are used like the comparison sign which is alays a true value as both lhs and rhs are equal
console.log(Boolean(age1 === 18));
if (age1 === 18) console.log('You are an adult');// triple equality is also for strict equality.

let age2 = '18';
if (age2 === 18) console.log("You are an adult (strict)");//here this is not executed because we just assigned age2 as a string and triple equality means it should be strictly equal to the given or else it will not execute and as in the condition we gave 18 as a number but in the variable we have 18 as a string.
if (age2 == 18) console.log("You are an adult (loose)");//here this is executed because here double equality is used and this double equality does not executes the condition strictly here the javascript converts the number into a number when it is in the form of string stored in a varible and we can say this is a type of coersion.
if (Number(age2) === 18) console.log("You are an adult ")//as this is executed because the string is converted into a number and this can be said as the type of conversion.

let age3 = prompt("enter your age");
console.log(`Your age is ${age3}`)
console.log(typeof age3);//here it comes out to be a string.
if (Number(age3) === 18) {
    alert("You have just become an adult ");
} //here we have to convert the input into a number because it is stored in the form of string in the variable.
else if (Number(age3) >= 18) {
    alert("You have  become an adult ");
}
else {
    alert("You have not become an adult");
}
let age4 = 'eighteen'
if (age3 === age4) console.log("You are an adult ")
if (age3 !== 18) console.log("Why not 18 yet?");//!== is used for not equal.




*/





/*

//Boolean logical operators
//(this is basically and, or and not operators as studied in logic gates);

let hasDriverLicense = true;
let hasGoodVision = false;
console.log(hasDriverLicense && hasGoodVision);//here answer is false because && is used for and operator and we know that and operator is when both the operators are true.
console.log(hasDriverLicense || hasGoodVision);//|| is used for 'or' operator and therefore here answer will be true beacuse for or operator atleast one statement has to be true.
console.log(typeof hasDriverLicense || hasGoodVision);
let a = !hasGoodVision;//! is used for complement or not operator
console.log(a);
console.log(a && hasDriverLicense);//true because both are true.
let b = hasDriverLicense && hasGoodVision;
if (b) {
    console.log("he should drive");
}//as here condition is not given then not executed because b is a false value and in falsy statements if condition is not given then 'else' statement is executed.
else {
    console.log("someone else should drive");
}
if (hasDriverLicense && a) {
    console.log("she can drive");
}
else {
    console.log("she should not drive");
}
console.log(hasDriverLicense && a && hasGoodVision);//as answer is false because as one of them is false.
console.log(hasGoodVision || hasDriverLicense || a);//true
console.log(hasDriverLicense && a && !hasGoodVision);
let isTired = false;
if (hasDriverLicense && a && !isTired) {
    console.log("she can definitely drive");
    let d = prompt("will you be driving for now");
    if (d === "yes") {
        alert("Thank you!!!");
    } else if (d === "no") {
        alert("its okk");
    }
    else {
        alert("Excuse me");
    }
}
else {
    console.log("she has still some drawbacks in driving");
}



*/



/*





//CODING CHALLENGE
let dolphinsScore = prompt("enter the total score of the dolphins for the average");
let noOfMatches1 = prompt("enter the number of matches");

let koalasScore = prompt("enter the total score of the koalas for the average");
let noOfMatches2 = prompt("enter the number of matches");
console.log(`the average of dolphins is ${Number(dolphinsScore) / Number(noOfMatches1)}`)
console.log(`the average of koalas is ${Number(koalasScore) / Number(noOfMatches2)}`);
if (Number(dolphinsScore) / Number(noOfMatches1) > Number(koalasScore) / Number(noOfMatches2) && Number(dolphinsScore) / Number(noOfMatches1) >= 100) {
    console.log("dolphins have won the match 🏆🐬 ");
}
else if (Number(dolphinsScore) / Number(noOfMatches1) === Number(koalasScore) / Number(noOfMatches2) && Number(dolphinsScore) / Number(noOfMatches1) >= 100 && Number(koalasScore) / Number(noOfMatches2) >= 100) {
    console.log("there is a draw between them 🧛‍♂️");
} else if (Number(koalasScore) / Number(noOfMatches2) > Number(dolphinsScore) / Number(noOfMatches1) && Number(koalasScore) / Number(noOfMatches2) >= 100) {
    console.log("koalas have won the match 🏆🐨");
}
else {
    console.log("No one wins the trophy 🏆");
}




*/





/*


//Switch Statements
let day = prompt("enter your day sir?");
switch (day) {
    case 'monday'://day==="monday"
        console.log("Go to code a new Feature")
        break;//this is necessary beacuse it breaks the tasks of each day and if this is not written it will include the tasks of other days.
    case 'tuesday'://day==="tuesday"
        console.log("explain the feature before team");
    case 'wednesday':
        console.log("take the feature for the survey within the public according to the reviews made by the team and check the accounts of the business")
        break;
    case 'thursday':
    case 'friday':
    case 'saturday':
        console.log("machine learning and improvising the robots")
        break;
    case 'sunday':
        console.log("either business tour or think for a new feature or analysing the bugs or a new business with the robots.")
        break;
    default:
        console.log("Not a valid Day 😳")


}

//same task with if else statement
if (day === 'monday') {
    console.log("Go to code a new Feature")
}
else if (day === 'tuesday') {
    console.log("explain the feature before team");
}
else if (day === 'wednesday') {
    console.log("take the feature for the survey within the public according to the reviews made by the team and check the accounts of the business")
}
else if (day === 'thursday' || day === 'friday' || day === 'saturday') {
    console.log("machine learning and improvising the robots")
}
else if (day === 'sunday') {
    console.log("either business tour or think for a new feature or analysing the bugs or a new business with the robots.")
}
else {
    console.log("Not a valid Day 😳")
}





*/



/*
//there is one more way of writing condition other than if else statement and switch statements and this method is called ternary operator.
let age = 17;
age >= 18 ? console.log("You are allowed to drink wine 🍷") : console.log("You are allowed to drink soft drinks 🥤🧃")
//now whenever the condition is given true then the first statement will be executed and if false then the second statement will be executed.
let drink = age >= 18 ? "wine 🍷😁" : "soft drink 🧃😳";
console.log(drink);
console.log(typeof drink);
let num1 = '3' + 4;
num1--;
console.log(num1);
console.log('2020' - '2002');//type coercion

*/




/*

//pratice
alert('Welcome to the world class restaurant where you trade your food');
let budget = prompt("Let us know Your budget");
let day = prompt("suggest the day for exciting offers");
if (budget >= 1000 && budget < 2000) {
    console.log("You can find more exiciting and pleasant offers if your budget goes over 2000 and on the specific days as mentioned.")
    switch (day) {
        case 'monday':
            console.log("Your discounted food on monday is veg pulav🥔🥗")
            break;
        case 'tuesday':
            console.log(" Your discounted food on monday is pizza 🍕")
            break;
        default:
            console.log("no such offers 🤦‍♂️");

    }
}
else if (budget >= 2000) {
    switch (day) {
        case 'monday':
            console.log("chicken biriyani and a soft drink 🥂 ");
            break;
        case 'tuesday':
            console.log("all the dishes you will find 10% discount !! 🤗");
            break;
        default:
            console.log("no such offers 😢")
            break;
    }
}
console.log(` Sir your budget is ${budget}`);
console.log(`You can get a gift card from our company of ${budget >= 1000 && budget < 2000 ? '$5' : '10$'} `);
let lastMessage1 = budget >= 1000 && budget < 2000 ? 'thank you visit again' : 'get exciting offers on the next visit.'
alert(lastMessage1);
//always remember that a expression provides a value and a statement is just something whcih does not provide any value.
//in template literal we cannot use a if else statement.






*/



//CODING CHALLENGE
alert("Welcome to the reastaurant");
let bill = prompt("enter the bill?");
let tip1 = (Number(bill) * 15) / 100;
let tip2 = (Number(bill) * 20) / 100;
console.log(`Your tip is ${bill > 50 && bill <= 300 ? tip1 : tip2} `);
let a = bill > 50 && bill <= 300 ? tip1 : tip2;
console.log(`Your Total Bill is ${a + Number(bill)}`);
if (bill >= 300) {
    console.log('Get more amazing offers and gift cards on next visit.');
}
else {
    console.log("get more amazing offers on next visit.")
}