module.exports = function reverse(n) {
    let x = Math.abs(n)
    let y = +x.toString().split('').reverse().join('')
    return y
}
