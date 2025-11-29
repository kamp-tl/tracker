let buttonPlus = document.getElementById("plus");
let hiddenTextarea = document.getElementById("hiddenTextarea")
let textArea = document.getElementById("textArea")
let textWallEl = document.getElementById("textWall")
let helpTextEl = document.getElementById("helpText")

let lastEnterTime = 0;
let doubleEnterThres = 400;



let activeGroup = null;
function clickPlus() {
    if (hiddenTextarea.style.display == ""){
        hiddenTextarea.style.display = "flex";
    }
    if (activeGroup==null){
       
        if(textArea.value.trim() != "") {
            startGroup()
            helpTextEl.textContent=("Add Exercise Movement");
        }
    }
    else if (activeGroup!=null){
       
        addExercise()
        helpTextEl.textContent=("Add Exercise Movement");
    }
    textArea.focus();
}

function startGroup() {
    let newItem = textArea.value; 
    let newGroup = document.createElement("div")
    newGroup.classList.add("moveGroup");
    newGroup.textContent = newItem;
    textWallEl.appendChild(newGroup);
    textArea.value = "";
    activeGroup = newGroup;
}

function addExercise() {
    let exName = textArea.value;
    let line = document.createElement("div");
    line.classList.add("exerciseLine");
    line.textContent = exName;
    activeGroup.appendChild(line);
    textArea.value=""
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" ) {
        const now = Date.now(); 
      clickPlus()
      textArea.focus();
      if (activeGroup!==null && now - lastEnterTime < doubleEnterThres){
        //double enter 
        activeGroup = null;
        helpTextEl.textContent = "Add Movement Group"
      }
      else {
        clickPlus();
      }
      lastEnterTime = now;
      textArea.focus();
      event.preventDefault();
    }
  });
