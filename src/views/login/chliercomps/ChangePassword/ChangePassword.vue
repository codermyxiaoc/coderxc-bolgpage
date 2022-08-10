<template>
    <div class="changepassword" v-show="isshow">
        旧密码:&nbsp;<input type="password" v-model="oldpwd">
        新密码:&nbsp;<input type="password" v-model="newpwd">
        <div class="but">
            <span @click="save">保存</span>
            <span class="zj"></span>
            <span @click="exit">退出</span>

        </div>
    </div>
</template>

<script>
import {changepassword} from 'network/user'
export default {
    name: 'BlogpageChangePassword',

    data() {
        return {
            isshow: false,
            oldpwd: '',
            newpwd: ''
        };
    },

    mounted() {
        
    },

    methods: {
        save() {
            if( this.oldpwd !== '' && this.newpwd !==''){
                const storage = window.localStorage
                changepassword(storage.getItem('user'),{oldPwd: this.oldpwd, newPwd: this.newpwd}).then(res => {
                    this.$toast.show(res.data.message,1500)
                    if(res.data.status === 0) {
                        this.isshow = false
                        storage.removeItem('user')
                        this.$store.dispatch('userreq')
                        this.$emit('save')
                    }
                })
                
            }
        },
        exit() {
            this.isshow = false
        }
    },
};
</script>

<style lang="css" scoped>



.changepassword {
    position: fixed;
    left: 15%;
    top: 51%;
    height: 200px;
    width: 250px;
    z-index: 9;
    background: #fff;
}
.changepassword input{
    margin-top: 8px;
    height: 30px;
    border-radius: 5px;
}
.but {
    margin-top: 30px;
    font-size: 18px;
    text-align: center;
}
.zj {
    width: 150px;
    height: 1px;
    display: inline-block;
}
</style>