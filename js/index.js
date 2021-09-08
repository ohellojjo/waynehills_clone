// function popup_open(){
//     document.getElementById("popup").style.display="block"
// }
// document.querySelector("#popBtn").addEventListener("click",popup_open);

// function popup_close(){
//     document.getElementById("popup").style.display="none"
// }
// document.querySelector("#closeBtn").addEventListener("click",popup_close);
// document.querySelector("#popback").addEventListener("click",popup_close);

// // document.querySelector("#popupBox").addEventListener('click', function(){
// //     document.querySelector("#popup").removeEventListener("click",popup_close);
// //   });


let mainpages = new Vue({
    el:"#mainP",
    data:{
        popups:false,
    },
    methods:{
        signIn(){
            location.href="./login/index.html"
        },
        closeBtn(){
            this.popups=false;
        },
        popBtn(){
            this.popups=true;
        }

    },
    components:{

    },
    computed:{

    }
})