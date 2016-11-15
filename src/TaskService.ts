class TaskService {
    observerList: ObserverWithType[];
    taskList: Task[];
    task: Task;

    public constructor() {
        this.observerList = new Array();
        this.taskList = new Array();
        this.task = new Task("01", "Task01", "Go to NPC_2", TaskStatus.ACCEPTABLE, "npc_0", "npc_1");
        this.taskList.push(this.task);
    }

    addObserver(observer: Observer, type: string): void {
        this.observerList.push(new ObserverWithType(observer, type));
    }

    accept(id: string): number {
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == id) {
                console.log("Find Task: " + this.taskList[i].id);
                this.taskList[i].status = TaskStatus.CAN_SUBMIT;
                this.notifyNPC(this.taskList[i]);
                return ErrorCode.SUCCESS;

            } else if (i == this.taskList.length - 1) {
                return ErrorCode.ERROR_TASK;
            }
        }
    }

   	finish(id: string): number {
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == id) {
                this.taskList[i].status = TaskStatus.SUBMITTED;
                this.notifyNPC(this.taskList[i]);
                return ErrorCode.SUCCESS;

            } else if (i == this.taskList.length - 1) {
                return ErrorCode.ERROR_TASK;
            }
        }

    }

    getTaskByCustomRole(rule: Function, Id: string): Task {
        return rule(this.taskList, Id);

    }

    notifyTaskPanel(task: Task) {
        for (var i = 0; i < this.observerList.length; i++) {
            if (this.observerList[i].type == "TaskPanel") {
                this.observerList[i].observer.onChange(task);
            }
        }
    }

    notifyNPC(task: Task) {
        for (var i = 0; i < this.observerList.length; i++) {
            console.log("Type:" + this.observerList[i].type);
            if (this.observerList[i].type == "NPC") {
                console.log("Find NPC");
                this.observerList[i].observer.onChange(task);
            }
        }
    }
}

class ObserverWithType {
    observer: Observer;
    type: string;

    constructor(observer: Observer, type: string) {
        this.observer = observer;
        this.type = type;
    }

}

enum ErrorCode {
    SUCCESS = 0,
    ERROR_TASK = 1,
}