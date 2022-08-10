<template>
    <div class="login">
        <form class="login-from">
            <input type="text" v-model="username" @focus="usernamefocus" @blur="usernameblur">
            <input :type="passwordtype" v-model="password" @focus="passwordfocus" @blur="passwordblur">
        </form>
        <div class="item">忘记密码</div>
        <button class="but" @click="loginbut">登入</button>
        <div class="reg">还没有账号,立即<a @click="register">注册</a></div>
    </div>
</template>

<script>
import { namelogin } from 'network/user'
export default {
    name: 'BlogpageLoginFrom',
    data() {
        return {
            username: '用户名',
            password: '密码',
            passwordtype: 'text'
        };
    },

    mounted() {
        
    },

    methods: {
        register() {
            this.$router.push('/register')
        },
        usernamefocus() {
            if (this.username === '用户名') {
                this.username = ''
            }
        },
        usernameblur() {
            if (this.username === '') {
                this.username = '用户名'
            }
        },
        passwordfocus() {
            if (this.password === '密码') {
                this.passwordtype = 'password'
                this.password = ''
            }
        },
        passwordblur() {
            if (this.password === '') {
                this.passwordtype = 'text'
                this.password = '密码'
            }

        },
        loginbut(){
            if(this.username === '用户名' || this.username === ''){
                return this.$toast.show('请输入用户名', 1500)
            }
            if(this.password === '密码' || this.password === ''){
                return this.$toast.show('请输入密码', 1500)
            }
            namelogin({
                username: this.username,
                password: this.password
            }).then(res => {
                if(res.data.status === 1) {
                    return this.$toast.show(res.data.message, 1500)
                }
                let storage = window.localStorage
                storage.setItem('user', res.data.token)
                this.$router.push('/home')
                this.$toast.show(res.data.message, 1500)
                this.$store.dispatch('userreq')
            })
        }
    },
};
</script>

<style lang="css" scoped>

.login {
    text-align: center;
}
.login-from input {
    width: 330px;
    height: 30px;
    margin-top: 6px;
}
.item {
    margin-top: 10px;
    text-align:right;
}
.but {
    margin-top: 15px;
    width: 330px;
    height: 40px;
}
.reg {
    margin-top: 10px;
}
.reg a {
    color:aqua;
}


</style>