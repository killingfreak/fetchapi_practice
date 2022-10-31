console.log("welcome");

let mybtn = document.getElementById("mybtn");
console.log('1 step');
mybtn.addEventListener('click', getdata);
// function getdata(){
    
//     console.log("inside getdata");
//     url = "https://dummyjson.com/products/1";
//     // url = "http://127.0.0.1:8000/studentapi/";
//     fetch(url, { mode: 'no-cors' }).then((responce)=>responce.text()).then((data)=>console.log(data))
//     console.log("after")
// }

//post request
// function postdata(){
//     console.log("insidefn")
//     fetch('https://dummyjson.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log);
// }

function getdata(){
    console.log("inside fn");
    url = "http://127.0.0.1:8000/studentapi/";
    fetch(url).then((responce)=>{
        console.log("1st then")
        return responce.text();
    }).then((data)=>{
        console.log("2nd then")
        // console.log(data);
        let obj = JSON.parse(data)
        console.log(obj)
        let list = document.getElementById("list")
        str = ""
        // roll = "roll"
        for (key in obj)
        {
            let obj1 = obj[key].name
            str += JSON.stringify(obj1)
            console.log(obj[key].name)
        }
        list.innerHTML = str;
    })
}

// function getdata(){
//     console.log("inside fn");
//     url = "https://dummyjson.com/products/1";
//     mode = { mode: 'no-cors'}
//     fetch(url, mode).then((responce)=>{
//         console.log("1st then")
//         console.log(responce.text)
//         return responce.text();
//     }).then((data)=>{
//         console.log("2nd then")
//         console.log(data);
//         console.log("finish")
//     })
// }
getdata()

// postdata()