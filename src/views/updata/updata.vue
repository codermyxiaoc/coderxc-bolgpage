<template>
    <div class="updata">
        <nav-bar>
            <div slot="center">信息修改</div>
        </nav-bar>
        <user-updata></user-updata>
    </div>
</template>

<script>

import NavBar from 'components/common/navbar/navbar.vue';
import UserUpdata from './chliercomps/UserUpdate.vue'
export default {
    name: 'BlogpageUpdata',

    data() {
        return {
            
        };
    },
    components: {
        NavBar,
        UserUpdata
    },

    mounted() {
        
    },

    methods: {
        
    },
   
};
</script>

<style lang="css" scoped>

</style>