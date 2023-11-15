//Задание 1
const grades = [];

for (let i = 0; i < 12; i++) {
    grades.push(Math.floor(Math.random() * ((100 - 1) + 1)));
}
console.log(grades);

//Задание 2
const sum = grades.reduce(function (a, b){
    return a + b;
})
const averageValue = sum/grades.length;
console.log(averageValue);

//Задание 3
const maxValue = Math.max(...grades);
console.log(maxValue);

//Задание 4
const minValue = Math.min(...grades);
console.log(minValue);

//Задание 5
const positiveRating = grades.filter((elem) => elem >= 60);
console.log(positiveRating.length);

//Задание 6
const negativeRating = grades.filter((elem) => elem < 60);
console.log(negativeRating.length);

//Задание 7
const newGrades = grades.map(function (item){
    if(item >= 80){
        return 'A';
    }
    if(item >= 60 && item <= 79){
        return 'B';
    }
    if(item >= 40 && item <= 59){
        return 'C';
    }
    if(item >= 20 && item <= 39){
        return 'D';
    }
    else
    return 'E';
});
console.log(newGrades);