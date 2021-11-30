console.log("Реалізувати розбиття стрічки на слова у масив:")
function spliit(str,ch) 
{
    return str.split(ch);
}
console.log(spliit("How are you doing",' '));

console.log();
console.log("Усі перестановки слова:")
function allswaps(arr,current_word,word_length,results)
{
    for(let i = 0;i<arr.length;i++)
    {
        let word=current_word+arr[i];

        if(word.length<word_length)
        {

            let arr2=[]
            for(let j=0;j<arr.length;j++)
            {
                if(j!=i){
                    arr2.push(arr[j])
                }

            }
            allswaps(arr2, word, word_length, results);
        }else
        {
            results.push(word);

        }

    }
}
function permutations(str)
{
    let array = spliit(str,'');
    let results=[];
    allswaps(array,"",array.length,results);
    console.log(results);
}
permutations("cat");

console.log();
console.log("Факторіал числа:")
function factorial(n)
{
    let result=n;
    for (let i = 1; i < n; i++)
    {
        result = result * (n - i);
    }
    return result;
}
console.log(factorial(9));

console.log();
console.log("Елемент із найбільшою частотою повторень")
function entrSmth(r) 
{
    var elist = [];
    var clist = [];
    for (i = 0;i<r.length;i++)
    {
        if(!elist.includes(r[i]))
        {
            elist.push(r[i]);
            clist.push(0);
            let j = i;
            while(r.indexOf(r[i],j)!=-1) 
            {
                clist[elist.length - 1]++;
                j = r.indexOf(r[i], j) + 1;
            }
        }
    }
    console.log(elist,clist);
}
entrSmth("ttvlvtttve");

console.log();
console.log("Кількість днів для заданого місяця та року:");
function days(m,y)
{
    if(m==2&&y%4&&y>=1582) 
    {
        return 29;
    }
    if(m==2)
    {
        return 28;
    }
    if(m%2)
    {
        return 30;
    }else
    {
        return 31;
    }
}
console.log(days(11,2021));

console.log();
console.log("Швидке сортування масиву");
let arr=[10,2,14,1,6,8,5,7];
function partition(arr, start, end)
{
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++)
    {
        if (arr[i] < pivotValue) 
        {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
}
function quickSort(arr, start, end) 
{
    if (start >= end) 
    {
        return;
    }
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
quickSort(arr, 0, arr.length - 1)
console.log(arr)
