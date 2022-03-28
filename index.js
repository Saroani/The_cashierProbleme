const cashier = (price, cash) => {
  let amountOfNotes;
  let change = parseFloat((cash - price).toFixed(2));
  console.log(`Price: ${price}`);
  console.log(`Amount:${cash}`);
  console.log(`Change:${change}`);

  let current = [
    ["one cent coin", 0.01],
    ["two cents coin", 0.02],
    ["five cents coin", 0.05],
    ["ten cents coin", 0.1],
    ["twenty cents coin", 0.2],
    ["fifty cents coin", 0.5],
    ["one euro coin", 1],
    ["two euros coin", 2],
    ["five euros notes", 5],
    ["ten euros notes", 10],
    ["twenty euros notes", 20],
    ["fifty euros notes", 50],
    ["hundred euros notes", 100],
    ["two hundred euros notes", 200],
    ["five hundred euros notes", 500],
  ];

  for (let i = 0; i < current.length; i++) {
    current.reverse();
    /* console.log(current); */
    if (change >= current[i][1]) {
      amountOfNotes = Math.floor(change / current[i][1]);
      console.log(amountOfNotes);
      change = parseFloat((change % current[i][1]).toFixed(2));
      console.log(
        `${amountOfNotes} x ${current[i][1]} € // ${amountOfNotes}x ${current[i][0]}`
      );
    }
  }
};
cashier(4.5, 20);
