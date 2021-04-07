//Exercise 1
//Buatlah sebuah object hewan yang berisikan:
//ciri-ciri (atribute) :
//nama: String
//kaki: Number
//warna: Array
//spesies: String (mamalia/unggas/dll)
//makanan: Array
//keahliannya (method) :
//terbang / loncat / berburu / dll
let hewan = {
    Nama : "Kucing",
    Kaki : 4,
    warna : ["oren", "putih", "hitam"],
    spesies : "mamalia",
    makan : ["ikan", "ayam"],
    suara : "Miaaw",
    keahlian : function (){
        return "Loncat";
    }
}
console.log(hewan);
console.log(hewan.Nama);
console.log(hewan.Kaki);
console.log(hewan.warna);
console.log(hewan.spesies);
console.log(hewan.makan);
console.log(hewan.suara);
console.log(hewan.keahlian());

//Exercise 2
//Tampilkanlah seperti ini
//Alpha ada di kelas Dragon, dia mengikuti club Bola, Bulutangkis
//Beta ada di kelas Lizard, dia mengikuti club Membaca, Bulutangkis
const data = 
[
  {
    name: "Alpha",
    class: "Dragon",
    club: ['Bola', 'Bulutangkis']
  },
  {
    name: "Beta",
    class: 'Lizard',
    club: ['Membaca', 'Bulutangkis']
  },
];
console.log(`${data[0].name} ada di kelas ${data[0].class} , dia mengikuti club ${data[0].club}`);
console.log(`${data[1].name} ada di kelas ${data[1].class} , dia mengikuti club ${data[1].club}`);

//Exercise 3
//Membuat function diluar Object
let todos = [
  {id: 1, todo: "belajar coding"},
  {id: 2, todo: "nanti tidur"}
];

//function Printall
const printFix = () => {
  console.log(`${todos[0].id} ${todos[0].todo}`);
  console.log(`${todos[1].id} ${todos[1].todo}`);
};
printFix();

//function printbyId
const printById = () => {
  console.log(`${todos[0].id}, ${todos[0].todo}`);
};
printById();

//function add(new todo)
const additem = (id, todo) => {
    return todos.push({id, todo});
};


//function deleteByID
const deletitem = (id) => {
  return delete todos[id]
};
deletitem(1);
//true

//function Update 
const updatee = (id, value) => {
  return todos[id].todo = value 
}

updatee(0, 'Belajar CRUD');
