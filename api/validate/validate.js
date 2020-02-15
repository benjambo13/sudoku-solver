function validate(grid)
{
    const isValid = validateRows(grid) && validateColumns(grid) && validateSubgrids(grid)
    return isValid
}

function validateRows(grid)
{
    var valid = true;
    for (let num = 0; num < 9; num++)
    {
        var row = grid.slice((num * 9), ((num + 1) * 9))
        var filtered = row.filter((elem) => {return elem !== " "})
        var set = new Set(filtered)
        if (set.size !== filtered.length)
        {
            valid = false
            break
        }
    }
    return valid
}

function validateColumns(grid)
{
    var valid = true;
    var indexHelper = [0,9,18,27,36,45,54,63,72]
    for (let col = 0; col < 9; col++)
    {
        var column = []
        indexHelper.forEach((index) => {
            column.push(grid[index])
        })
        var filtered = column.filter((elem) => {return elem !== " "})
        var set = new Set(filtered)
        if (set.size !== filtered.length)
        {
            valid = false
            break
        }
        indexHelper = indexHelper.map((index) => {return index + 1})
    }
    return valid
}

function validateSubgrids(grid)
{
    var valid = true
    var indexHelper = [
        [ 0, 1, 2,   9,10,11,  18,19,20],
        [ 3, 4, 5,  12,13,14,  21,22,23],
        [ 6, 7, 8,  15,16,17,  24,25,26],

        [27,28,29,  36,37,38,  45,46,47],
        [30,31,32,  39,40,41,  48,49,50],
        [33,34,35,  42,43,44,  51,52,53],
        
        [54,55,56,  63,64,65,  72,73,74],
        [57,58,59,  66,67,68,  75,76,77],
        [60,61,62,  69,70,71,  78,79,80]]

    for (var sub = 0; sub < 9; sub++)
    {
        var subgrid = []
        indexHelper[sub].forEach((index) => {
            subgrid.push(grid[index])
        })
        var filtered = subgrid.filter((elem) => {return elem !== " "})
        var set = new Set(filtered)
        if (set.size !== filtered.length)
        {
            valid = false
            break
        }
    }
    return valid
}

module.exports = validate;