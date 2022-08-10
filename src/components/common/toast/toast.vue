<template>
    <div v-show="isshow" class="toast">
        {{message}}
    </div>
</template>

<script>
export default {
    name: 'MyxcmallToast',

    data() {
        return {
            message: '',
            isshow: false

        };
    },

    mounted() {
        
    },

    methods: {
        show(message = '默认文字',duration = 2000) {
            this.isshow = true
            this.message = message
            setTimeout(() => {
                this.isshow = false
                this.message = ''
            }, duration);
        }
    },
};
</script>

<style lang="css" scoped>

.toast {
    position: fixed;
    top: 50%;
    left: 50%;

    z-index: 9;

    background-color: rgba(0, 0, 0, 0.75);
    color: #fff;

    transform: translate(-50%,-50%);
    padding: 8px 10px;
}
</style>