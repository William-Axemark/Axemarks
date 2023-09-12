'use strict'

function myObj(a, b, c) {
  return {
    first: a,
    last: b,
    nationality: c
  }
}

function useMyObj() {
  const info = myObj('William', 'Axemark', 'Sweden');
  const firstname = info.first;
  const lastname = info.last;
  const country = info.nationality;
  const space = ' ';
  return firstname + space + lastname + space + country;
}

const myInfo = useMyObj();

console.log(myInfo); // William Axemark Sweden