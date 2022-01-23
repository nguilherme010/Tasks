//Atualizar header central (quantidade de tasks e duração total)
function headerUpdater() {
    let tskDrt = 0;
    let tskQty = 0;
    for (let i = 0; i < ArrayTasks.length; i++) {
        if (ArrayTasks[i][0] == true) {
            tskQty++;
        }
        else{
            continue;
        }
    }

    document.getElementById('header-center').textContent = String(tskQty) + " tasks";
}
headerUpdater();



// Checando click dentro do CreateTask
var createTaskdiv = document.getElementById('createTask');
$(window).on('load', function(){
        document.addEventListener('click', function(event) {
            if (createTaskdiv !== event.target && !createTaskdiv.contains(event.target)) {
                var input = document.getElementById('taskInput').value;
                if (input == "") {
                    anime({
                        targets: '#createTask',
                        width: '80%',
                        duration: 200,
                        easing: 'easeOutExpo'
                    });
                    document.getElementById('ellipseDivCreate').style.display = "none";
                    document.getElementById('taskleftDivCreate').style.display = "none";
                }
                else {
                    createTask();
                    document.getElementById('createTask').style.width = "80%";
                    document.getElementById('ellipseDivCreate').style.display = "none";
                    document.getElementById('taskleftDivCreate').style.display = "none";
        
                }
            
            }
            else {
                anime({
                    targets: '#createTask',
                    width: ['100%'],
                    duration: 200,
                    easing: 'easeOutExpo'
                });
            }
        });
});

function createInput() { 
        if (document.getElementById('createTask').style.width == "80%" || document.getElementById('createTask').style.width == ""){
            anime({
                targets: '#createTask',
                width: ['80%', '100%'],
                duration: 200,
                easing: 'easeOutExpo'
            });
            document.getElementById('ellipseDivCreate').style.display = "flex";
            document.getElementById('taskleftDivCreate').style.display = "flex";
        }
        else {}
        
}

function createBlur() {
}

dropdownCreateToggle = false;
dropdownCreateToggleCall = false;

function ellipseClick() {
    if (dropdownCreateToggle == false) {
        document.getElementById('ellipseDropdown').style.display = "flex";
        document.getElementsByClassName('ellipseChosenCreate')[0].style.display = "none";
        document.getElementById('ellipseDivCreate').style.marginLeft = "10px"
        document.getElementById('ellipseDivCreate').style.padding = "2px"
        dropdownCreateToggle = true;
    }
    else if (dropdownCreateToggleCall == true) {
        dropdownCreateToggle = false;
    }
}

function ellipseClickRedCreate() {
    document.getElementById('ellipseDropdown').style.display = "none";
    document.getElementsByClassName('ellipseChosenCreate')[0].style.display = "flex";
    document.getElementById('ellipseDivCreate').style.marginLeft = "0px"
    document.getElementById('ellipseDivCreate').style.padding = "0px"
    document.getElementsByClassName('ellipseChosenCreate')[0].style.backgroundColor = "#BE0F0F";
    dropdownCreateToggleCall = true;
}

function ellipseClickBlueCreate() {
    document.getElementById('ellipseDropdown').style.display = "none";
    document.getElementsByClassName('ellipseChosenCreate')[0].style.display = "flex";
    document.getElementById('ellipseDivCreate').style.marginLeft = "0px"
    document.getElementById('ellipseDivCreate').style.padding = "0px"
    document.getElementsByClassName('ellipseChosenCreate')[0].style.backgroundColor = "#1252B0";
    dropdownCreateToggleCall = true;
}

function ellipseClickYellowCreate() {
    document.getElementById('ellipseDropdown').style.display = "none";
    document.getElementsByClassName('ellipseChosenCreate')[0].style.display = "flex";
    document.getElementById('ellipseDivCreate').style.marginLeft = "0px"
    document.getElementById('ellipseDivCreate').style.padding = "0px"
    document.getElementsByClassName('ellipseChosenCreate')[0].style.backgroundColor = "#E0A817";
    dropdownCreateToggleCall = true;
}

blueValue = 0;
yellowValue = 0;
redValue = 0;

function addBlue() {
    ++blueValue;
}


function createTask() {
    //Encontrar espaço disponível
    let SpaceAvailable = 42; //42 is random;
    SpaceAvailable = searchSpace(ArrayTasks);
    let taskName;
    let taskPriority;
    let taskDuration;
    ArrayTasks[SpaceAvailable][0] = true;
    taskName = document.getElementById('taskInput').value;
    ArrayTasks[SpaceAvailable][1] = String(taskName);


    let slctdPriority = window.getComputedStyle(document.getElementsByClassName('ellipseChosenCreate')[0], null).getPropertyValue('background-color');

    //Prioridade da Task
    if (slctdPriority == "rgb(18, 82, 176)") //Blue
    {
        taskPriority = 0;  
        addBlue();

    }
    else if (slctdPriority == "rgb(190, 15, 15)") //Red
    {
        taskPriority = 2;
        ++redValue;
    }
    else if (slctdPriority == "rgb(224, 168, 23)") //Yellow
    {
        taskPriority = 1;
        ++yellowValue;
    }
    else{}

    ArrayTasks[SpaceAvailable][7] = taskPriority;

    function searchSpace(ArrayTasks) {
        let found = false;
        let index = 0;
        for (let i = 0; i <= 1000; i++) {
            if (ArrayTasks[i][0] == false) {
                index = i;
                found = true;
                ArrayTasks[i][0] = found;
                return i;
            }
            else {
                continue;
            }
        }
    }

    createTaskElement(taskName, taskDuration, SpaceAvailable, taskPriority);
    headerUpdater();
    ++taskCache;

}

//Criar task no display
function createTaskElement(taskName, taskDuration, SpaceAvailable, taskPriority){
    var tasksBody = document.getElementsByClassName('tasksBody')[0]
    var task = document.createElement("div");
    task.className = "task";
    task.id = String(SpaceAvailable);
    tasksBody.appendChild(task);
    var ellipseDiv = document.createElement("div");
    ellipseDiv.className = "ellipseDiv";
    task.appendChild(ellipseDiv);
    var ellipseChosen = document.createElement("div");
    ellipseChosen.id = "ellipseChosen" + String(SpaceAvailable);
    ellipseDiv.appendChild(ellipseChosen);

    if (taskPriority == 0) {
        ellipseChosen.setAttribute('style', 'position: static;border-radius: 20px; width: 15px; height: 15px; left: 20px; top: 20px; background: #1252B0;');
    }
    else if (taskPriority == 1) {
        ellipseChosen.setAttribute('style', 'position: static;border-radius: 20px; width: 15px; height: 15px; left: 20px; top: 20px; background: #E0A817;');
    }
    else if (taskPriority == 2) {
        ellipseChosen.setAttribute('style', 'position: static;border-radius: 20px; width: 15px; height: 15px; left: 20px; top: 20px; background: #BE0F0F;');
    }

    
    
    var tasknameDiv = document.createElement("div");
    tasknameDiv.className = "tasknameDiv";
    task.appendChild(tasknameDiv);
    tasknameDiv.textContent = String(taskName);
    var taskleftDiv = document.createElement("div");
    taskleftDiv.className = "taskleftDiv";
    task.appendChild(taskleftDiv);
    var line = document.createElement("div");
    line.className = "line"
    taskleftDiv.appendChild(line);
    var durationDiv = document.createElement("div");
    durationDiv.className = "durationDiv";
    taskleftDiv.appendChild(durationDiv);
    var durationValue = document.createElement("div");
    durationValue.className = "durationValue";
    taskleftDiv.appendChild(durationValue);
    durationValue.textContent = "00:30";

    document.getElementById('taskInput').value = "";

    UpdateLinha();
    
}

//Data atual
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = dd + '/' + mm + '/' + yyyy;
document.getElementById('dateDiv').innerText = today;

//Horário atual
function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
var now = new Date();
var hours = String(addZero(now.getHours()));
var mins = String(addZero(now.getMinutes()));
document.getElementById('timeDiv').innerText = hours + ":" + mins;

//criar umas porra
//var tag = document.createElement("p");
//var text = document.createTextNode("Tutorix is the best e-learning platform");
//tag.appendChild(text);
//var element = document.getElementById("header-center");
//element.appendChild(tag);

//Linha de Tasks
const LineLength = 300;

const sumValue = parseInt(blueValue) + parseInt(yellowValue) + parseInt(redValue);

function UpdateLinha() {
    document.getElementById('grey-line').style.width = "0%"
    const sumValue = parseInt(blueValue) + parseInt(yellowValue) + parseInt(redValue);
    const bluePercent = parseInt(blueValue) / sumValue;
    const yellowPercent = parseInt(yellowValue) / sumValue;
    const redPercent = parseInt(redValue) / sumValue;
    document.getElementById('blue-line').style.width = (LineLength * bluePercent) + "%";
    document.getElementById('yellow-line').style.width = (LineLength * yellowPercent) + "%";;
    document.getElementById('red-line').style.width = (LineLength * redPercent) + "%";;
}

UpdateNone();

function UpdateNone() {
    if (taskCacheEmpty == true) {
        document.getElementById('grey-line').style.width = "100%"
    }
}
