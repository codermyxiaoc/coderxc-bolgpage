<template>
    <div class="artitem">
        <div class="head">
            <div><img :src="artitem.user_pic" alt=""></div>
            <div>
                <p class="word">{{artitem.nickname}}</p>
                <p class="time">{{ artitem.createtime | timefilt }}&nbsp;发布</p>
            </div>
        </div>
        <div class="content">
            {{ artitem.content}}
        </div>
        <span class="hf" @click="comment">{{ artitem.rep.length | letfilt }}回复></span>
        <span class="delete" v-show="isdelete" @click="artdelete">删除</span>
    </div>
</template>

<script>
import {delart} from 'network/article'
export default {
    name: 'BlogpageArtItem',

    data() {
        return {
            
        };
    },
    components: {
    },
    props: {
        artitem: {
            type: Object,
            defaule() {
                return {}
            }
        }
    },

    mounted() {    
    },
    methods: {
        artdelete() {
            const storage = window.localStorage
            if(storage.getItem('user')) {
                delart(storage.getItem('user'),{
                    comment_id: this.artitem.comment_id
                }).then(res => {
                    this.$toast.show(res.data.message,1500)
                    this.$store.dispatch('getarticle')
                })
            }
        },
        comment() {
            this.$router.push({
                path: '/comment',
                query: {
                    artitem: this.artitem,
                    comment_id: this.artitem.comment_id
                }
            })
        }
    },
    filters: {
        timefilt(value) {
            if(value !== undefined) {
                return value.substring(0, 10)
            }
            return ''
        },
        letfilt(value) {
            if(value !== undefined) {
                return value
            }
            return 0
        }
    },
    computed: {
        isdelete() {
            return this.$store.state.user.user_id === this.artitem.user_id
        }
    }
};
</script>

<style lang="css" scoped>

.artitem {
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.2);
    padding-bottom: 10px;
}
.head{
    display: flex;
    margin: 10px;
    
}
.head img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
.head>div p {
    margin: 0;
    margin-left: 15px;
    padding-top: 3px;
}
.head .word {
 font-size: 16px;
 font: 900;
}
.head .time {
    font-size: 12px;
}
.content {
    position: relative;
    top: -10px;
    left: 70px;
    right: 20px;
    width: 270px;
    white-space: normal;
    word-break: break-all;
    overflow: hidden;
}
.hf {
    font-size: 13px;
    margin-left: 19%;
    padding: 3px 10px;
    background-color:aqua;
    border-radius: 15px;
}
.delete {
    position: relative;
    left: 200px;
}
</style>