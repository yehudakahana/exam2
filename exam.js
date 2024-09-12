// צור פונקציה המקבלת מערך של מספרים ומחזירה מערך המכיל רק את המספרים הזוגיים מהמערך הקודם 

Mission1 = function (arr) {

    return arr.filter(num => num % 2 === 0)
}
// console.log(Mission1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// צור פונקציה המקבלת מחרוזת ומחזירה את כמות המילים המכילות ארבעה אותיות

    Mission2 = function (str) {
        return str.split(' ').filter(word => word.length === 4).length;
    }
 //console.log(Mission2('thi kkisum a ring'))



// צור פונקציה המקבלת מערך דו ממדי והופכת אותו למערך חד מימדי

Mission3 = function(arr) {
    return arr.reduce((acc, curr) => acc.concat(curr), []);
}


// }
// console.log(Mission3([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))



// צור פונקציה המקבלת מערך ובודקת אם המערך עולה, יורד או לא זה ולא זה. אם המערך עולה הפונקציה תחזיר 1 (כמספר) אם המערך יורד הפונקציה תחזיר 2 (כמספר) ואם לא זה ולא זה תחזיר 0
Mission4 = function (arr) {
    let isAscending = arr.every((val, i, a) => i === 0 || a[i - 1] <= val);
    let isDescending = arr.every((val, i, a) => i === 0 || a[i - 1] >= val);

    if (isAscending) return 1;
    if (isDescending) return 2;
    return 0;
}

// console.log(Mission4([7,5,4,3,2,1]))


// צור פונקציה המקבלת מערך ראשון של מפתחות ומערך שני של ערכים ומחזירה אוביקט שמכיל מפתחות וערכים לפי הסדר
Mission5 = function (keys, values) {
    return keys.reduce((obj, key, index) => {
        obj[key] = values[index];
        return obj;
    }, {});
}

 //console.log(Mission5(['name', 'age', 'city'], ['ariel', 22, 'gan yavne' ]))











module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission5
}
//without 4 and 6