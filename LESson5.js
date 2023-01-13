let month = prompt("Введіть номер місяця.");
switch (month) {
  case "1":
  case "2":
  case "12":
    alert("Зима");
    break;
  case "3":
  case "4":
  case "5":
    alert("Весна");
    break;
  case "6":
  case "7":
  case "8":
    alert("Літо");
    break;
  case "9":
  case "10":
  case "11":
    alert("Осінь");
    break;
  default:
    alert("Неможливо");
    break;
}

function nNumb(num) {
    if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return "Не просте число";
        }
      }
      return "Просте число";
    }  
  }
  console.log(nNumb(17));



function element(){
        console.log(arguments);
        let max = arguments[0];
        for (let rArg of arguments) {
             if (rArg > max) max = rArg;
        };
        console.log("Max Number =",max);
     };
 element(2,3,4,5,6,7,8,9,10,11,12,13,14,22);

   
