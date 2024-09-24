const fs = require('fs');

function decodeBaseValue(base, value) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points, k) {
    let constantTerm = 0;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        let li = 1;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = points[j].x;
                li *= -xj / (xi - xj);
            }
        }

        constantTerm += yi * li;
    }

    return constantTerm;
}

function findSecretConstant(jsonFilePath) {
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) throw err;

        let jsonData = JSON.parse(data);
        let n = jsonData.keys.n;
        let k = jsonData.keys.k;

        let points = [];

        // Iterate over each key in the object
        Object.keys(jsonData).forEach(key => {
            if (key !== 'keys') {
                let base = parseInt(jsonData[key].base);
                let value = jsonData[key].value;
                let x = parseInt(key);  // 'key' is the x-value
                let y = decodeBaseValue(base, value);  // Decode the y-value
                points.push({ x, y });
            }
        });

        points.sort((a, b) => a.x - b.x);  // Sort points by x-value

        let constantTerm = lagrangeInterpolation(points, k);
        console.log('The constant term (c) is: ' + constantTerm);
    });
}

findSecretConstant('testcase.json');