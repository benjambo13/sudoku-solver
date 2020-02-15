function getRatings(paired)
{
    //Get all the ratings into a list
    ratings = [];
    paired.forEach(pair => {
        ratings.push(pair[1]);
    });
    return ratings;
}

module.exports = getRatings