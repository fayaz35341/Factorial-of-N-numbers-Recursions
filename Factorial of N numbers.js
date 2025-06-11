//1
class Solution {
    factorial(n) {
        // code here
        if(n===0){
            return 1
        }
        return n*this.factorial(n-1)
    }
}
console.log(new Solution().factorial(5))
