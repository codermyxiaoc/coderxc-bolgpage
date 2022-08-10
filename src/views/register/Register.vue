<template>
    <div>
        <nav-bar>
            <div slot="center">账号注册</div>
        </nav-bar>
        <login-logo></login-logo>
        <register-from></register-from>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue';
import LoginLogo from 'components/content/loginlogo/LoginLogo.vue';
import RegisterFrom from './chliercomps/registerfrom/RegisterFrom.vue'
export default {
    name: 'BloypageRegister',

    data() {
        return {
            
        };
    },
    components: {
        NavBar,
        LoginLogo,
        RegisterFrom

    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>