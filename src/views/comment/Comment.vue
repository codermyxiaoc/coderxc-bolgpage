<template>
    <div id="comment">
        <nav-bar>
            <div slot="left" class="left">
                <img src="../../assets/images/left.png" alt="">
            </div>
            <div slot="center">评论回复</div>
        </nav-bar>
        <div></div>
        <comment-head :artitem="artitem"></comment-head>
        <div>全部回复</div>
        <scroll ref="scroll" class="content" :probeType="0" :pullingUp="true">
            <coment-item :artitem="item" v-for="item in comment" :key="item.replyuser_id"></coment-item>
        </scroll>
        <publish-comment :comment_id=" this.$route.query.comment_id"></publish-comment>
    </div>
</template>

<script>
import PublishComment from './chliercomps/PublishComment/PublishComment.vue';
import CommentHead from './chliercomps/CommentHead/CommentHead.vue';
import NavBar from 'components/common/navbar/navbar.vue';
import ComentItem from './chliercomps/CommentItem/CommentItem.vue'
import Scroll from 'components/common/scroll/scroll.vue';

import { mapState } from 'vuex';
export default {
    name: 'BlogpageComment',

    data() {
        return {
            artitem: this.$route.query.artitem,
        };
    },
    components: {
        NavBar,
        ComentItem,
        PublishComment,
        CommentHead,
        Scroll,
    },

    mounted() {
        if (JSON.stringify(this.$route.query.artitem) === '"[object Object]"') {
            this.$router.go(-1)
        }
        this.$store.dispatch('getcommemt', this.$route.query.comment_id)
    },

    methods: {
        
    },
    computed: {
        ...mapState({ comment: state => state.comment})
    },
   
};
</script>

<style lang="css" scoped>

#comment {
    height: 100vh;
}
.content {
    overflow: hidden;
    position: absolute;
    top: 190px;
    bottom: 93px;
    right: 0px;
    left: 0px;
}
.left img {
    height: 25px;
    height: 25px;
}
</style>