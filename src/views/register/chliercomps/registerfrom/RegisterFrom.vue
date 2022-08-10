<template>
    <div>
        <div class="login">
            <form class="login-from">
                <input type="text" v-model="username" @focus="usernamefocus" @blur="usernameblur">
                <input :type="passwordtype" v-model="password" @focus="passwordfocus" @blur="passwordblur">
                <input type="text" value="手机号" v-model="phone" @focus="phonefocus" @blur="phonedblur">
            </form>
            <button class="but" :disabled="flag" @click="regclick">注册</button>
        </div>
        <input class="checbox" type="checkbox" name="" id="" @click="isbox"><span class="word">我一阅读并同意</span>
    </div>
</template>

<script>
import { register } from 'network/user'
export default {
    name: 'BlogpageRegisterFrom',

    data() {
        return {
            flag: true,
            passwordtype: 'text',
            username: '用户名',
            password: '密码',
            phone: '手机号'
        };
    },

    mounted() {
        
    },

    methods: {
        isbox(event) {
            this.flag = !event.target.checked
        },
        usernamefocus() {
            if(this.username === '用户名') {
                this.username = ''
            }
        },
        usernameblur() {
            if(this.username === '') {
                this.username = '用户名'
            }
        },
        passwordfocus() {
            if(this.password === '密码') {
                this.passwordtype = 'password'
                this.password = ''
            }
        },
        passwordblur() {
            if(this.password === ''){
                this.passwordtype = 'text'
                this.password = '密码'
            }
            
        },
        phonefocus() {
            if(this.phone === '手机号') {
                this.phone = ''
            }
        },
        phonedblur() {
            if(this.phone === '') {
                this.phone = '手机号'
            }
        },
        regclick() {
            if(this.username ==='' || this.username ==='用户名') {
                return this.$toast.show('请输入用户名', 1500)
            }
            if (this.password === '' || this.password === '密码') {
                return this.$toast.show('请输入密码', 1500)
            }
            if (this.password.length < 6) {
                return this.$toast.show('请输入6位数以上密码', 1500)
            }
            if (this.phone === '' || this.phone === '手机号') {
                return this.$toast.show('请输入手机号', 1500)
            }
            if (this.phone.length !== 11) {
                return this.$toast.show('请输正确的手机号', 1500)
            }  
            register({
                username: this.username,
                password: this.password,
                cell_phone: this.phone
            }).then(res => {
                const data =  res.data
                this.$toast.show(data.message, 1500)
                if(data.status === 0) {
                    this.$router.push('/login')
                }
            })
        },
    },
};
</script>

<style lang="css" scoped>



.login {
    text-align: center;
}

.login-from input {
    width: 330px;
    height: 35px;
    margin-top: 8px;
    color: #eee;
}


.but {
    margin-top: 30px;
    width: 330px;
    height: 40px;
}

.checbox {
    margin-top: 20px;
    margin-left: 20px;
}
.word {
    font-size: 12px;
    margin-left: 10px;
}
</style>