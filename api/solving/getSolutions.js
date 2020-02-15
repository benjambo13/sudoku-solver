function getSolutions(paired)
{
    //Get all the solutions into a list
    solutions = [];
    paired.forEach(pair => {
        solutions.push(pair[0]);
    });
    return solutions;
}

module.exports = getSolutions;