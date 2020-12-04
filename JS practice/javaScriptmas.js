//Day 2 answer
function depositProfit(deposit, rate, threshold) {
  let year;
  for (let i = 0; deposit <= threshold; i++) {
    percentage = rate / 100;
    deposit += deposit * percentage;
    year = i + 1;
  }
  return year;
}

//-----------------Day 3
function chunkyMonkey(values, size) {
  let newArr = values.splice(size);
  return [values, newArr];
}

chunkyMonkey(["a", "b", "c", "d"], 2);
chunkyMonkey([0, 1, 2, 3, 4, 5], 4);
//-----------------

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------
