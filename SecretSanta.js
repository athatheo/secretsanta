
var SecretSanta = function () {
    this.submitter = []
    this.names = ['Tatinator', 'vostidi', 'protagonistis', 'bobos'];
    this.askers = ['soulta1', 'boston2', 'wattwil3', 'megalexandros4','ichwill5','elcapitano6']
};

SecretSanta.prototype.add = function ( name ) {
    if (this.askers.includes(name)) {
        this.submitter.push( name );
    }
};
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

SecretSanta.prototype.generate = function () {
    seed = 'hello'
    Math.seedrandom(seed);
    console.log(getRandomInt(6)); 
    console.log(getRandomInt(6)); 

    var pairings = Object.create( null );
    var candidatePairings = Object.create( null );

    var flag = true;
    while (flag) {

        if (flag){
            seed = seed + 1
            Math.seedrandom(seed)
        }
    }

};
