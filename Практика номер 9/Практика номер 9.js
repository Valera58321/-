let user = {
    name: "JAZZ",
    age: 82
  };
  user.sayHi = function() {
    alert("Привет!");
  };
  user.sayHi(); 
  let zxc = {
    name: "Горбатенко Валерий",
    address: "ул. Пушкина, дом Колотушкина",
    phone: "+7977420612",
    email: "VALERA@gmail.com",
    orderHistory: [] 
   };
   
   console.log(jazz.name); 
   console.log(jazz.address); 
   console.log(jazz.phone); 
   let children = {
    name: "Валера",
    isAdmin: false
   };
   let fff = {
  userID: 1,
  ZAKAZ: 2,
  items: ["Man","Borh"],
  status: "Ожидание"
   }
   let restaurant = {
    id:2,
    name: "9",
    address:"8"
   };
   if (fff.status === "Ожидание") {
    console.log(`Заказ ${fff.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
  }
  function GroupMember(name) {
    this.name = name;
   }
   
   const member1 = new GroupMember("Валерий");
   const member2 = new GroupMember("Женя");
   const member3 = new GroupMember("Ярик водила");
   
   console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
   function Student(name, group, courses) {
    this.name = name;
    this.group = group;
    this.courses = courses;
   
    this.sayHi = function() {
     console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
    };
   
    this.showCourses = function() {
     console.log(`Я учусь на следующих курсах: ${this.courses.join(', ')}`);
    };
   }
   
   const vasya = new Student("Валерий", "ИСП-309", ["WEB"]);
   
   vasya.sayHi(); 
   vasya.showCourses();