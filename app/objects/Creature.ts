import {GameObject} from './GameObject';

export class Creature extends GameObject {
	name: string;
	image: Phaser.Sprite;
	text: Phaser.Text;
	textTween: Phaser.Tween;
	message: string;
	talking: boolean;
	
	constructor(game: Phaser.Game, name: string) {
		super(game);
		this.name = name;
		this.message = 'Hi ! I\'m ' + this.name + ' ! Nice to meet you :)';
		this.talking = false;
	}
	
	introduce() {
		if (!this.talking) {
			this.text = this.game.add.text(80, 350, this.message, {});
			this.text.alpha = 0;
			this.game.add.tween(this.text).to({
				alpha: 1
			}, 250, Phaser.Easing.Exponential.Out, true);
			this.game.time.events.add(2000, this.removeText, this);
			this.talking = true;
		}
	}

	removeText() {
		this.textTween = this.game.add.tween(this.text).to({
			alpha: 0
		}, 250, Phaser.Easing.Exponential.Out, true);

		this.textTween.onComplete.add(this.destroyText, this);
	}

	destroyText() {
		this.text.destroy();
		this.talking = false;
	}

	preload() {
		this.game.load.image('blob', 'app/assets/images/blob.png');
	}

	create() {
		this.image = this.game.add.sprite(50, 370, 'blob');
		this.image.inputEnabled = true;
		this.image.events.onInputDown.add(this.introduce, this);
		
	}

	update() {
	}
}