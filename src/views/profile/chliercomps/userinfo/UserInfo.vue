<template>
    <div class="userinfo">
        <div>
            <div>签&nbsp;&nbsp;&nbsp;&nbsp;名</div>
            <div>{{ user.per_sig }}</div>
        </div>
        <div>
            <div>昵&nbsp;&nbsp;&nbsp;&nbsp;称</div>
            <div>{{ user.nickname }}</div>
        </div>
        <div>
            <div>手&nbsp;&nbsp;&nbsp;&nbsp;机</div>
            <div>{{ user.cell_phone | phonefil}}</div>
        </div>
        <div>
            <div>性&nbsp;&nbsp;&nbsp;&nbsp;别</div>
            <div>{{ this.user.sex }}</div>
        </div>
        <div>
            <div>邮&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
            <div>{{ this.user.email }}</div>
        </div>
        <div class="pudata" @click="updata">信息修改</div>
    </div>

</template>

<script>
export default {
    name: 'BlogpageUserInfo',

    data() {
        return {
        };
    },
    props: {
        user: Object,
        default() {
            return {}
        }
    },

    mounted() {
        
    },

    methods: {
        updata() {
            this.$router.push('/updata')
        }
    },
    filters: {
        phonefil(value) {
            if(value !== undefined) {
                return value.substring(0, 3) + '****' + value.substr(value.length - 3)
            }
            return ''
        }
    }
};
</script>

<style lang="css" scoped>


.userinfo {
    margin-top: 40px;
    text-align: center;
}
.userinfo img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.userinfo>div {
    width: 300px;
    margin-top: 30px;
    text-align: center;
    display: flex;
}
.userinfo>div>div {
    flex: 1;
}
.userinfo .pudata {
    margin-top: 120px;
    margin-left: 150px;
    width: 100px;
}
</style>