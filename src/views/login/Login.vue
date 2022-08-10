<template>
    <div>
        <nav-bar>
            <div slot="center">账号登入</div>
        </nav-bar>
        <login-logo></login-logo>
        <login-from></login-from>
        <exit-login v-show="isshow" @exitlogin="save" @ChangePassword="ChangePassword" @unsubscribe="unsubscribe"></exit-login>
        <change-password ref="password" @save="save"></change-password>
        <unsubscribe ref="unsubscribe" @save="save"></unsubscribe>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue'
import LoginLogo from 'components/content/loginlogo/LoginLogo.vue'
import LoginFrom from './chliercomps/loginfrom/LoginFrom.vue'
import ExitLogin from './chliercomps/exitlogin/ExitLogin.vue';
import ChangePassword from './chliercomps/ChangePassword/ChangePassword.vue'
import Unsubscribe from './chliercomps/Unsubscribe/Unsubscribe.vue'
const storage = window.localStorage
export default {
    name: 'BloypageLogin',

    data() {
        return {
            isshow: false
        };
    },
    components: {
        NavBar,
        LoginLogo,
        LoginFrom,
        ExitLogin,
        ChangePassword,
        Unsubscribe
    },

    mounted() {
        if(storage.getItem('user')) {
            this.isshow = true
        }else
        {
            this.isshow = false
        }
    },

    methods: {
        ChangePassword() {
            this.$refs.password.isshow = true
        },
        unsubscribe() {
            this.$refs.unsubscribe.isshow = true
        },
        save() {
            this.isshow = false
        }
    },
};
</script>

<style lang="scss" scoped>

</style>