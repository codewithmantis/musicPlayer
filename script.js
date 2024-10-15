var playBtn = document.getElementById("playBtn");
var playSpan = document.getElementById("playSpan");

function play() {
  console.log("h");
  console.log(playSpan.innerText);
  if (playSpan.innerText == "play_circle") {
    playSpan.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="white"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>`;
  } else {
    playSpan.innerHTML = `<span id="playSpan" class="material-symbols-outlined"> play_circle </span>
       `;
  }
}
