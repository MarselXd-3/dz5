// 1)
var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];
var tagCounts = {};

tags.forEach(tag => {
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
});

var sortedTagCounts = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .reduce((obj, [tag, count]) => {
        obj[tag] = count;
        return obj;
    }, {});

console.log(sortedTagCounts);



var array1 = [1, 2, 3, 45, 32, 56, 61, 23, 12, 2, 34, 5, 6, 3, 76, 67, 87, 76];
var array2 = [1, 45, 32, 3, 4, 2, 56, 76, 67, 87, 89, 8, 56, 54];

var commonElements = array1.filter(item => array2.includes(item))
    .sort((a, b) => b - a);

console.log(commonElements);

//2)

function getShortName(surname, firstName, patronymic) {
    return surname + ' ' + firstName[0].toUpperCase() + '.' + patronymic[0].toUpperCase() + '.';
}


var shortName = getShortName("Бекова", "Айдана", "Бековна");
console.log(shortName); 


// 3)

function filterBooks(books) {
    var booksWithU = books.filter(book => book.toLowerCase().includes('у'));
    var otherBooks = books.filter(book => !book.toLowerCase().includes('у'));
    
    console.log("Книги с буквой 'у':");
    booksWithU.forEach(book => console.log(book));
    
    console.log("Остальные книги:");
    otherBooks.forEach(book => console.log(book));
}


var books = ["Дюна", "Властелин колец", "Гарри Поттер", "1984", "Унесенные ветром", "Улисс", "Мастер и Маргарита"];
filterBooks(books);

//4)

var users = [
    { name: "Рустам", birthDate: "1990-05-15" },
    { name: "Салим", birthDate: "1985-10-20" },
    { name: "Ариет", birthDate: "1992-02-28" },
    { name: "Султан", birthDate: "1978-12-10" },
    { name: "Марсель", birthDate: "1983-07-03" }
];

users.forEach(user => {
    console.log(`Пользователь ${user.name} родился ${user.birthDate}`);
});
