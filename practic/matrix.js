function addMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum = m1[i][k] + m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function subMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum = m1[i][k] - m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

function multiplyMatrices(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var sum = 0;
            for (var k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}

var m1 = [[1,2],[3,4]]
var m2 = [[5,6],[7,8]]

console.log("addition of matrix is");
console.log(addMatrices(m1, m2)) ;

console.log("substraction of matrix is");
console.log(subMatrices(m1, m2)) ;

console.log("multipication of matrix is");+
console.log(multiplyMatrices(m1, m2)) ;