//Exercise 1
//Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT (Ex. Front end developer). 
//Tampilkan panjang data Array
//Tampilkan seluruh item pada array
//Gunakan Console.log
//Tampilkan data tersebut pada Halaman HTML menggunakan list tag
let bidangIT = ["FrondEnd","BackEnd","Fullstack","Databases Analyst", "Mobile Programming"];
console.log(bidangIT.length);
console.log(bidangIT);
bidangIT.forEach(element => {
    document.write("<ul><li>" + element + "</li></ul>");
});
// for ( let i = 0; i < bidangIT.length; i++) {
//    let text = "";
//    text += "<ul><li>" + bidangIT[i] + "</li></ul>";
//    document.write(text);
//};

//Exercise 2
//Buatlah sebuah data array yang berisi nama pada tim teman-teman.
//Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
//Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
//Tampilkan list data tersebut ke halaman HTML

const namaTeam = [
    "Aminah - Leader",
    "Kanna - Anggota",
    "Raiha - Leader",
    "RinShim - Anggota"
  ];
  const teamPertama = namaTeam.slice(0,2);
  const teamKedua = namaTeam.splice(2);
  
  console.log(teamPertama);
  console.log(teamKedua);
document.write("Nama team pertama : ");
teamPertama.forEach(element => { 
    document.write("<ul><li>" + element + "</li></ul>"); }); 

document.write("Nama team Kedua : ");

teamKedua.forEach(data => { 
    document.write("<ul><li>" + data + "</li></ul>"); }); 

//Exercise 3
//Diberikan 1 data array [3, 5, 7, 9, 11]
//Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
//Tampilkan pada console.log
let dataArray = [3, 5, 7, 9, 11];
undefined
dataArray.forEach(index => {
    console.log(index * 5 );
});

//Exercise 4
//Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua Array.
//Array pertama = [‘Math’, ‘English’, ‘Programming’]
//Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
//Program akan mengembalikan nilai TRUE or FALSE

let dataPertama = ["Math", "English", "Programming"];
let dataKedua = ["Geography","Spanish", "Programming"];
let trueFalse = dataPertama != dataKedua;
let oke = dataPertama.filter(function(val) {
  return dataKedua.indexOf(val) != -1;
});
console.log(trueFalse + " data duplicate adalah " + oke);




