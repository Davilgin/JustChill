const matrix = function(stringMatrix, word) {
    const matrixNumber = function (index) {
        const matrixCounter = (Math.sqrt(stringMatrix.length));
        const column = Math.floor(index/matrixCounter);
        const row = (column == 0 ? index : index - (column * matrixCounter));
        return [column, row]};
    const arrayMatrix = []
    const arrayLocation = []
    const arrayCube = stringMatrix.split('');
    const arrayWord = word.split('');
    arrayWord.forEach(element => {
        for (i = 0; i < arrayCube.length; i++) {
            if (element == arrayCube[i]) {
                if (!arrayMatrix.includes(element)) {
                    arrayMatrix.push(element)
                    arrayLocation.push(matrixNumber(i))
                } else { return }
            }
        }
    });
    console.log('Matrix for: ' + stringMatrix);
    console.log(arrayMatrix);
    console.log(arrayLocation);
    console.log(arrayWord);
}

matrix('QLGNAEKIRLRNGEAE', 'KING');
matrix('QCEASDZXC', 'ACDX');
matrix('RNNAETIALRNPEAEIALPEAEQLR', 'PARTEL');