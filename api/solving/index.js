var populateRandom = require('./populateRandom');
var evaluation = require('./evaulation');
var getRatings = require('./getRatings');
var selectParents = require('./selectParents');
var crossover = require('./crossover');
var mutate = require('./mutate');

function solver(grid) {
    var popSize = 15000
    var restart = 0
    while (restart < 10)
    {
        //Randomly populate first generation
        var initialSolutions = populateRandom(grid, popSize);
        //Evaluate initial population using fitness function
        var pairedRatings = evaluation(initialSolutions);
        //Run until the sudoku has been solved or reached 100th generation
        var gen = 0
        while (getRatings(pairedRatings)[0] != 0 && gen < 50)
        {
            //Select parents for the next generation
            var parents = selectParents(pairedRatings);
            //Create offspring given parents
            var parentCrossover = crossover(parents, popSize);
            //Mutate offspring
            var mutated = mutate(parentCrossover, grid);
            //Evaluate population using fitness function
            pairedRatings = evaluation(mutated);

            gen += 1
        }

        if (pairedRatings[0][1] === 0)
            break
        else
            restart += 1
    }
    return pairedRatings[0];
}

module.exports = solver;