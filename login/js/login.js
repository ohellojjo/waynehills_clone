let logins = new Vue({
    el:"#loginP",
    data:{
        input1:"text",
        input2:"password",
        join_msg:"회원가입하고 영상을 제작해 보세요!",
        hide:"표시"
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