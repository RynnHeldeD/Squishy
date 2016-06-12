import {Creature} from 'app/objects/Creature';

export class InGameState extends Phaser.State {
	game: Phaser.Game;
	graphics: Phaser.Graphics;
	backgroundColor: number = 0xFAFBE3;
	groundColor: number = 0x9FD6D2;

	creature: Creature;
	
	constructor(game: Phaser.Game) {
		super();
		this.game = game;
		this.creature = new Creature(game, 'Squishy');
	}
	
	preload() {
		this.creature.preload();
	}
	
	create() {
		// Set background color
		this.game.stage.setBackgroundColor(this.backgroundColor);
		
		// Draw the ground
		this.graphics = this.game.add.graphics(0, 0);
		this.graphics.lineStyle(2, this.groundColor, 1);
		this.graphics.beginFill(this.groundColor, 1)
		this.graphics.drawRect(0, 500, 960, 44);
		this.graphics.endFill();
		
		// Draw a blob
		this.creature.create();
	}
	
	update() {
		this.creature.update();
	}
}