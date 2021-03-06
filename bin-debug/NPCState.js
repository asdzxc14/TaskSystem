var TaskNoneState = (function () {
    function TaskNoneState(npc) {
        this.npc = npc;
    }
    var d = __define,c=TaskNoneState,p=c.prototype;
    p.onEnter = function () {
    };
    p.onExit = function () {
    };
    return TaskNoneState;
}());
egret.registerClass(TaskNoneState,'TaskNoneState',["State"]);
var TaskAvilableState = (function () {
    function TaskAvilableState(npc) {
        this.taskSignX = 200;
        this.taskSignY = 336;
        this.taskSignWidth = 64;
        this.taskSignHeight = 64;
        this.npc = npc;
        this.taskSign = new egret.Bitmap();
    }
    var d = __define,c=TaskAvilableState,p=c.prototype;
    p.onEnter = function () {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Avilable State");
    };
    p.onExit = function () {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Avilable State");
    };
    p.drawTaskSign = function () {
        this.taskSign.x = this.taskSignX;
        this.taskSign.y = this.taskSignY;
        this.taskSign.width = this.taskSignWidth;
        this.taskSign.height = this.taskSignHeight;
        this.taskSign.texture = RES.getRes(npcImage.ACCEPTABLEimage);
    };
    return TaskAvilableState;
}());
egret.registerClass(TaskAvilableState,'TaskAvilableState',["State"]);
var TaskDuringState = (function () {
    function TaskDuringState(npc) {
        this.taskSighX = 200;
        this.taskSighY = 336;
        this.taskSighWidth = 64;
        this.taskSighHeight = 64;
        this.npc = npc;
        this.taskSign = new egret.Bitmap();
    }
    var d = __define,c=TaskDuringState,p=c.prototype;
    p.onEnter = function () {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Avilable State");
    };
    p.onExit = function () {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Avilable State");
    };
    p.drawTaskSign = function () {
        this.taskSign.x = this.taskSighX;
        this.taskSign.y = this.taskSighY;
        this.taskSign.width = this.taskSighWidth;
        this.taskSign.height = this.taskSighHeight;
        this.taskSign.texture = RES.getRes(npcImage.DURINGimage);
    };
    return TaskDuringState;
}());
egret.registerClass(TaskDuringState,'TaskDuringState',["State"]);
var TaskCanSubmitState = (function () {
    function TaskCanSubmitState(npc) {
        this.taskSignX = 200;
        this.taskSignY = 336;
        this.taskSignWidth = 64;
        this.taskSignHeight = 64;
        this.npc = npc;
        this.taskSign = new egret.Bitmap();
    }
    var d = __define,c=TaskCanSubmitState,p=c.prototype;
    p.onEnter = function () {
        this.drawTaskSign();
        this.npc.npcStage.addChild(this.taskSign);
        console.log("Enter Task Submit State");
    };
    p.onExit = function () {
        this.npc.npcStage.removeChild(this.taskSign);
        console.log("Exit Task Submit State");
    };
    p.drawTaskSign = function () {
        this.taskSign.x = this.taskSignX;
        this.taskSign.y = this.taskSignY;
        this.taskSign.width = this.taskSignWidth;
        this.taskSign.height = this.taskSignHeight;
        this.taskSign.texture = RES.getRes(npcImage.CAN_SUBMITimage);
    };
    return TaskCanSubmitState;
}());
egret.registerClass(TaskCanSubmitState,'TaskCanSubmitState',["State"]);
//# sourceMappingURL=NPCState.js.map