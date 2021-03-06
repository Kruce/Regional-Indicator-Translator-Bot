/**
* Shuffles all elements in an array.
* @param {Array} array an array of items
*/
function ShuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) { // while there remain elements to shuffle...
        randomIndex = Math.floor(Math.random() * currentIndex); // pick a remaining element...
        --currentIndex;
        temporaryValue = array[currentIndex]; // and swap it with the current element.
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

module.exports = {
    ShuffleArray
};