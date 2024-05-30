var seconds = 0,
    min = 0,
    hr = 0;
let count = 0;
var interval;

const gettime = (num) => num.toString().padStart(2, "0");

function start() {
    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            min++;
            seconds = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
            seconds = 0;
        }
        document.getElementById('count').innerText = `${gettime(hr)}:${gettime(min)}:${gettime(seconds)}`;
    }, 100);
}

function stop() {
    clearInterval(interval);

    var table = document.getElementById("taskTable");
    var row = table.insertRow();

    var cell1 = row.insertCell(0);
    cell1.innerHTML = serialNumber++;

    var cell2 = row.insertCell(1);
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    cell2.innerHTML = taskText !== "" ? taskText : "No Task";

    var cell3 = row.insertCell(2);
    cell3.innerHTML = document.getElementById("count").innerText;

    taskInput.value = "";
}

function reset() {
    stop();
    seconds = 0;
    document.getElementById('count').innerText = "00:00:00";
}

var serialNumber = 1;

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var time = document.getElementById("count").innerText;
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var table = document.getElementById("taskTable");
        var row = table.insertRow();

        var cell1 = row.insertCell(0);
        cell1.innerHTML = serialNumber++;

        var cell2 = row.insertCell(1);
        cell2.innerHTML = taskText;

        var cell3 = row.insertCell(2);
        cell3.innerHTML = time;

        taskInput.value = "";
    }
}
