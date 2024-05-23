"use strict"
//Погрібняк Андрій Андрійович ТЗ-21
//Лабораторна робота з ООП
class Employee {
    constructor(FirstName, LastName, zp, dosvid) {
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.zp = zp;
      this.dosvid = dosvid;
    }
    countedSalary() {
        let salary = this.zp;
        if (this.dosvid > 5) {
          salary = this.zp * 1.2 + 500;
        } 
        else if (this.dosvid > 2 && this.dosvid <=5 ) {
          salary += 200;
        }
        return salary;
      }
    }
class Developer extends Employee {
    constructor(FirstName, LastName, zp, dosvid) {
        super(FirstName, LastName, zp, dosvid);
     }
    }
      
class Designer extends Employee {
    constructor(FirstName, LastName, zp, dosvid, coef) {
        super(FirstName, LastName, zp, dosvid);
        this.coef = coef;
    }
      
    countedSalary() {
        let salary = super.countedSalary();
        salary *= this.coef;
        return salary;
        }
    }
      
class Manager extends Employee {
    constructor(FirstName, LastName, zp, dosvid, team=[]) {
          super(FirstName, LastName, zp, dosvid);
          this.team = team;
        }
      
    countedSalary() {
        let salary = super.countedSalary();
      
        if (this.team.length > 10) {
            salary += 300;
        } 
        else if (this.team.length > 5 && this.team.length <= 10) {
            salary += 200;
        }
      
        const Dev = this.team.filter(member => member instanceof Developer).length;
          if (Dev> this.team.length / 2) {
            salary *= 1.1;
          }
      
          return salary;
        }
    }
class Department {
        constructor(managers = []) {
        this.managers = managers;
        }
      
        giveSalary() {
          const allEmployees = [];
      
          this.managers.forEach(manager => {
            allEmployees.push(manager);
            manager.team.forEach(member => {allEmployees.push(member);});
          });
      
          allEmployees.forEach(employee => {
            console.log(`${employee.FirstName} ${employee.LastName} отримав ${employee.countedSalary()} шекелів`);
          });
        }
    }
const dev1 = new Developer("Андрій", "Погрібняк", 1000, 3);
const designer1 = new Designer("Сергій", "Разок", 1100, 4, 0.9);
const designer2 = new Designer("Марія", "Якась", 1300, 7, 0.1);
const manager1 = new Manager("Михайло", "Михайлов", 1500, 8, [dev1, designer1]);
const manager2 = new Manager("Дар'я", "Весела", 1600, 10, [dev1,designer1, designer2]);

const department = new Department([manager1,manager2]);

department.giveSalary();