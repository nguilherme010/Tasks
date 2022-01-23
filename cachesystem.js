let taskCache = 0;
let taskCacheEmpty = false;
TaskQntCache();

//Sistema de cache de qntd de tasks
function TaskQntCache() {
    for (let i = 0; i < ArrayTasks.length; i++) {
        if (ArrayTasks[i][0] == true) {
            ++TaskCache;
        }
        else {
            continue
        }
    }

    if (taskCache != 0) {
        taskCacheEmpty = false;
    }
    else {
        taskCacheEmpty = true;
    }
}
