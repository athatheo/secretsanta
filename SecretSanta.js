
var SecretSanta = function () {
    this.submitter = []
    this.seed = 'hello'
    this.names = ['Tatinator', 'vostidi', 'protagonistis', 'bobos'];
    this.askers = ['soulta1', 'boston2', 'wattwil3', 'megalexandros4','ichwill5','elcapitano6']
};

SecretSanta.prototype.add = function ( name ) {
    if (this.askers.includes(name)) {
        this.submitter.push( name );
    }
};
function getRandomInt(max) {
    seed = this.seed
    Math.seedrandom(seed);
    return Math.floor(Math.random() * max);
  }

SecretSanta.prototype.generate = function () {
    
    console.log(getRandomInt(6)); 
    console.log(getRandomInt(6)); 

    var pairings = Object.create( null );
    var candidatePairings = Object.create( null );

    for (const asker in this.askers) {

    }

};
