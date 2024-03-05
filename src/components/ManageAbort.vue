<template>
    <div class="father">
        <div class="head">设备概况</div>
        <div class="main">
            <el-card style="background-color:rgba(5,193,116,1);">
                <span>扦样机</span>
                <div class="content">共{3}台，查看详情>></div>
            </el-card>
            <el-card style="background-color: rgba(255,211,68,1);">
                <span>扦样机</span>
                <div class="content">共{3}台，查看详情>></div>
            </el-card>
            <el-card style="background-color: rgba(222,134,143,1);">
                <span>扦样机</span>
                <div class="content">共{3}台，查看详情>></div>
            </el-card>
            <el-card style="background-color: rgba(100,140,255,1);">
                <span>扦样机</span>
                <div class="content">共{3}台，查看详情>></div>
            </el-card>
        </div>
    </div>
</template>

<script setup>

</script>
<style scoped>
.father{
    position: relative;
    top: 1.25rem;
    left:3.75vw;
    width: 79vw;
    height: 19vh;
    border-radius: 0.5rem;
    background-color: rgba(255,255,255,1);
    color: rgba(16,16,16,1);
    box-shadow: 0rem 0.13rem 0.38rem 0rem rgba(0,0,0,0.4);
    font-family: Roboto;
    border: 0.06rem solid rgba(255,254,254,1);
}
.head{
    font-size: 1.04vw;
    width: 79.69vw;
    height: 4vh;
    line-height: 1.81rem;
    color: rgb(16,16,16);
    text-align: left;
    font-family: SourceHanSansSC-bold;
    margin-left: 1.11VW;
}
.main{
    width: 79.69vw;
    display: flex;
    justify-content: space-around;
}
.el-card{
    width: 17.7vw;
    height:11.5vh;
    
}
span{
    font-size: 1.25vw;
    color: aliceblue;
    line-height: 1.875vw;
    margin-left: 1px;
}
.content{
    font-size: 0.733vw;
    color: aliceblue;
    line-height: 1.041vw;
    margin-left: 1px;
}
</style>

