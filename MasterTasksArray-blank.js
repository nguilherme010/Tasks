//ArrayTasks contém as tasks (arrays), que contém as seguintes variáveis:
    //[0] = Task Space being used (true/false)
    //[1] = Name Displayed (string)
    //[2] = Date created (string)
    //[3] = Task Date (string)
    //[4] = Task Duration (string)
    //[5] = Delete call has been made (true/false)
    //[6] = Index in actual display (string).
    //[7] = Task priority (0/1/2)(importante, circunstancial, urgente)
    //[8] = Task Index Array
    let ArrayTasks = [
        [false, "name displayed", "date created", "task date", "task duration", false, "index displayed", 0, 0],
    ];
    for (let index = 0; index < 1000; index++) {
        ArrayTasks.push([false, "name displayed", "date created", "task date", "task duration", false, "index displayed", 0, Number(index+1)])
    }