let score_btn = document.querySelector("#input-btn");

data = [
  { player: "Jane", score: 52 },

  { player: "Mark", score: 41 },
];

score_btn.addEventListener("click", function () {
  //   console.log(data[0].player);

  data.forEach((element) => {
    console.log(
      `The player name is: ${element.player} and his score is: ${element.score}`
    );
  });
});
