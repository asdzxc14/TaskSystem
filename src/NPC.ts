var npcImage = {
    npc_0: "NPC1_png",
    npc_1: "NPC2_png",
    ACCEPTABLEimage: "ACCEPTABLE_png",
    DURINGimage: "DURING_png",
    CCAN_SUBMITimage: "CAN_SUBMIT_png",
}

class NPC implements Observer {
    public npcStage: egret.DisplayObjectContainer;

    taskService: TaskService;

    task: Task;

    npcId: string;
    npcName: string;

    emoji: egret.Bitmap;
    tileSize: number = 64;
    emojiX: number = 0;
    emojiY: number = 64;

    npcStageShape: egret.Shape;
    npcStageX: number;
    npcStageY: number;
    npcStageWidth = 64;
    npcStageHeight = 128;



    public constructor(npcId: string, npcName: string) {
        this.npcStage = new egret.DisplayObjectContainer();
        this.npcStageShape = new egret.Shape();
        this.emoji = new egret.Bitmap();
        this.npcId = npcId;
        this.npcName = npcName;
    }



    setemoji() {
        this.emoji.texture = RES.getRes(npcImage.npc_0);
        this.emoji.x = this.emojiX;
        this.emoji.y = this.emojiY;
        this.emoji.width = this.tileSize;
        this.emoji.height = this.tileSize;
    }

    setNpc(npcX: number, npcY: number, npcColor: number) {
        this.npcStageX = npcX;
        this.npcStageY = npcY;


        this.setemoji();
    }

    drawNpcShape() {

        this.npcStageShape.graphics.drawRect(0, 0, this.npcStageWidth, this.npcStageHeight);
        this.npcStageShape.graphics.endFill();

    }

    drawNpc() {
        this.drawNpcShape();

        this.npcStage.x = this.npcStageX;
        this.npcStage.y = this.npcStageY;
        this.npcStage.width = this.npcStageWidth;
        this.npcStage.height = this.npcStageHeight;

        this.npcStage.addChild(this.npcStageShape);
        this.npcStage.addChild(this.emoji);
        this.emoji.touchEnabled = true;

    }



    onChange(task: Task) {
        this.task = task;
    }


}