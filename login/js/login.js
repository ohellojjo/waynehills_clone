let login = new Vue({
    el:"#loginP",
    data:{
        input1:"text",
        input2:"password",
        join_msg:"회원가입을 하고 영상을 제작해 보세요!",
    },
    methods:{
        closeBtn(){
            location.href="../index.html";
        }
    },
    components:{

    },
    computed:{

    }
})