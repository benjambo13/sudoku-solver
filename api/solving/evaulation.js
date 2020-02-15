function evaluation(solutions)
{
    var ratings = [];

    //Calculate the number of clashes in column and subgrid
    solutions.forEach(sudoku => {
        var columnClash = getColumnClash(sudoku);
        var subgridClash = getSubgridClash(sudoku);
        ratings.push(columnClash + subgridClash);
    });

    var paired = [];

    for (var i = 0; i < solutions.length; i++)
    {
        paired.push([solutions[i], ratings[i]]);
    }

    var sortedPairs = paired.sort((a,b) => {return a[1] - b[1];});

    return sortedPairs;
}

function getColumnClash(sudoku)
{
    var count = 0;

    //Get each column into its own list
    for (var colNum = 0; colNum < 9; colNum++)
    {
        var helper = colNum;
        var column = [];
        for (var i = 0; i < 9; i++)
        {
            column.push(sudoku[helper]);
            helper += 9;
        }

        //Set should be 9 for correct column
        var set = new Set(column);
        count += 9 - set.size;
    }

    return count;
}

function getSubgridClash(sudoku)
{
    var count = 0;

    var top = sudoku.slice(0,27);
    var mid = sudoku.slice(27,54);
    var bot = sudoku.slice(54);

    var subgridCount = 1;

    for (var i = 0; i < 9; i++)
    {
        if (i < 3)
            var subgrid = getSubgrid(top, subgridCount)
        else if (i < 6)
            var subgrid = getSubgrid(mid, subgridCount)
        else
            var subgrid = getSubgrid(bot, subgridCount)

        var set = new Set(subgrid);
        count += 9 - set.size;

        if (subgridCount === 3)
            subgridCount = 1
        else
            subgridCount += 1
    }

    return count;
}

function getSubgrid(pool, number)
{
    if (number === 1)
        var subgrid = pool.slice(0,3).concat(pool.slice(9,12)).concat(pool.slice(18,21))
    else if (number === 2)
        var subgrid = pool.slice(3,6).concat(pool.slice(12,15)).concat(pool.slice(21,24))
    else if (number === 3)
        var subgrid = pool.slice(6,9).concat(pool.slice(15,18)).concat(pool.slice(24,27))

    return subgrid
}

module.exports = evaluation;