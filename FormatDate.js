function formatDate(date) {
  let d = date;
  if (typeof(date) == 'number') {
    d = new Date(date);
  }
  else if (typeof(date) == 'string') {
    d = new Date(date);
  }
  else if (Array.isArray(date)) {
    d = new Date(date[0], date[1], date[2]);    
  }
  let options = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  }
  return d.toLocaleString('ru', options);
}
console.log( formatDate('2011-10-02') ); // 02.10.11
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14