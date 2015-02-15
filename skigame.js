var Skier = function(n,a){
	this.name = n;
	this.ability = a;

    this.performance = function(){
		return this.ability * (Math.random() * 10);
	}

    this.runOutcome = function() {
		return "the judges gave " + this.name + " a score of " + this.performance();
	}
}
var Eric = new Skier("Eric", 8),
	Candide = new Skier("Candide",9),
	Tanner = new Skier("Tanner", 8.5);


	console.log(Eric.runOutcome());
	console.log(Candide.runOutcome());
	console.log(Tanner.runOutcome());
