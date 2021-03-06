var MockKillMonstorButton = (function () {
    function MockKillMonstorButton(stage, taskService) {
        this.buttonColor = 0xFF0000;
        this.buttonX = 350;
        this.buttonY = 600;
        this.buttonWidth = 80;
        this.buttonHeight = 70;
        this.buttonTextFieldText = "Kill!";
        this.buttonTextFieldX = this.buttonX + 15;
        this.buttonTextFieldY = this.buttonY + 20;
        this.buttonTextFieldWidth = 100;
        this.buttonTextFieldColor = 0xFFFFFF;
        this.monsterValue = 0;
        this.stage = stage;
        this.taskService = taskService;
        this.taskService.addObserver(this, "MockKillMonsterButton");
        this.panel = new egret.DisplayObjectContainer();
        this.button = new egret.DisplayObjectContainer();
        this.buttonBack = new egret.Shape();
        this.buttonTextField = new egret.TextField();
        this.stage.addChild(this.panel);
        this.drawPanel();
    }
    var d = __define,c=MockKillMonstorButton,p=c.prototype;
    p.drawButtonBack = function () {
        this.buttonBack.graphics.beginFill(this.buttonColor, 1);
        this.buttonBack.graphics.drawRect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeight);
        this.buttonBack.graphics.endFill();
    };
    p.setButtonText = function () {
        this.buttonTextField.text = this.buttonTextFieldText;
        this.buttonTextField.x = this.buttonTextFieldX;
        this.buttonTextField.y = this.buttonTextFieldY;
        this.buttonTextField.width = this.buttonTextFieldWidth;
        this.buttonTextField.bold = false;
        this.buttonTextField.textColor = this.buttonTextFieldColor;
    };
    p.drawButton = function () {
        this.drawButtonBack();
        this.setButtonText();
        this.button.addChild(this.buttonBack);
        this.button.addChild(this.buttonTextField);
    };
    p.drawPanel = function () {
        this.drawButton();
        this.panel.addChild(this.button);
        this.button.touchEnabled = true;
        this.button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    };
    p.onButtonClick = function (e) {
        switch (this.currentTaskStatus) {
            case 0:
            case 1:
                break;
            case 2:
                this.monsterValue++;
                console.log(this.monsterValue);
                if (this.monsterValue == 10) {
                    this.taskService.canSubmit(this.currentTaskId);
                }
                break;
            case 3:
                this.monsterValue = 0;
                break;
            case 4:
        }
    };
    p.onChange = function (task) {
        this.currentTaskId = task.id;
        this.currentTaskStatus = task.status;
    };
    return MockKillMonstorButton;
}());
egret.registerClass(MockKillMonstorButton,'MockKillMonstorButton');
//# sourceMappingURL=MockKillMonstorButton.js.map