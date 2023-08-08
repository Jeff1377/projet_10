export const MONTHS = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

export function getMonth(date) {

   // console.log("date.getMonth", date.getMonth());

  return MONTHS[date.getMonth()];
  
};