/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value) {

  const binaryValue = Number(value).toString(2).padStart(8, "0");

  return parseInt(binaryValue.split('').reverse().join(''), 2).toString();

}

module.exports = binaryReversal;
