let count=0;
let login = new Vue({
    el:"#loginP",
    data:{
        input1:"text",
        input2:"password",
        join_msg:"회원가입하고 영상을 제작해 보세요!",
        hide:"표시",
        email:"",
        pw:"",
        msg:""
    },
    methods:{
        closeBtn(){
            location.href="../index.html";
        },
        pw_hide_show(){
            if(count==0){
                this.hide="가리기"
                this.input2="text"
                count++;
            }
            else if(count==1){
                this.hide="표시"
                this.input2="password"
                count--;
            }
        },
        loginBtn(){
            
                this.$refs.email_border.style.border='1px solid #ff5f0a'
                this.$refs.pw_border.style.border='1px solid #ff5f0a'
                this.$refs.pops.style.top="0px"
                this.msg="입력하신 이메일과 비밀번호가 일치하지 않습니다."
            
        }
    },
    components:{

    },
    computed:{

    }
})