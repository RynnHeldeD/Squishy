import {Creature} from './app/objects/Creature';
import {InGameState} from './app/states/InGameState';

class Squishy {
	game: Phaser.Game;
	
	constructor() {
		this.game = new Phaser.Game(960, 544, Phaser.AUTO, 'phaser-container', {
			preload: this.preload,
			create: this.create,
			update: this.update
		});
	}
	
	preload() {

	}

	create() {
		this.game.state.add("InGameState", InGameState, true);
	}

	update() {
		
	}
}

var game = new Squishy();