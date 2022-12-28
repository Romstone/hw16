const database = [
    {name:"John", country:"Israel", age:19, isMarried:true},
    {name:"Mary", country:"Israel", age:29, isMarried:false},
    {name:"Bill", country:"Belgium", age:10, isMarried:false},
    {name:"Jane", country:"France", age:30, isMarried:true},
    {name:"Hanna", country:"France", age:9, isMarried:false},
    {name:"George", country:"Israel", age:80, isMarried:true}
];

function test1() {
    console.log(printIsMarried(database, true));
}

function test2() {
    printAge(database);
}

function test3() {
    calcAvg(database);
}

function test4() {
    console.log(database); //for testing purposes
    cityStat(database);
}

function test5() {
    console.log(database); //for testing purposes
    printComplex(database);
}

function test6() {
    console.log(database); //for testing purposes
    console.log(removeByPos(database, 3));
}

function printIsMarried(arr, bool) {
    return arr.filter(function (value) {
        return value.isMarried === bool;
    });
}

function printAge(arr) {
    const arrAge = arr.sort(function (a, b) {
        return a.age - b.age;
    });
    console.log(arrAge);
}

function calcAvg(arr) {
    const avg = arr.reduce(function (accum, currentValue, index, array) {
        accum += currentValue.age;
        if (index === array.length - 1)
            return accum / array.length;
        else
            return accum;
    }, 0);
    console.log(avg);
}

function cityStat(arr) {
    const statistics = arr.reduce(function (accum, currentValue) {
        if (accum[currentValue.country])
            accum[currentValue.country]++;
        else
            accum[currentValue.country] = 1;
        return accum;
    }, {});
    console.log(statistics);
}
function printComplex(arr) {
    const sortMarried = printIsMarried(arr, true).sort(function (a, b) {
        return a.name.localeCompare(b.name);
    });
    const sortNotMarried = printIsMarried(arr, false).sort(function (a,b) {
        return b.age - a.age;
    });
    const avgMarried =
        printIsMarried(arr, true).reduce(function (accum, currentValue, index, array) {
            accum += currentValue.age;
            if (index === array.length - 1)
                return accum / array.length;
            else
                return accum
        }, 0);
    console.log(sortMarried, sortNotMarried,
        "average age of married persons = "+avgMarried);
}

function removeByPos(arr, position) {
    const arrCopy = arr.slice();
    arrCopy.splice(position - 1, 1);
    return arrCopy;
}