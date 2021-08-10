/*
1. Sukurkite klase <User>
  1.1 Konstruojant User klase reikalingi sekantys laukai: id, vardas, pavarde, roles, logedIn
  1.2 Sukurti metoda kuris pridetu User role.
  1.3 Sukurti metodus kurie pakeistu loggedIn statusa.
  1.4 Sukurti metoda kuris istrintu keleta User roles.
  1.5 Sukurti metoda kuris grazintu pilna vartotojo varda dviem budais:
    a. kai vardas yra pirmas
    b. kai pavarde yra pirma
  1.6 sukurti metoda kuris pakeistu id.

2. Sukurkite 5 skirtingu User'iu masyva
  2.1 3-iam User'iui eileje pridekite role "superadmin"
  2.2 Isfiltruokite tiktai tuos userius kurie turi role "superadmin"
  2.3 Suagreguokite visu User'iu vardus (reduce)
  2.4 Patikrinkite ar visu User'iu id yra maziau uz 10
  2.4 Raskite User'i kurio pavarde yra "4 Pavarde" indexa
  2.5 Raskite Useri kurio vardas yra '2 Vardas'


3. Perrasykite klase <User> prototype based (funkciniu) budu.
*/

class User {
  constructor(id, name, surname, roles) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.roles = roles || [];
    this.logedIn = false;
  }

  addRole(role) {
    this.roles.push(role);
  }

  logIn() {
    this.logedIn = true;
  }

  logOut() {
    this.logedIn = false;
  }

  removeRoles(rolesToRemove) {
    const filteredRoles = this.roles.filter((role) => {
      return !rolesToRemove.includes(role);
    });

    this.roles = filteredRoles;
  }

  getFullName(surnameFirst) {
    return surnameFirst
      ? `${this.surname} ${this.name}`
      : `${this.name} ${this.surname}`;
  }

  changeUserId(newId) {
    this.id = newId;
  }
}

const jonas = new User(1, "Jonas", "Petrauskas", [
  "admin",
  "superAdmin",
  "doctor",
]);

// jonas.addRole("simpleUser");
// console.log("Before", jonas);

jonas.changeUserId(3);
// jonas.removeRoles(["admin", "superAdmin"]);

// console.log("After", jonas);

const users = [...Array(5)].map((value, index) => {
  roles = index % 2 ? ["superAdmin"] : ["buyer", "customer"];

  return new User(index, `${index} Vardas`, `${index} Pavarde`, roles);
  // console.log(index);
});

users[2].addRole("superAdmin");

console.log(users);
