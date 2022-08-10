<template>
    <div class="exitlogin">
        <h2>已登入:&nbsp;&nbsp;{{user.nickname}}</h2>
        <div><img :src="user.user_pic" alt=""></div>
        <div>手机号:{{ user.cell_phone | phonefil }}</div>
        <div class="exit" @click="eixtlogin">退出登入</div>
        <div class="but">
            <span @click="ChangePassword">修改密码</span>
            <span class="zj"></span>
            <span @click="unsubscribe">注销账号</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
const storage = window.localStorage
export default {
    name: 'BlogpageExitLogin',

    data() {
        return {
            
        };
    },

    mounted() {
      
    },
    methods: {
        eixtlogin(){
            storage.removeItem('user')
            this.$toast.show('退出登入',1500)
            this.$emit('exitlogin')
        },
        ChangePassword() {
            this.$emit('ChangePassword')
        }, 
        unsubscribe() {
            this.$emit('unsubscribe')
        }
    },
    computed: {
        ...mapState({user: state => state.user})
    },
    filters: {
        phonefil(value) {
            if (value !== undefined) {
                return value.substring(0, 3) + '****' + value.substr(value.length - 3)
            }
            return ''
        }
    }
};
</script>

<style lang="css" scoped>




.exitlogin {
    width: 100%;
    height: 250px;
    background-color: #fff;
    z-index: 9;
    position: fixed;
    top: 25%;
    text-align: center;
}
.exitlogin div {
    margin-top: 5px;
}
.exitlogin img{ 
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.exitlogin .exit {
    margin-top: 35px;
    font-size: 23px;
    margin-bottom: 20px;
}
.zj {
    width: 100px;
    height: 1px;
    display: inline-block;
}
</style>