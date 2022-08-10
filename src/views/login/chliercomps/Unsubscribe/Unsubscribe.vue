<template>
    <div class="unsubscribe" v-show="isshow">
        <h2>账号注销</h2>
        密码:&nbsp;<input type="password" v-model="password">
        <div class="but">
            <span @click="save">注销</span>
            <span class="zj"></span>
            <span @click="exit">退出</span>

        </div>
    </div>
</template>

<script>
import {unsubscribe} from 'network/user'
export default {
    name: 'BlogpageUnsubscribe',

    data() {
        return {
            isshow: false,
            password: ''
        };
    },

    mounted() {
        
    },

    methods: {
        exit() {
            this.isshow = false
        }, 
        save () {
            if(this.password !== '') {
                const storage = window.localStorage
                unsubscribe(storage.getItem('user'),{password: this.password}).then(res => {
                    this.$toast.show(res.data.message,1500)
                    if(res.data.status === 0) {
                        this.isshow = false
                        storage.removeItem('user')
                        this.$store.dispatch('userreq')
                        this.$emit('save')
                    }
                })
                
            }
        }
    },
};
</script>

<style lang="css" scoped>



.unsubscribe {
    position: fixed;
    left: 15%;
    top: 51%;
    height: 200px;
    width: 250px;
    z-index: 9;
    background: #fff;
}

.unsubscribe input {
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