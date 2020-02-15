function populateRandom(grid, popSize)
{
    var initialSudokus = [];

    //Population size (recommended: 10000)
    for (var i = 0; i < popSize; i++)
    {
        //Copy the initial template
        var sudoku = [...grid];
        var randomSudoku = [];
        
        //For each row
        for (var j = 0; j < 9; j++)
        {
            var nums = ["1","2","3","4","5","6","7","8","9"];
            var row = sudoku.slice(0,9);

            //Remove numbers already in the row
            row.forEach(element => 
            {
                if (element != " "){
                    nums = nums.filter(num => {
                        return element !== num
                    })
                }
            })

            //Add numbers from the nums array into the gaps of the row array
            for (var index = 0; index < 9; index++)
            {
                if (row[index] === " ")
                {
                    var randNum = nums[Math.floor(Math.random() * nums.length)];
                    row[index] = randNum;
                    nums = nums.filter( num => {
                        return randNum !== num;
                    });
                }
            }

            //remove the already dealt with row
            sudoku = sudoku.slice(9);

            //Add the row to the sudoku
            row.forEach(num => {
                randomSudoku.push(num);
            });
        }

        //Add the random sudoku into the random array
        initialSudokus.push(randomSudoku);
    }

    return initialSudokus;
}

module.exports = populateRandom;