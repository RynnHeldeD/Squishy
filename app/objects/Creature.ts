export class Creature {
	name: string;
	
	constructor(name: string) {
		this.name = name;
	}
	
	introduce() {
		console.log('Hi ! I\'m ' + this.name + ' ! Nice to meet you :)');
	}
}