<template>
    <div>
        <div class="aublisharticle" v-show="aublisharticle">
            <img :src="user_pic" alt="">
            <input type="text" @focus="artfocus">
        </div>
        <div class="PublishArticle" v-show="PublishArticle">
            <span class="exit" @click="exit">x</span>
            <textarea name="" id="" cols="30" rows="5" v-model="content"></textarea>
            <button class="but" @click="butclick" :disabled="content === ''">发布</button>
        </div>
    </div>
</template>

<script>
import {addart} from 'network/article'
export default {
    name: 'BlogpagePublishArticle',

    data() {
        return {
            user_pic: this.$store.state.user.user_pic,
            aublisharticle: true,
            PublishArticle: false,
            content: '',
        };
    },

    mounted() {
        
    },

    methods: {
        artfocus() {
            this.PublishArticle = true,
            this.aublisharticle = false
        },
        exit() {
            this.PublishArticle = false,
            this.aublisharticle = true
        },
        butclick() {
            const storage = window.localStorage
            if (!storage.getItem('user')) {
                this.$router.push('/login')
                this.$toast.show('请先登入',1500)
            }
            if(storage.getItem('user')) { 
                addart(storage.getItem('user'),{content: this.content}).then(res => {
                    this.$toast.show(res.data.message, 1500)
                    this.PublishArticle = false,
                    this.aublisharticle = true
                    this.$store.dispatch('getarticle')
                })
            }
            
        }
    },
};
</script>

<style lang="css" scoped>


.aublisharticle {
    width: 100%;
    position: fixed;
    bottom: 49px;
    background-color: #eee;
}
.aublisharticle img{
    height: 35px;
    width: 35px;
    position: relative;
    top: 5px;
    left: 5px;
    border-radius: 50%;
}
.aublisharticle input {
    width: 250px;
    padding: 5px;
    position: relative;
    top: -6px;
    left: 40px;
    border-radius:15px;
    border: 0;
}
.PublishArticle {
    padding-top: 10px;
    text-align: center;
    height: 150px;
    width: 300px;
    
    background-color:#eee;
    position: fixed;
    top: 40%;
    left: 12%;
}
.PublishArticle textarea {
    border: 0;
    outline: none;
}
.PublishArticle .but {
    position: relative;
    top: 5px;
    left: 103px;
    background-color:deepskyblue;
    border: 0;
    height: 30px;
    width: 60px;
    border-radius: 20px;
    color: #fff;
}
.exit {
    font-size: 20px;
    position: relative;
    top: -15px;
    left: -10px;
    height: 10px;
    width: 10px;
}
</style>