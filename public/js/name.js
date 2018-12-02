var booker = document.getElementById("booker");
var name = -1;
var arr = ["B","o","o","k","e","r"," ","R","o","b","i","n","s","o","n"," "," "," "," "," "," "," "," "," "," "," "];
var book = [];

function header() {
  if (name < arr.length) {
    name++;
    book.push(arr[name]);
     for (var i = 0; i < arr.length; i++) {
       var nam = book.join("");
       booker.textContent = nam;
       return nam;}}
       else {
        //  name = -1;
        //  booker.textContent = "B";
        //  book = [];
        console.log(nameInt);
        clearInterval(nameInt);
       }
     }

var nameInt = setInterval(header, 100);

