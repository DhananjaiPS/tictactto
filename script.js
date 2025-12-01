
let currentPlayer='X';
let arr=Array(9).fill(null);
function winnerCheck(){
    if((arr[0]!==null && arr[0]==arr[1] && arr[1]==arr[2])||
    (arr[3]!==null && arr[3]==arr[4] && arr[4]==arr[5])||
    (arr[6]!==null && arr[6]==arr[7] && arr[7]==arr[8])||
    (arr[0]!==null && arr[0]==arr[3] && arr[3]==arr[6])||
    (arr[1]!==null && arr[1]==arr[4] && arr[4]==arr[7])||
    (arr[2]!==null && arr[2]==arr[5] && arr[5]==arr[8])||
    (arr[0]!==null && arr[0]==arr[4] && arr[4]==arr[8])||
    (arr[2]!==null && arr[2]==arr[4] && arr[4]==arr[6])){
        document.write(currentPlayer + " wins!");
        return;
    }
    if(!arr.some(e=>e===null)) {
        console.log("Draw");
        return;
    }
}
function handelclick(e){
    let id = Number(e.id)-1;
    console.log(id);
    if(arr[id]!==null) return ;
    arr[id]=currentPlayer;
    e.innerText=currentPlayer;
    winnerCheck();
    currentPlayer=(currentPlayer=="X")?"O":"X";
    console.log(arr)
}

function handelBtn(e){
    
    let title="Clicked";
    e.innerText=title;
    if(e.innerText==="Clicked"){
        console.log(" click is triggered ");
        return;

    }
    handelCon();

}
function handelCon(){
    console.log("function is called");
}
let fetch1 = new Promise((resolve, reject) => {
    resolve("data fetched");
});

let fetch2 = new Promise((resolve, reject) => {
    reject("Error");
});

Promise.race([fetch1, fetch2])
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });
