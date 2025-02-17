
var SecretSanta = function () {
    this.submitter = []
    this.seed = 'hello'
    this.names = ['tatinator', 'vostidi', 'protagonistis', 'bobos', 'mrichwill', 'akis kripakis'];
    this.askers = ['soulta1', 'boston2', 'wattwil3', 'megalexandros4', 'ichwill5', 'elcapitano6']
};

SecretSanta.prototype.add = function (name) {
    if (this.askers.includes(name)) {
        this.submitter.push(name);
    }
};


SecretSanta.prototype.generate = function () {

    var pairings = Object.create(null);
    var candidatePairings = Object.create(null);

    this.names.forEach(function (name) {


        // if ( Object.prototype.hasOwnProperty.call( this.enforced, name ) ) {

        //     var enforced = this.enforced[ name ];

        //     if ( this.names.indexOf( enforced ) === -1 )
        //         throw new Error( name + ' is paired with ' + enforced + ', which hasn\'t been declared as a possible pairing' );

        //     Object.keys( pairings ).forEach( function ( name ) {

        //         if ( pairings[ name ] === enforced ) {
        //             throw new Error( 'Per your rules, multiple persons are paired with ' + enforced );
        //         }

        //     } );

        //     candidatePairings[ name ] = [ this.enforced[ name ] ];

        // } else {

        var candidates = _.difference(this.names, [name]);

        //     if ( Object.prototype.hasOwnProperty.call( this.blacklists, name ) )
        //         candidates = _.difference( candidates, this.blacklists[ name ] );
        candidatePairings[name] = candidates;

        // }

    }, this);
    var getRandomInt = function(max, seed) {
        Math.seedrandom(seed+42)
        
         rndInt = Math.floor(Math.random() * max)
         return rndInt
    }
    var findNextGifter = function () {

        var names = Object.keys(candidatePairings);

        var minCandidateCount = _.min(names.map(function (name) { return candidatePairings[name].length; }));
        var potentialGifters = names.filter(function (name) { return candidatePairings[name].length === minCandidateCount; });
        return potentialGifters[getRandomInt(potentialGifters.length, potentialGifters)]

    };

    while (Object.keys(candidatePairings).length > 0) {

        var name = findNextGifter();
        if (candidatePairings[name].length === 0)
            throw new Error('We haven\'t been able to find a match for ' + name + '! Press "Generate" to try again and, if it still doesn\'t work, try removing some exclusions from your rules. Sorry for the inconvenience!');
        var pairing = candidatePairings[name][getRandomInt(candidatePairings[name].length, candidatePairings[name])]//_.sample(candidatePairings[name]);
        delete candidatePairings[name];

        Object.keys(candidatePairings).forEach(function (name) {
            candidatePairings[name] = _.without(candidatePairings[name], pairing);
        });

        pairings[name] = pairing;

    }
    prev = []
    for (var key in pairings) {
        if (this.names.indexOf(key) == this.names.indexOf(pairings[key])) {
            console.log("FALSE");
            console.log(key)
            console.log(pairings[key])
        }
        if (prev.includes(pairings[key])) {
            console.log("previously in");
        }
        prev.push(pairings[key])
    }
    x = {}
    key = this.names[this.askers.indexOf(this.submitter[0])]
    value = pairings[this.names[this.askers.indexOf(this.submitter[0])]]
    x[key] = value
    return x;

};
