class User {
    constructor(name, age, tech) { // User 클래스의 생성자
      this.name = name;
      this.age = age;
      this.tech = tech;
    }
  }
  
  const user = new User("이용우", 28, "Node.js"); // user 인스턴스 생성
  
  console.log(user.name); // 이용우
  console.log(user.age); // 28
  console.log(user.tech); // Node.js
  console.log(user); // Node.js