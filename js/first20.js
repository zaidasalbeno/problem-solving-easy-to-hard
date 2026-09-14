//1. Temperature Decision
function weth(temp){


if(temp<10){
  return "cold";
}
else
  if(temp>=10&&temp<=24){
    return "mild";
  }
else
    if(temp>=25&&temp<=34)
    {

      return"warm";
    }
else
    {
      return"hot";
    }

}
console.log(weth(25))
console.log("==============")
//2. Sum of Multiples
function summms(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }

    }

    return sum;
}

console.log(summms(10)); 

console.log("====================")
//3. Count the Winners 

function winner(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] >= 50) {
            count++;
        }
    }

    return count;
}

console.log(winner([48, 50, 76, 22, 91]));
console.log("===================")
//4. Manual Maximum
function maxx(ari){
let max=ari[0]

for(let i=0;i<=ari.length-1;i++)
{

for(let k=1;k<=ari.length-1;k++)
{
  if(ari[k]>max){

    max=ari[k]
  }
}
  
}
return max
}
console.log(maxx(([-4, -25, -1, -12])))
console.log("====================")
//5. Vowel Counter
function vowel(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
       
if ( str[i] === "a" || str[i] === "e" ||str[i] === "i" ||str[i] === "o" ||str[i] === "u") {
            count++;
        }  
    }

    return count;
}

console.log(vowel("ZAID"));


console.log("====================")
//6. Reverse Only the Words
function rev(sen) {
    let words = sen.split(" ");

    let reversed = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }

    return reversed.join(" ");
}

console.log(rev("I love JavaScript"));

console.log("===================")
//7. First and Last Match 
function match(arii){

if(arii[0]===arii[arii.length-1])
{
  return true
}
  else{

    return false
  }

  
}

console.log(match(([7, 2, 5, 7])))
console.log(match(([1, 2, 3])))
console.log("======================")
//8. Simple Number Statistics 
function numberStats(arr) {

    let sum = 0;
    let pos= 0;
    let neg = 0;

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i];

        if (arr[i] > 0) {
            pos++;
        }

        if (arr[i] < 0) {
            neg++;
        }
    }

    let ave = sum / arr.length;

    return {
        sum: sum,
        average: ave,
        positive: pos,
        negative: neg
    };
}

console.log(numberStats([4, -2, 0, 6, -1]));
console.log("=======================")
//9. Second Largest Distinct Number
// i tried and i cant sorry
console.log("==================")
//10. First Unique Character
function uni(word) {
  let unnii = "";

  for (let i = 0; i < word.length; i++) {
    let count = 0;

    for (let k = 0; k < word.length; k++) {
      if (word[i] === word[k]) {
        count++;
           }
    }

   if(count===1){

      unnii += word[i];
     
   }
  }

  return unnii[0];
}

console.log(uni("zzzaiidd"));
console.log("====================")
//11. Move Zeros, Keep Order
function zreoo(zarr) {

    let zaee = [];

    for (let i = 0; i < zarr.length; i++) {

        if (zarr[i] !== 0) {
            zaee.push(zarr[i]);
        }
    }

    while (zaee.length < zarr.length) {
        zaee.push(0);
    }

    return zaee;
}

console.log(zreoo([0, 5, 0, 3, 12, 0, 8]));
console.log("=================")
//12. Balanced Parentheses
function balanc(para){

let count=0
  for(let i=0;i<=para.length;i++){
if(para[i]=="(")
{
  count++
}
if(para[i]==")")

{
  count--
}
if(count<0){


  return false
}
    
  }

return count==0
}
console.log(balanc("(()()"))
console.log(balanc("()()"))
console.log("============")
//13. Two Sum - Return Indices
function indic(iarr,inum)
{

for(let i=0;i<=iarr.length-1;i++)
{ 
   for(let k=0;k<=iarr.length-1;k++){

    if(iarr[i]+iarr[k]==inum)
    {
    return [i,k]
      
    }
     
   }

  
}

  
}
console.log(indic([2, 7, 11, 15], 9));
console.log("==========================")
//14. Longest Consecutive Streak
function longest(larr) {
    let curr = 0;
    let longe = 0;

    for (let i = 0; i <= larr.length - 1; i++) {

        if (larr[i] == true) {
            curr++;

            if (curr > longe) {
                longe = curr;
            }
        }
        else {
            curr = 0;
        }
    }

    return longe;
}

console.log(longest([true, true, false, true, true, true, false]));
console.log("========================")
//15. Compress Repeated Characters 
function comp(carr){

let acount=0
  let bcount=0
  let ccount=0
  let dcount=0
  for(let i=0;i<=carr.length;i++){

if(carr[i]=='a')
{
  acount++
}
    else
  if(carr[i]=='b')
  {
    bcount++
  }
    else
    if(carr[i]=='c')
    {

      ccount++
    }
else {
dcount++
  
}
    
  }

console.log("a"+""+acount+""+"B"+""+bcount+""+"C"+""+ccount+""+"d"+""+dcount+"")


  
}
console.log(comp(("aaabbccccdaa")))
console.log("========================")
//16. Most Frequent Value
function freq(farr) {
    let most = 0;
    let frequent = 0;

    for (let i = 0; i <= farr.length - 1; i++) {

        let count = 0;

        for (let k = 0; k <= farr.length - 1; k++) {

            if (farr[i] == farr[k]) {
                count++;
            }
        }

        if (count > most) {
            most = count;
            frequent = farr[i];
        }
    }

    return frequent;
}

console.log(freq([4, 2, 4, 3, 2, 4, 2]));
console.log("=======================================")
//17. Merge Student Records
function merge(stu) {

    let res = [];

    for (let i = 0; i < stu.length; i++) {

        let found = false;

        for (let k = 0; k < res.length; k++) {

            if (stu[i].id === res[k].id) {

                res[k].points += stu[i].points;
                found = true;
            }
        }

        if (found === false) {
            res.push({
                id: stu[i].id,
                name: stu[i].name,
                points: stu[i].points
            });
        }
    }

    return res;
}

console.log(merge([
    { id: 1, name: "Lina", points: 5 },
    { id: 2, name: "Omar", points: 7 },
    { id: 1, name: "Lina", points: 4 }
]))
console.log("==========================")
//18. Best Time to Buy and Sell
function maxProfit(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {

        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }

        let profit = prices[i] - minPrice;

        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log("===================================")
//19. Valid Anagram
//under work still
//20. Inventory Order Check
function check(order) {

    const inv = [
        { id: "A", stock: 4 },
        { id: "B", stock: 2 }
    ];

    for (let i = 0; i < order.length; i++) {

        for (let k = 0; k < inv.length; k++) {

            if (order[i].id === inv[k].id) {

                if (order[i].qty > inv[k].stock) {
                    return false;
                }
            }
        }
    }

    return true;
}

console.log(check([
    { id: "A", qty: 3 },
    { id: "B", qty: 3 }
]));