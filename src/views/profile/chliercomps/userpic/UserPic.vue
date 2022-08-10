<template>
    <div class="pic">

        <img :src="userpic" alt="" @click="updatepic">
        <div class="updata" v-show="ispicshow">
            修改头像
            <input type="file" id="avatar" ref="file">
            <div class="but">
                <span @click="updatauserpic">保存</span>
                <span class="zj"></span>
                <span @click="exituopic">退出</span>
            </div>
        </div>
    </div>
</template>

<script>
import { updatepic } from 'network/user'
export default {
    name: 'BlogpageUserPic',
    
    data() {
        return {
            ispicshow: false
        };
    },
    props: {
        userpic: {
            type: String,
            default: ''
        }
    },

    mounted() {
    },

    methods: {
        updatepic() {
            this.ispicshow = true
        }, 
        exituopic() {
            this.ispicshow = false
        },
        updatauserpic() {
            let storage = window.localStorage
            let fromdata = new FormData()
            fromdata.append('avatar', this.$refs.file.files[0])
            if (storage.getItem('user')) {
                updatepic(storage.getItem('user'),fromdata).then(res => {
                    if(res.data.status === 0) {
                        this.ispicshow = false
                        this.$toast.show(res.data.message, 1500)
                        this.$store.dispatch('userreq')
                    }
                })
            }
            
        }
    },
};
</script>

<style lang="css" scoped>

.pic {
    margin-top: 40px;
    text-align: center;
}

.pic img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.updata {
    width: 200px;
    height: 200px;
    background-color: pink;
    position: fixed;
    top: 50%;
    left: 50%; 
    z-index: 9;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
}
.updata input {
    margin-top: 50px;

}
.updata .but {
    height: 20px;
    margin-top: 50px;
}
.updata .zj {
    display: inline-block;
    width: 50px;
    height: 1px;
}
</style>