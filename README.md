# Shamir's Secret Sharing Algorithm Implementation in JavaScript

This project is a simplified implementation of Shamir's Secret Sharing algorithm. The goal of this program is to find the constant term (c) of an unknown polynomial based on its given roots, which are encoded in different bases. This implementation uses Lagrange Interpolation to find the constant term.

## Problem Overview

The unknown polynomial is defined by its degree m, and we need at least k = m + 1 points to determine the coefficients of the polynomial. The JSON input provides the points in a special format, where the y values are encoded in different bases (e.g., binary, decimal, hexadecimal, etc.). The goal is to:

1. Parse the JSON input.


2. Decode the encoded values based on the base provided.


3. Use Lagrange Interpolation to find the constant term c of the polynomial.



## How the Code Works

1. Reading the Input:

The input is provided in JSON format. The JSON contains two main parts:

"keys": Contains the number of roots (n) and the minimum number of points required (k).

The actual root points, where each key (e.g., "1", "2", etc.) represents the x value, and the base and value are used to decode the y value.




2. Decoding the Encoded Values:

The decodeBaseValue function takes the base and value as input and converts the encoded y value into a standard decimal number using parseInt(value, base).



3. Lagrange Interpolation:

The algorithm uses Lagrange Interpolation to find the constant term of the polynomial. The Lagrange interpolation formula is used to construct a polynomial that passes through the given points.

The function lagrangeInterpolation calculates the constant term by computing the contribution of each point and summing them up.



4. Sorting the Points:

The points are sorted by their x values before performing interpolation, ensuring that the algorithm can handle any order of input points.



5. Main Function:

The findSecretConstant function is the core function that reads the JSON file, decodes the points, applies Lagrange interpolation, and prints the result.




## Code Structure

decodeBaseValue(base, value):

Decodes the y value from the given base (e.g., binary, decimal, etc.) into a BigInteger using parseInt.


lagrangeInterpolation(points, k):

Performs Lagrange interpolation on the first k points to find the constant term c.


findSecretConstant(jsonFilePath):

Reads the JSON file, decodes the points, and uses Lagrange interpolation to compute the constant term.



### Example Input

Here is an example of the input JSON format:
```
{
    "keys": {
        "n": 4,
        "k": 3
    },
    "1": {
        "base": "10",
        "value": "4"
    },
    "2": {
        "base": "2",
        "value": "111"
    },
    "3": {
        "base": "10",
        "value": "12"
    },
    "6": {
        "base": "4",
        "value": "213"
    }
}
```

"n": The number of points provided.

"k": The minimum number of points required to determine the polynomial.

"base": The base in which the y value is encoded.

"value": The encoded y value.


### Example Output

For the above input, the output will be:

The constant term (c) is: <calculated_value>

The output is the calculated constant term of the polynomial, found using Lagrange interpolation.

## How to Run the Program

1. Ensure you have Node.js installed on your system.


2. Clone the repository or download the code.


3. Place your input JSON file (testcase.json) in the same directory as the script.


4. Run the script using the following command:
``
node script.js
``

## Dependencies

The only dependency for this project is Node.js. You do not need any external libraries. The script uses the built-in fs module to read the input file.

Example Usage

``node script.js``

This will read the input from testcase.json, decode the values, and output the constant term of the polynomial.

## Explanation of Functions

decodeBaseValue:

Converts the y value from the specified base (e.g., base 2 for binary, base 10 for decimal) into a decimal BigInteger.


lagrangeInterpolation:

Implements the Lagrange interpolation formula to compute the constant term by summing up the contributions from all points.


findSecretConstant:

Reads and parses the JSON input, calls the decoding function, sorts the points, and then applies Lagrange interpolation to find and print the result.


---
