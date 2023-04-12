let incrementEl = document.getElementById('increment');
let resultEl = document.querySelector('.value');
let changeByEl = document.getElementById('changeBy');
const resetEl = document.getElementById('reset');

// incrementEl.addEventListener("click",()=>{
//     console.log(Number.parseInt(changeByEl.value),Number(changeByEl.value))
//     let ans=Number(resultEl.textContent) + Number(changeByEl.value);
//     resultEl.textContent=ans;
//     return ;
// })

function add() {
    let changeByVal = changeByFun();
    // console.log(Number.parseInt(changeByEl.value),Number(changeByEl.value))
    let ans = Number(resultEl.textContent) + Number(changeByVal);
    resultEl.textContent = ans;
}

function subtr() {
    let changeByVal = changeByFun();
    resultEl.textContent = resultEl.textContent - Number(changeByVal);
}


function changeByFun() {
    let changeBy;
    if (changeByEl.value < 1) {
        changeBy = 1;
    } else if (changeByEl.value > 10) {
        changeBy = 10;
    }
    else {
        changeBy = changeByEl.value;

    }
    changeByEl.value = changeBy;
    return changeBy;
}





resetEl.addEventListener("click", () => {

    resultEl.textContent = "0";
    changeByEl.value = "1";
})