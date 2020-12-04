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

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------

//-----------------
