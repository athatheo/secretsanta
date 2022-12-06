
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

SecretSanta.prototype.generate = function () {
    seed = 'hello'
    Math.seedrandom(seed);
    console.log(Math.random()); 
    console.log(Math.random()); 

    var pairings = Object.create( null );
    var candidatePairings = Object.create( null );

    var flag = true;
    while (flag) {

        if (flag){
            seed = seed + 1
            Math.seedrandom(x)
        }
    }

    this.names.forEach( function ( name ) {            
        var candidates = _.difference( this.names, [ name ] );
        candidatePairings[ name ] = candidates;
    }, this );

    var findNextGifter = function () {

        var names = Object.keys( candidatePairings );

        var minCandidateCount = _.min( names.map( function ( name ) { return candidatePairings[ name ].length; } ) );
        var potentialGifters = names.filter( function ( name ) { return candidatePairings[ name ].length === minCandidateCount; } );

        return _.sample( potentialGifters );

    };

    while ( Object.keys( candidatePairings ).length > 0 ) {

        var name = findNextGifter();

        if ( candidatePairings[ name ].length === 0 )
            throw new Error('We haven\'t been able to find a match for ' + name + '! Press "Generate" to try again and, if it still doesn\'t work, try removing some exclusions from your rules. Sorry for the inconvenience!');

        var pairing = _.sample( candidatePairings[ name ] );
        delete candidatePairings[ name ];

        Object.keys( candidatePairings ).forEach( function ( name ) {
            candidatePairings[ name ] = _.without( candidatePairings[ name ], pairing );
        } );

        pairings[ name ] = pairing;

    }

    return pairings;

};
