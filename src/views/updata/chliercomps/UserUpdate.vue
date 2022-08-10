<template>
    <div class="userupdata">
        <div>
            <div>昵称</div>
            <div>{{user.nickname}}</div>
            <div><input type="text" v-model="nickname"></div>
        </div>
        <div>
            <div>邮箱</div>
            <div>{{ user.email }}</div>
            <div><input type="text" v-model="email"></div>
        </div>
        <div>
            <div>性别</div>
            <div></div>
            <div class="sex">
                <input type="radio" name="sex" data-sex="女" @change="radioclick" :checked="user.sex ==='女'">女
                <input type="radio" name="sex" data-sex="男" @change="radioclick" :checked="user.sex ==='男'">男
            </div>
        </div>
        <div>
            <div>签名</div>
            <div>{{ user.per_sig }}</div>
            <div><input type="text" v-model="per_sig"></div>
        </div>
        <div></div>
        <div class="but">
            <span @click="exit">退出</span>
            <span class="zj"></span>
            <span @click="save">保存</span>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { updateinfo } from 'network/user'
export default {
    name: 'BlogpageUserUpdate',

    data() {
        return {
            nickname: '',
            email: '',
            sex: '',
            per_sig: '',
        };
    },

    mounted() {
        
    },

    methods: {
        radioclick(event) {
            this.sex = event.target.dataset.sex
        },
        exit() {
            this.$router.go(-1)
        },
        save() {
            let user = {}
            if(this.nickname !== '') {
                user.nickname = this.nickname
            }
            if (this.email !== '') {
                user.email = this.email
            }
            if (this.sex !== '') {
                user.sex = this.sex
            }
            if (this.per_sig !== '') {
                user.per_sig = this.per_sig
            }
            const storage = window.localStorage
            if (JSON.stringify(user) !== '{}') {
                updateinfo(storage.getItem('user'), user).then(res => {
                    this.$toast.show(res.data.message,1500)
                    this.$store.dispatch('userreq')
                })
            }
        }
    }, 
    computed: {
        ...mapState({ user: state => state.user })
    },
  

};
</script>

<style lang="css" scoped>


.userupdata {
    margin-top: 40px;
    text-align: center;
}
.userupdata>div {
    margin-top: 20px;
    display: flex;
    
}
.userupdata>div>div {
    flex: 1;
    overflow: hidden;
}
.userupdata>div>div input {
    height: 30px;
    width: 100px;
    border: 0px;
    
    border-bottom: 1px solid #000;
    outline: none;
}
.sex input {
    height: 20px!important;
    width: 20px!important;
    margin-left: 3px;
}
.but {
    margin-left: 55px;
}
.zj {
    display: flex;
    width: 200px;
    height: 1px;
}
</style>