class Questions extends Phaser.Scene {
    constructor() {
        super("questions");
    }

    // please work 1

    preload(){
        this.load.image('blackBackground', 'assets/blackBackground.png');
        this.load.image('whiteBackground', 'assets/whiteBackground.png');
        this.load.image('tinaButton', 'assets/tinaButton.png');
        this.load.image('danicaButton', 'assets/danicaButton.png');
        this.load.image('eighteenButton', 'assets/eighteenButton.png');
        this.load.image('thirdyTwoButton', 'assets/thirdyTwoButton.png');
        this.load.image('minButton', 'assets/minButton.png');
        this.load.image('instantlyButton', 'assets/instantlyButton.png');
        this.load.image('trophyButton', 'assets/trophyButton.png');
        this.load.image('pictureButton', 'assets/pictureButton.png');
        this.load.image('artistButton', 'assets/artistButton.png');
        this.load.image('actressButton', 'assets/actressButton.png');
        this.load.image('unemployedButton', 'assets/unemployedButton.png');
        this.load.image('copButton', 'assets/copButton.png');
        this.load.image('notKnowButton', 'assets/notKnowButton.png');
        this.load.image('friendButton', 'assets/friendButton.png');
        this.load.image('deservedButton', 'assets/deservedButton.png');
        this.load.image('justiceButton', 'assets/justiceButton.png');
    }

    create() {

        this.keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        this.bg = this.add.tileSprite(0,0, game.config.width, game.config.height, 'blackBackground').setOrigin(0,0);

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

        this.query = this.add.text(840, 465, '', { font: '50px Futura', fill: '#FFFFFF' }).setOrigin(0.5);
        this.flash = this.add.sprite(840, 465, 'whiteBackground');
        this.flash.setAlpha(0);

        //this.num = Math.round(7.27564576743546433475);
        //console.log(this.num);

        //this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.p1Score, scoreConfig);
        //this.scoreRight = this.add.text(460, borderUISize + borderPadding*2, this.p2Score, scoreConfig);

        if(daughterQuestion == true){
            this.query.setText('What was her name?');
            var tina = this.add.sprite(600, 600, 'tinaButton').setInteractive();
            var danica = this.add.sprite(1080, 600, 'danicaButton').setInteractive();

            tina.on('pointerdown', function (pointer) {

                this.query.setText('Thats right. Her name is Tina.');
                tina.destroy();
                danica.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He got her to lie about her name at the trial.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('He always liked girls with elegant names.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('He were rubbing it in that he had lost her to them.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('She has gone by that false name since.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => daughterQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            danica.on('pointerdown', function (pointer) {

                this.query.setText('No, that name is a lie.');
                tina.destroy();
                danica.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('Her real name in Tina.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('But he prefered girls with elegant names'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('So he made her change it and say it was at the trial.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('She has gone by that false name since.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => daughterQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(ageQuestion == true){
            this.query.setText('How old was he, really?');
            var eighteen = this.add.sprite(600, 600, 'eighteenButton').setInteractive();
            var thirdyTwo = this.add.sprite(1080, 600, 'thirdyTwoButton').setInteractive();

            eighteen.on('pointerdown', function (pointer) {

                this.query.setText('Thats a lie. He was not really a teenager.');
                eighteen.destroy();
                thirdyTwo.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He was actually 32 years old.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('Way too old for her. And he was a playboy.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('But he went for her, because he liked his girls young.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('Just like his dad.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => agebQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            thirdyTwo.on('pointerdown', function (pointer) {

                this.query.setText('Yes, he was really that old.');
                eighteen.destroy();
                thirdyTwo.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('But he liked his grils young. Very young.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('As did the real killer.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('So the boy was killed, so the killer could have her.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('All to himself, from the boy, and from Thomas.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => ageQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(deathTimeQuestion == true){
            this.query.setText('How long did it take for him to die?');
            var instantly = this.add.sprite(600, 600, 'instantlyButton').setInteractive();
            var min = this.add.sprite(1080, 600, 'minButton').setInteractive();

            instantly.on('pointerdown', function (pointer) {

                this.query.setText('Thats a lie. He did have a job.');
                instantly.destroy();
                min.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He was a police officer. He never was a security guard.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('He never lost his job or struggled with money.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('He had gone to visit a fellow officer that day.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He was shocked to find the window smashed and his friend dead.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => deathTimeQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            min.on('pointerdown', function (pointer) {

                this.query.setText('Yes, he was a police officer.');
                instantly.destroy();
                min.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He never lost his job, nor was he ever security guard.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('That part was a lie to make him look like a criminal.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('He had gone to visit a fellow officer that day.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He was shocked to find the window smashed and his friend dead.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => deathTimeQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(itemQuestion == true){
            this.query.setText('What was on his desk before he left?');
            var pictureFam = this.add.sprite(600, 600, 'pictureButton').setInteractive();
            var trophy = this.add.sprite(1080, 600, 'trophyButton').setInteractive();

            pictureFam.on('pointerdown', function (pointer) {

                this.query.setText('Yes, a picture of Thomas and his daughter.');
                pictureFam.destroy();
                trophy.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('Because that was his desk.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('He looked at that picture to think of his daughter.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('The victim was a rookie and new to town.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('The killer set up the scene to make it look like it was the victiems.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => itemQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            trophy.on('pointerdown', function (pointer) {

                this.query.setText('No, the trophy was a fake.');
                pictureFam.destroy();
                trophy.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('As was half on the stuff on the desk.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('The killer put the body and stuff on it to frame Thomas.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('The desk really belonged to Thomas, thats why his fingerprints were there..'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He was a cop, he already had guns, he did not take from the armory.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => itemQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(desireQuestion == true){
            this.query.setText('What was her life long dream, that ended after the story?');
            var artist = this.add.sprite(600, 600, 'artistButton').setInteractive();
            var actress = this.add.sprite(1080, 600, 'actressButton').setInteractive();

            artist.on('pointerdown', function (pointer) {

                this.query.setText('Yes, she really wanted to be and artist.');
                artist.destroy();
                actress.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('Her father and that teacher supported her.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('The teacher taught art, but that was lied about too.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('The killer got the girl to on his side.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('Ever since the trial, she says she wants to be an actress.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => desireQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            actress.on('pointerdown', function (pointer) {

                this.query.setText('No, she never wanted to act.');
                artist.destroy();
                actress.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('Until the killer got close to her.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('He used the fake evidence to convince her that her dad was guilty.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('She was heartbroken and became dependant on him.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He had plans for how she would act.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => desireQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(jobQuestion == true){
            this.query.setText('What was his job?');
            var unemployed = this.add.sprite(600, 600, 'unemployedButton').setInteractive();
            var cop = this.add.sprite(1080, 600, 'copButton').setInteractive();

            unemployed.on('pointerdown', function (pointer) {

                this.query.setText('Thats a lie. He did have a job.');
                unemployed.destroy();
                cop.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He was a police officer. He never was a security guard.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('He never lost his job or struggled with money.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('He had gone to visit a fellow officer that day.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He was shocked to find the window smashed and his friend dead.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => jobQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            cop.on('pointerdown', function (pointer) {

                this.query.setText('Yes, hes was a police officer.');
                unemployed.destroy();
                cop.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He never lost his job, nor was he ever security guard.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('That part was a lie to make him look like a criminal.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('He had gone to visit a fellow officer that day.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He was shocked to find the window smashed and his friend dead.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => jobQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(friendQuestion == true){
            this.query.setText('How did he know Mr. Pooltem?');
            var friend = this.add.sprite(600, 600, 'friendButton').setInteractive();
            var notKnow = this.add.sprite(1080, 600, 'notKnowButton').setInteractive();

            friend.on('pointerdown', function (pointer) {

                this.query.setText('Yes, they first met in high school.');
                friend.destroy();
                notKnow.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('They became friends, and would talk of their goals.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('But Thomas did notive how he viewed girls.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('And learned of how he would claim and use them.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('And Pooltem had his daughter in the end.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => friendQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            notKnow.on('pointerdown', function (pointer) {

                this.query.setText('No. The truth is ');
                friend.destroy();
                notKnow.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He knew him since high school.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('But the daughter only saw her boyfriends dad.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('And the fake evidence he showed her.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He turned her against Thomas, and claimed her for himself.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => friendQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(sayingQuestion == true){
            this.query.setText('What was his ideal did he believe in?');
            var deserved = this.add.sprite(600, 600, 'deservedButton').setInteractive();
            var justice = this.add.sprite(1080, 600, 'justiceButton').setInteractive();

            deserved.on('pointerdown', function (pointer) {

                this.query.setText('Its the one part of the story thats true.');
                deserved.destroy();
                justice.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('He became a cop to give crooks what they deserved.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('And when he died, he saw the real killer.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('Laughing under his breath, knowing he took his daughter.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He swore the killer would get what he deserved.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => sayingQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });

            }, this);

            justice.on('pointerdown', function (pointer) {

                this.query.setText('No, not justice like that.');
                deserved.destroy();
                justice.destroy();
                this.time.addEvent({
                    delay: 2500, 
                    callback: () => this.query.setText('In truth, he sought to punish the guilty.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 5000, 
                    callback: () => this.query.setText('To make them pay for their crimes, in full.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 7500, 
                    callback: () => this.query.setText('So when the killer ruined his life.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 10000, 
                    callback: () => this.query.setText('He swore to punish him.'),
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12500, 
                    callback: () => sayingQuestion = false,
                    callbackScope: this, 
                });
                this.time.addEvent({
                    delay: 12501, 
                    callback: () => this.scene.start('menu'),
                    callbackScope: this, 
                });
            }, this);
        }

        if(picture == true){
            this.query.setText('You have given a lot of evidence');
            this.time.addEvent({
                delay: 2500, 
                callback: () => this.query.setText('But I need to be sure. I must be sure'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 5000, 
                callback: () => this.query.setText('There is one way to find out. I will do it'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 7500, 
                callback: () => this.query.setText('So please, hold still and do not blink'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 10000, 
                callback: () => this.flash.setAlpha(1),
                callback: () => this.query.setText(''),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 10100, 
                callback: () => this.flash.setAlpha(0.8),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 10200, 
                callback: () => this.flash.setAlpha(0.6),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 10300, 
                callback: () => this.flash.setAlpha(0.4),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 10400, 
                callback: () => this.flash.setAlpha(0.2),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 10500, 
                callback: () => this.flash.setAlpha(0),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 12500, 
                callback: () => this.query.setText('You are not him'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 15000, 
                callback: () => this.query.setText('You are not the one who killed me and the others'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 17500, 
                callback: () => this.query.setText('You are not the one who took my daughter for himself'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 20000, 
                callback: () => this.query.setText('You are not Edward Pooltem'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 22500, 
                callback: () => this.query.setText('He is true killer'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 25000, 
                callback: () => this.query.setText('He killed those people, including his son'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 27500, 
                callback: () => this.query.setText('And framed me for it all'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 30000, 
                callback: () => this.query.setText('All just to claim my daughter'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 32500, 
                callback: () => this.query.setText('Last I saw her, he had complete control over her'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 35000, 
                callback: () => this.query.setText('That manipulator always liked young girls'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 37500, 
                callback: () => this.query.setText('Tina, if you ever read this'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 40000, 
                callback: () => this.query.setText('I am so sorry I failed to protect you'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 42500, 
                callback: () => this.query.setText('And hope you managed to get away from that monster'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 45000, 
                callback: () => this.query.setText('To who ever else found their way to this point'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 47500, 
                callback: () => this.query.setText('Do not worry, you are in no danger'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 50000, 
                callback: () => this.query.setText('Only Edward Pooltem must die'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 52500, 
                callback: () => this.query.setText('I made this sight in order to find him'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 55000, 
                callback: () => this.query.setText('When he reaches this point, I will know where is'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 57500, 
                callback: () => this.query.setText('And then I will go to him'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 60000, 
                callback: () => this.query.setText('And then I will kill him'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 62500, 
                callback: () => this.query.setText('He cannot escape me, no matter what'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 65000, 
                callback: () => this.query.setText('He can run for the rest of his life, I will find him'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 67500, 
                callback: () => this.query.setText('He can strike me down once more, I will always come back'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 70000, 
                callback: () => this.query.setText('How, you ask?'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 72500, 
                callback: () => this.query.setText('In life, my name was Thomas Revoir'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 75000, 
                callback: () => this.query.setText('Now, I am Tommy the Revenant'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 77500, 
                callback: () => this.query.setText('And revenants do not stop'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 80000, 
                callback: () => this.query.setText('They do not wavier, nor weaken, nor die'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 82500, 
                callback: () => this.query.setText('Not until they claim their revenge'),
                callbackScope: this, 
            });
            this.time.addEvent({
                delay: 85000, 
                callback: () => this.scene.start('menu'),
                callbackScope: this, 
            });

        }
        
    }

    update() {
        
        

        if(this.keyA.isDown) {
           
        }

    }

}