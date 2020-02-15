function mutate(solutions, template)
{
    var mutated = [];

    solutions.forEach(sudoku => {
        var mutations = Math.floor(Math.random() * 5);
        for (let i = 0; i < mutations; i++)
        {
            var rowIndex       = Math.floor(Math.random() * 9) + 1;
            var row            = sudoku.slice((rowIndex - 1) * 9, (rowIndex * 9));
            var rowGivenValues = template.slice((rowIndex - 1) * 9, (rowIndex * 9));

            var pointer1 = Math.floor(Math.random() * 8);
            var pointer2 = Math.floor(Math.random() * 8);

            while (pointer1 == pointer2 || rowGivenValues[pointer1] != 0)
                pointer1 = Math.floor(Math.random() * 8);
            
            while (pointer1 == pointer2 || rowGivenValues[pointer2] != 0)
                pointer2 = Math.floor(Math.random() * 8);

            var value1 = row[pointer1];
            var value2 = row[pointer2];
            sudoku[((rowIndex-1)*9) + pointer1] = value2;
            sudoku[((rowIndex-1)*9) + pointer2] = value1;
        }

        mutated.push(sudoku);
    });

    return mutated;
}

module.exports = mutate;