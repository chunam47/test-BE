console.log("Bài 2");

fetch("https://metanode.co/json/eng.json", {
  mode: "no-cors",
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data, "-----------");
  });
