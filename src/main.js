$("#addOne").on("click", () => {
  const oldNumber = $("#number").text();
  const newNumber = oldNumber - 0 + 1;
  $("#number").text(newNumber);
});

$("#minusOne").on("click", () => {
  const oldNumber = $("#number").text();
  const newNumber = oldNumber - 0 - 1;
  $("#number").text(newNumber);
});

$("#reset").on("click", () => {
  $("#number").text(0);
});
