/*
1. Sukurkite 5 skirtingu User'iu masyva
  1.1 Pakeiskite 2 masyvo User'i nauju (splice)
  1.2 Apsukite reversuokite Masyva (reverse)
  1.3 Ismeskite paskutini Useri is masyvo (pop)
  1.4 Ismeskite pirma Useri is masyvo (shift)
  1.5 Pridekite viena Useri i masyvo pradzia (unshift)
  1.6 Suagreguokite Useriu pavardes i viena masyva naudojant map ir sujinkite visus masyvo elementu i viena string (join)
  1.7 Patikrinkite ar bent vienas Useris yra logedIn (includes)
  1.8 Array.isArray()
  1.9 FlatMap
  1.10 CopyWithin

2. Sukurkite Nauja objekta:
  2.1 Sukurkite antra objekta ir sujunkite abudu objektus (assign)
  2.2 Nukopijuokite objekta panaikindami reference rysius (CloneDeep) (JSON.stringify)
  2.3 Isveskite i console objekto rakto ir reiksmes poras (entries)
  2.4 Gaukite visus objekto raktus (keys)
  2.5 Gaukite visas objekto raktu reiksmes (values)
  2.6 "Susaldykite" objekta (freeze)
  2.7 Patikrinkite ar objektas susaldytas (isFrozen)
  2.9 Patikrinkte ar objektas turi key (hasOwnProperty)
  2.10 Patikrinkite ar abu objektai yra lygus (is)
  2.11 Uzdarykite objekta, neleiskite istrinto jo raktu (seal)
  2.12 Patikrinkite ar objektas yra uzdarytas (isSealed)

  Namu darbui:
  1. Sukurkite Objekta is masyvo [['a', 1], ['b', 2], ['c', 3], ['d', 4]]
    1.1. Naudodami Objekto ir Masyvo metodus gaukite visu sukurto objekto reiksmiu suma,
    1.2. Is sukurto objekto raktu gaukite viena teksta kurio raides butu atskirtos tarpais.
  2. Is upiu masyvo const rivers = [{name: 'Nile', length: 6650}, {name: 'Amazon', length: 6992}, {name: 'Congo', length: 4700}, {name: 'Mississippi', length: 3730}, {name:'Rio-Grande', length: 3034}];
    2.1. Sudarykite tik upiu pavadinimu masyva, ir isrikiuokite upes pagal abecele
    2.2. Sudarykite upiu ilgiu masyva, ir gaukite bendra upiu ilgi.
*/

class User {
  constructor(id, name, surname, roles) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.roles = roles || [];
    this.logedIn = true;
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

const users = [...Array(5)].map((value, index) => {
  roles = index % 2 ? ["superAdmin"] : ["buyer", "customer"];

  return new User(index, `${index} Vardas`, `${index} Pavarde`, roles);
});

users[2].addRole("superAdmin");

// 1.2 Apsukite reversuokite Masyva (reverse)
const reversedUsers = [...users].reverse();
// console.table(reversedUsers);

//   1.3 Ismeskite paskutini Useri is masyvo (pop)
// console.table(users);
const usersForPop = [...users];
const poped = usersForPop.pop();
// console.table(usersForPop);
// console.log(poped);

//   1.4 Ismeskite pirma Useri is masyvo (shift)
const usersForShift = [...users];
const shifted = usersForShift.shift();

// console.table(usersForShift);
// console.log(shifted);

//   1.5 Pridekite viena Useri i masyvo pradzia (unshift)
const usersForUnshift = [...users];
usersForUnshift.unshift(jonas, jonas, jonas);
// console.table(usersForUnshift);

// 1.6 Suagreguokite Useriu pavardes i viena masyva naudojant map ir sujinkite visus masyvo elementu i viena string (join)
const usersSurnamesString = users.map((user) => user.surname).join(", ");
// console.log(usersSurnamesString);

const string = "dramblys";
// console.log(string.split("").sort().join(""));

// 1.7 Patikrinkite ar bent vienas Useris yra logedIn (includes)
const upes = ["Nemunas", "Neris", "Sesupe", "Sventoji", "Ula", "Jura"];
// console.log(upes.includes("Neris")); // iesko visame masyve
// console.log(upes.includes("Neris", 2)); // iesko nuo 2 indekso

// 1.8 Array.isArray()

// console.log(Array.isArray(users));
// console.log(typeof string === "string");
// console.log(typeof users);

//   1.9 FlatMap
const notFlatArray = [
  [1, 2, 3, [8, 9, 10]],
  [3, 4],
  [1, 4, 6, 7, 8],
];
const faltNotFlatArray = notFlatArray.flatMap((value) => value);
// console.log(notFlatArray);
// console.log(faltNotFlatArray);

//   1.10 CopyWithin
const copyWithinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
copyWithinArray.copyWithin(1, 0, 3);
// console.log(copyWithinArray);

// Most used: map, forEach, reduce, some, every, flatMap, Array.isArray, join, includes, find, findIndex

// 2. Sukurkite Nauja objekta:
const object = new Object();
const object1 = {};
let object2 = { a: 1, b: "foo" };
let text = "string";

// 2.2 Nukopijuokite objekta panaikindami reference rysius (CloneDeep) (JSON.stringify)
// Reference type explanation
let obj1 = object2;
let string1 = text;
// console.log("Before mutation", object2, text);

// obj1.a = 3;
// string1 = "abc";

// console.log("After mutation", object2, text);

// CloneDeep or Destroy Reference
const obj2 = JSON.parse(JSON.stringify(object2));
// console.log("Before mutation", obj2, object2);
obj2.a = 3;
// console.log("After mutation", obj2, object2);
// console.log(JSON.parse(JSON.stringify(object2)));

// console.log(object2.b);

//   2.3 Isveskite i console objekto rakto ir reiksmes poras (entries)

const objektas = { icon: "kazkas", b: 42, c: "c" };
const { icon, ...kaksdasd } = objektas; // destructuring object
// console.log(icon);
// console.log(kaksdasd);
// console.log(Object.entries(objektas));
const iterated = Object.entries(objektas).map((element) => {
  const [raktas, reiksme] = element; // destructurin array
  return reiksme;
});
// console.log(iterated);

//   2.4 Gaukite visus objekto raktus (keys)
const post = { id: 123, message: "hello", img: "wwww.image.com" };

Object.keys(post).forEach((key) => {
  // console.log(post[key]);
});

//   2.5 Gaukite visas objekto raktu reiksmes (values)
// console.log(Object.values(post));

//   2.6 "Susaldykite" objekta (freeze)
const hotObject = { celcius: 36 };
// Object.freeze(hotObject);
hotObject.celcius = 25;
// console.log(hotObject);

//   2.7 Patikrinkite ar objektas susaldytas (isFrozen)
// console.log(Object.isFrozen(hotObject));

//   2.9 Patikrinkte ar objektas turi key (hasOwnProperty)
const hasOwnProp = { a: 1, b: 2 };
// console.log(hasOwnProp.hasOwnProperty("c"));

// 2.10 Patikrinkite ar abu objektai yra lygus (is)
const obj112 = { a: 1 };
const obj113 = { a: 1 };

// console.log(Object.is(obj112, obj113));

//  2.11 Uzdarykite objekta, neleiskite istrinto jo raktu (seal)
const sealedObject = { a: 1, b: "2" };
// Object.seal(sealedObject);

delete sealedObject.a;
console.log(sealedObject);

// 2.12 Patikrinkite ar objektas yra uzdarytas (isSealed)
console.log(Object.isSealed(sealedObject));

// Most used: Object.entries(), Object.values(), Object.keys()
