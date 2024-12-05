function showMessage() {
    let message = "Привет, я JavaScript!"; 
    alert(message);
  }
  
  showMessage(); 

  function isPalindrome(str) {

    str = str.toLowerCase().replace(/\s/g, '');
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  console.log(isPalindrome("пельмени")); 
  console.log(isPalindrome("hello")); 


  function replaceNegativesWithSquares(arr) {
    if (arr.length <= 10) {
      throw new Error("Массив должен содержать больше 10 элементов.");
    }
    return arr.map(num => num < 0 ? num * num : num);
  }
  
  let numbers = [-1, 2, -3, 4, -5, 6, -7, 8, -9, 10, -11, 12];
  let result = replaceNegativesWithSquares(numbers);
  console.log(result); 
  
  class User {
    constructor(name) {
      this.name = name;
    }
  
    displayUserName() {
      console.log(`Имя пользователя: ${this.name}`);
    }
  }
  
  const user1 = new User("Горбатенко Валерий");
  user1.displayUserName(); 

  class Greeter {
    constructor(userName) {
      this.userName = userName;
    }
  
    showMessage() {
      let message = `Привет, ${this.userName}`;
      alert(message);
    }
  }
  
  const greeter = new Greeter('Горбатенко Валерий');
  greeter.showMessage();

  class NameReverser {
    constructor(name) {
      this.name = name;
    }
  
    reverseName() {
      return this.name.split("").reverse().join("");
    }
  }
  
  const reverser = new NameReverser("Горбатенко Валерий");
  console.log(reverser.reverseName()); 


