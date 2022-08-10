<template>
    <div id="home">
        <nav-bar>
            <div slot="center">博客</div>
        </nav-bar>
        <art></art>
        <publish-article></publish-article>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/navbar.vue'

import Art from './chliercomps/art/Art.vue';
import PublishArticle from './chliercomps/PublishArticle/PublishArticle.vue'
export default {
    name: 'BloypageHome',
    data() {
        return {
            
        };
    },
    components: {
        NavBar, 
        Art,
        PublishArticle
    },

    mounted() {
        
    },

    methods: {
        
    },
    
    
};
</script>

<style lang="css" scoped>


#home {
    height: 100vh;
}

</style>