let buttonPlus = document.getElementById("plus");
let hiddenTextarea = document.getElementById("hiddenTextarea")
let textArea = document.getElementById("textArea")
let textWallEl = document.getElementById("textWall")


function clickPlus() {
    if (hiddenTextarea.style.display == ""){
        hiddenTextarea.style.display = "flex";
    }
    else {
        let newItem = textArea.value;
        let newLine = document.createElement("p")
        newLine.textContent = newItem;
        textWallEl.appendChild(newLine);
        textArea.value = "";
    }
    textArea.focus();
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
      clickPlus();
    }
  });
