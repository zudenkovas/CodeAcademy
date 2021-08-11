/*
1. Sukurkite 5 skirtingu User'iu masyva
  1.1 3-iam User'iui eileje pridekite role "superadmin" (push arba addRole)
  1.2 Isfiltruokite tiktai tuos userius kurie turi role "superadmin" (filter)
  1.3 Suagreguokite visu User'iu vardus i viena masyva naudojant map (map)
  1.4 Suagreguokite visu User'iu pavardes i viena masyva naudojant reduce (reduce)
  1.5 Patikrinkite ar visu User'iu id yra maziau uz 10 (every)
  1.6 Patikrinkite ar bent vieno User'io id yra 0 (some)
  1.7 Raskite User'i kurio pavarde yra "4 Pavarde" indexa (findIndex)
  1.8 Raskite Useri kurio vardas yra '2 Vardas' (find)
  1.9 Isrusiuokite User'ius atbuline tvarka pagal ju id, nuo didziausio iki maziausio (sort)
  1.10 Prijunkite prie Masyvo dar viena rankiniu o ne iteraciniu budu sukurta User'iu masyva (concat arba spread)
  1.11 Ispjaukite tik 2 ir 3 Useri'ius is Masyvo (slice)
  1.12 Iterpkite nauja User'i 3 Masyvo vieto (splice)
  1.13 Pakeiskite 2 masyvo User'i nauju (splice)
  1.14 Apsukite reversuokite Masyva (reverse)
  1.15 Ismesktye paskutini Useri is masyvo (pop)
  1.16 Ismeskite pirma Useri is masyvo (shift)
  1.17 Pridekite viena Useri i masyvo pradzia (unshift)
  1.18 Suagreguokite Useriu pavardes i viena masyva naudojant map ir sujinkite visus masyvo elementu i viena string (join)
  1.19 Patikrinkite ar bent vienas Useris yra logedIn (includes)

  Namu darbui:
  Isirikiuoti sio masyvo skaicius eiles tvarka, ir isfiltruoti tik lyginius skaicius:
  const numbers = [0, 2, 1, 4, 3, 11, 13, 30, 20, 54, 39, 86 ];
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

// 1.2 Isfiltruokite tiktai tuos userius kurie turi role "superadmin" (filter)
const superAdminUsers = users.filter((user)=> { return user.roles.includes('superAdmin')})

// 1.3 Suagreguokite visu User'iu vardus i viena masyva naudojant map (map)
const mapper = (user) => { return user.name}
function mapperFunction(user){return user.name}
const userNamesArray = users.map(mapperFunction)

// 1.4 Suagreguokite visu User'iu pavardes i viena masyva naudojant reduce (reduce)
const reducerWithContact = (akumuliatorius, user) => { return akumuliatorius.concat(user.surname)};
const reducerWithSpread = (acc, user) => {return [ ...acc, user.surname ]}
const reduceWithPush =(acc, user) => {const newAcc = [...acc]; newAcc.push(user.surname); return newAcc }
const userSurnameArray = users.reduce(reduceWithPush, [])

// 1.5 Patikrinkite ar visu User'iu id yra maziau uz 10 (every)
const isIdsLessThanTen = users.every((user) => user.id > 10);

// 1.6 Patikrinkite ar bent vieno User'io id yra 0 (some)
const hasIdZero = users.some((user) => user.id === 5)

// 1.7 Raskite User'i kurio pavarde yra "4 Pavarde" indexa (findIndex)
const indexOfUser = users.findIndex((user) => user.surname === "4 Pavarde")

// 1.8 Raskite Useri kurio vardas yra '2 Vardas' (find)
const foundUser = users.find((user) => user.name === '2 Vardas')

// 1.9 Isrusiuokite User'ius atbuline tvarka pagal ju id, nuo didziausio iki maziausio (sort)
// console.table(users)
// const sortedUsers = users.sort((a, b) => {return  b.id - a.id  })

// 1.10 Prijunkite prie Masyvo dar viena rankiniu o ne iteraciniu budu sukurta User'iu masyva (concat arba spread)
const customUsers = [{name: 'Vardenis', surname: 'Pavardenis'}, {name: 'Pavardys', surname: 'Vardys'}];
const conactUsers = customUsers.concat(users);
const newUsers = [...customUsers, ...users];

// 1.11 Ispjaukite tik 2 ir 3 Useri'ius is Masyvo (slice)
const slicedUsers = users.slice(1, 3)

// 1.12 Iterpkite nauja User'i 3 Masyvo vieta (splice)
const copiedUsers = [...users];
copiedUsers.splice(2, 3, {name: 'vardas', surname: 'pavarde'})

console.table(copiedUsers)

// console.table(users)
// console.table(conactUsers)
