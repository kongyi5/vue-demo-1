let book = {
  name: "JavaScript高级程序设计",
  number: 2,
  id: 1,
};

axios.interceptors.response.use(function (response) {
  // const config = response.config;
  // const { method, url, data } = config;
  const {
    config: { method, url, data },
  } = response;
  if (url === "/books/1" && method === "get") {
  } else if (url === "/books/1" && method === "put") {
    Object.assign(book, data);
  }
  response.data = book;
  return response;
});

axios.get("/books/1").then(({ data }) => {
  const originalHtml = $("#app").html();
  const newHtml = originalHtml
    .replace("__name__", data.name)
    .replace("__number__", data.number);
  $("#app").html(newHtml);
});

$("#app").on("click", "#addOne", () => {
  const oldNumber = $("#number").text();
  const newNumber = oldNumber - 0 + 1;
  axios.put("/books/1", { number: newNumber }).then(() => {
    $("#number").text(newNumber);
  });
});

$("#app").on("click", "#minusOne", () => {
  const oldNumber = $("#number").text();
  const newNumber = oldNumber - 0 - 1;
  axios.put("/books/1", { number: newNumber }).then(() => {
    $("#number").text(newNumber);
  });
});

$("#app").on("click", "#reset", () => {
  axios.put("/books/1", { number: 0 }).then(() => {
    $("#number").text(0);
  });
});
