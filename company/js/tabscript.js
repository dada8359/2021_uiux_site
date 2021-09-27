
const tabList = document.querySelectorAll(".tab li");
const boxCon = document.querySelectorAll(".box div");


for(let j=0;j<tabList.length;j++){

    tabList[j].onclick = function(){
       
        for(let i=0;i<tabList.length;i++){
            tabList[i].classList.remove("on"); // addClass() removeClass("on")
        }

        for(let i=0;i<tabList.length;i++){
            boxCon[i].style.display = "none";
        }
        //this.classList.add("on");
        tabList[j].classList.add("on");
        boxCon[j].style.display = "block"

    }

}



// tabList[0].onclick = function(){
//     for(let i=0;i<tabList.length;i++){
//         tabList[i].classList.remove("on"); // addClass() removeClass("on")
//     }
//     //this.classList.add("on");
//     tabList[0].classList.add("on");
// }
// tabList[1].onclick = function(){
//     for(let i=0;i<tabList.length;i++){
//         tabList[i].classList.remove("on"); // addClass() removeClass("on")
//     }
//     //this.classList.add("on");
//     tabList[1].classList.add("on");
// }
// tabList[2].onclick = function(){
//     for(let i=0;i<tabList.length;i++){
//         tabList[i].classList.remove("on"); // addClass() removeClass("on")
//     }
//     //this.classList.add("on");
//     tabList[2].classList.add("on");
// }
// tabList[3].onclick = function(){
//     for(let i=0;i<tabList.length;i++){
//         tabList[i].classList.remove("on"); // addClass() removeClass("on")
//     }
//     //this.classList.add("on");
//     tabList[3].classList.add("on");
// }

