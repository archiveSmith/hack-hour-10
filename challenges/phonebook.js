/**
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505'],
*     ['jasmine','1800-974-4539']
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  const obj = makePhoneBookObject(jazbook);
  if (name in obj) return obj[name];
  return false;
}

const jazbook = [
  ['alex','301-844-3421'],
  ['jae','301-844-1211'],
  ['david','301-844-0978'],
  ['travis','301-844-8505'],
  ['jasmine','1800-974-4539']
];

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  const storage = {};
  jazbook.forEach((el) => {
    storage[el[0]] = el[1];
  });
  return storage;
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
