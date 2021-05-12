var arr=[
    {
        fistname:"firoz"
    },
    {
        age:23
    },
    {
        lastname:"Khan"
    }
]
console.log(arr,"before swaping")
let temp=arr[1]
arr[1]=arr[2]
arr[2]=temp
console.log(arr,"after swapping")