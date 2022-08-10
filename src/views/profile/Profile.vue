<template>
    <div>
        <nav-bar class="nav-bar">
            <div slot="left">我的</div>
            <div slot="right" @click="loginclick">登入</div>
        </nav-bar>
        <user-pic :userpic="user.user_pic"></user-pic>
        <user-info :user="user"></user-info>
    </div>
</template>

<script>

import NavBar from 'components/common/navbar/navbar.vue';
import UserInfo from './chliercomps/userinfo/UserInfo.vue';
import UserPic from './chliercomps/userpic/UserPic.vue';
import { mapState } from 'vuex';
export default {
    name: 'BloypageProfile',

    data() {
        return {
            
        };
    },
    components: {
        NavBar,
        UserInfo,
        UserPic
    },

    mounted() {
    },

    methods: {
        loginclick() {
            this.$router.push('/login')
        }
    },
    computed: {
        ...mapState({ user: state =>  state.user})
    }
};
</script>

<style lang="css" scoped>

</style>