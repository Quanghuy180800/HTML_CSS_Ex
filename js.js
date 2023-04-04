// EX 1: function reverse string
var a = prompt("nhap chuoi:");
var arr = "";
for (let i = a.length - 1; i >= 0; i--) {
  arr+=a[i];
}

console.log(arr);

// EX 2: CamelCase function

const capitalizeFirstLetter = (w) => w.charAt(0).toUpperCase() + w.slice(1);
const FirstLetter = (w) => w.charAt(0).toLowerCase() + w.slice(1);
function toCamelCase(str) {
  const stringSplitted = str.split(" ");
  const camelized = stringSplitted.map((w, i) =>
  i === 0 ? FirstLetter(w) :
    i > 0 ? capitalizeFirstLetter(w) : w
  );
  return camelized.join("");
}

console.log(toCamelCase("JavaScript exercises"));
console.log(toCamelCase("JavaScript Exercises"))
console.log(toCamelCase("JavaScriptExercises"))
console.log(arr);

// EX 3:  truncate_String function


function truncateString(str, length, special_str) {
  if (length == null) {
    return str;
  }
  if (special_str == null) {
    special_str = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - special_str.length) + special_str;
  } else {
    return str;
  }
}

console.log(truncateString('We are doing JS string exercises.'))
console.log(truncateString('We are doing JS string exercises.', 19))
console.log(truncateString('We are doing JS string exercises.', 15,'!!'))

// EX 4: symmetry function

function symmetry(str) {
  if (typeof str == 'number'){
    return "It must be a string.";
  }

  let str1 = str.split("");
  let first = str[0];
  let last = str[str.length - 1];
  if (first === last) {
    str1.shift();
    str1.pop();
    if (str.length === 0 || str.length === 1) {
      return true;
    } else {
      let newStr = str1.join("");
      return symmetry(newStr);
    }
  }
  return false;
}

console.log(symmetry("maam"));
console.log(symmetry("civic"));
console.log(symmetry("IO"));
console.log(symmetry(12321));

// EX 5: Date format function

function formatDate() {
  var d = new Date(),
      month = d.getMonth() + 1,
      day = d.getDate(),
      year = d.getFullYear();

  if (month < 10) 
      month = '0' + month;
  if (day < 10) 
      day = '0' + day;

  console.log([month, day, year].join('-'));
  console.log([month, day, year].join('/'));
  console.log([ day, month, year].join('-'));
  console.log([ day, month, year].join('/'));
}
formatDate();


// EX 6: days to Lunar New Year
 
var Holidays = require('date-holidays');
var hd = new Holidays('VN');
let holiday = hd.getHolidays(2024);

c = holiday.filter((i) => i.name == 'Tết Nguyên Đán');

console.log(c[0].date);

let date1 = new Date(c[0].date);
let date2 = new Date();

const days = (date1, date2) => {
    let diff = date1.getTime() - date2.getTime();
    let TotalDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return TotalDays;
};

console.log(days(date1, date2) + ' days');




// EX 7: matrix function

function diagonalMatrix(matrix_data) {
    //check square matrix 
    for (var i = 0; i < matrix_data.length; i++)
      {
        rows = matrix_data.length;
    cols = matrix_data[i].length;
    if(rows != cols)
      {
       console.log("Matrix should be a square matrix");
       return false;
      }
      }
      for (var i = 0; i < matrix_data.length; i++)
       {
        for (var j = 0; j < matrix_data.length; j++)
         {
          if (i !== j && matrix_data[i][j] !== 0)
          {
            return false;
          }
        }
      }
      return true;
    }
    console.log(diagonalMatrix([[0, 0, 0], [0, 0, 0], [0, 0, 0] ]));
    console.log(diagonalMatrix([[1, 0, 0], [0, 2, 3], [0, 0, 3] ]));


