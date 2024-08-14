<template>
    <div class="hover-popup-wrap">
        <div class="desc-container">
            <div class="desc-row">
                <span class="desc-label">{{ `摄像头名称：` }}</span>
                <span class="desc-value">{{ postData.ecode }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        postData: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>

<style lang="less" scoped>
.hover-popup-wrap {
    .desc-container {
        .desc-row {
            &:first-child {
                margin-top: 0;
            }
            .desc-label {
                // color: #2ed6ef;
            }
        }
    }
}
</style>