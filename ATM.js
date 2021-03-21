https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript

    function solve(n) {
        if(n % 10) return -1;
        let count = 0;
        let arr = [500, 200, 100, 50, 20, 10];
        for(let el of arr){
            while(n >= el){
                count++;
                n -= el;
            }
        }
        return count;
    }