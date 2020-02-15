var getSolutions = require('./getSolutions');

function crossover(solutions, popSize)
{
    var newSolutions = [];
    solutions = shuffle(solutions);
    solutions = getSolutions(solutions);
    while (newSolutions.length !== popSize)
    {
        var newCurrentSolution = [];
        var parent1 = solutions[Math.floor(Math.random() * solutions.length)]
        var parent2 = solutions[Math.floor(Math.random() * solutions.length)]

        for (let row = 1; row < 10; row++)
        {
            var randNum = Math.random();
            if (randNum < 0.5)
                newCurrentSolution = newCurrentSolution.concat(parent1.slice((row - 1) * 9, row * 9));
            else
                newCurrentSolution = newCurrentSolution.concat(parent2.slice((row - 1) * 9, row * 9));
        }

        newSolutions.push(newCurrentSolution);
    }

    return newSolutions
}

function shuffle(arr)
{
    for (let i = arr.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

module.exports = crossover;