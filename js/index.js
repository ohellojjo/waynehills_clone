let no=0;
let mainpages = new Vue({
    el:"#mainP",
    data:{
        popups:false,
        length:0,
        text:"",
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
        },
        text1(){
            document.querySelector("#slideText").children[0].style.opacity=1;
            document.getElementById("slideImages").style.left="0px";
        },
        text2(){
            document.querySelector("#slideText").children[1].style.opacity=1;
            document.getElementById("slideImages").style.left="-480px";
        },
        text3(){
            document.querySelector("#slideText").children[2].style.opacity=1;
            document.getElementById("slideImages").style.left="-960px";
        }
    },
    components:{
        
    },
    computed:{
        slide(){
            let ea = document.getElementById("slideImages").children.length;
            
            let timer = setInterval(function(){
                document.getElementById("slideImages").style.left=-(480*no)+"px"; 
                document.querySelector("#slideText").children[no].style.borderBottom="3px solid #c7b9b4";
                no++; 
                if(no>=ea){
                    no=0;
                }
            }, 1000)
               
        },
        inputText(){
            this.length=this.text.length;
        }
    }
})