
const goldStore = function (x, y) {

    if (y < 1 || y > 100000 && x < 1 || x > 100000) {
        console.log('Error, out of number')
        return false;
    }
    
    const outPut = [];
    const storeArray = [];
    
    let existColumn = 1;
    let column = 1;
    let row = 1;
    let id = 1;

    for (i = 0; i < 1000000; i++) {

        let location = `${column + ', ' + row}`;
        storeArray.push({location, id});

        if (row === y && column === x) {
            outPut.push(`${id}`);
        }

        if (!(column === 1)) {
            row++
            column--
        } else {
        existColumn++
        row = 1
        column = existColumn;
        }

    id++
    
    }
    console.log(outPut);
}

goldStore(2, 3);
goldStore(10, 5);
goldStore(100, 58);
goldStore(1000001, 29);
