
const solution = function (x, y) {

    let goldId

    if(x > 100000 || x < 0) {
        return false;
    } else if (y > 100000 || y < 0) {
        return false;
    } else {
        goldId = ((x + y - 2) * (x + y - 1) / 2 + y).toString();
    }

    return goldId;
}

solution(2, 3);
solution(10, 5);

module.exports = solution;
