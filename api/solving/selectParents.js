function selectParents(pairedRatings)
{
    var pairedLength = pairedRatings.length;
    var parents = [];
    var goodParentNo = Math.floor(0.09 * pairedLength);
    var randParentNo = Math.floor(0.01 * pairedLength);

    //Add the best 9%
    for (var i = 0; i < goodParentNo; i++)
        parents.push(pairedRatings[i]); 

    //Add a random 1%
    for (var i = 0; i < randParentNo; i++)
    {
        var worst = pairedRatings.slice(Math.floor(0.09 * pairedLength))
        var randSelection = worst[Math.floor(Math.random() * worst.length)]
        parents.push(randSelection);
    }

    return parents;
}

module.exports = selectParents;