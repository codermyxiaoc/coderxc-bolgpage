<template>
    <div id="art">
        <scroll ref="scroll" class="content" :probeType="0" :pullingUp="true">
            <art-item :artitem="item" v-for="item in article" :key="item.comment_id"></art-item>
        </scroll>
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/scroll.vue';
import ArtItem from '../artitem/ArtItem.vue';
import { mapState } from 'vuex';
export default {
    name: 'BlogpageArt',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    components: {
        Scroll,
        ArtItem
    },

    methods: {
        
    },
    computed: {
        ...mapState({ article: state => state.article })
    },
    
};
</script>

<style lang="css" scoped>


.art {
    position: relative;
}
.content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 93px;
    right: 0px;
    left: 0px;
}
</style>