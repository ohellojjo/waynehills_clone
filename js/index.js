
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
        },
        script(){

        },
       

    },
    components:{
        
    },
    computed:{
        slide(){
            let ea = document.getElementById("slideImages").children.length;
            let no=0;
            let timer = setInterval(function(){
                document.getElementById("slideImages").style.left=-(480*no)+"px"
                console.log(no)
                if(no>3){
                    no==-1;
                }
                no++; 
            }, 1000)
               
        }
    }
})