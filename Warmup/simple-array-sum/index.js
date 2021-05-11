function simpleArraySum(ar) {
    // Write your code here
    
    return ar.reduce((total,curr) => total += curr,0)
}