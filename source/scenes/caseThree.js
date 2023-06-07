class CaseThree extends Phaser.Scene {
    constructor() {
        super("caseThree");
    }

    // please work 1

    preload(){
        this.load.image('thirdPortrait', 'assets/thirdPortrait.png');
        this.load.image('backButton', 'assets/backButton.png');
        this.load.image('glitchOne', 'assets/glitchOne.png');
        this.load.image('glitchTwo', 'assets/glitchTwo.png');
    }

    create() {

        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'thirdPortrait').setOrigin(0,0);

        //let typeP1 = Math.floor((Math.random() * 3));

        let textConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#FFFFFF',
            color: '#FFFFFF',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
             },
            fixedWidth: 100
        }

        

        //this.num = Math.round(7.27564576743546433475);
        //console.log(this.num);

        //this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        //this.scoreRight = this.add.text(460, borderUISize + borderPadding*2, this.p2Score, scoreConfig);

        var back = this.add.sprite(250, 820, 'backButton').setInteractive();

        back.on('pointerdown', function (pointer) {

          this.scene.switch('menu');

        }, this);

        var glitch = this.add.sprite(510, 195, 'glitchOne').setInteractive();
        glitch.setAlpha(0);

        this.time.addEvent({
            delay: 1500, 
            callback: () => glitch.setAlpha(1),
            callbackScope: this, 
            loop: true 
        });

        this.time.addEvent({
            delay: 1700, 
            callback: () => glitch.setTexture('glitchTwo'),
            callbackScope: this, 
            loop: true 
        });

        this.time.addEvent({
            delay: 1900, 
            callback: () => glitch.setTexture('glitchOne'),
            callbackScope: this, 
            loop: true 
        });

        this.time.addEvent({
            delay: 2100, 
            callback: () => glitch.setAlpha(0),
            callbackScope: this, 
            loop: true 
        });

        glitch.on('pointerdown', function (pointer) {

            if(ageFound == false){
                ageQuestion = true;
                answered = answered + 1;
                this.scene.start('questions');
              }
              ageFound = true;

        }, this);
        
    }

    update() {
        
       
        if(this.keyA.isDown) {
           
        }

    }

}