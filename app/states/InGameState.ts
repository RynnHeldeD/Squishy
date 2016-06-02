export class InGameState extends Phaser.State {
	game: Phaser.Game;
	graphics: Phaser.Graphics;
	backgroundColor: number = 0xFAFBE3;
	groundColor: number = 0x9FD6D2;
	
	constructor(game: Phaser.Game) {
		super();
		this.game = game;
	}
	
	preload() {
		this.game.load.image('blob', 'app/assets/images/blob.png');
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
		this.game.add.sprite(50, 370, 'blob');
	}
	
	update() {
		
	}
}