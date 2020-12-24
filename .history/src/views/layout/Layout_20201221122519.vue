<template>
    <div>
        <!-- 公共样式 -->
         <div class="header">
        <navTop></navTop>
    </div>
    <div class="container">
        <div class="aside">
            <div id="asd">
                <navLeft></navLeft>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</template>
<style lang="scss">
  .header {
    height: 70px;
    line-height: 70px;
    position: fixed;
    top: 0;
    background: rgb(40, 91, 134);
    width: 100%;      

    67
    z-index: 99;
    color: white;
}

// 把下面撑满
#asd ul {
    height: 1500px;
    border-right: 0;
}

.container {
    display: flex;
    width: calc(100% - 200px);

    .aside {
        width: 200px;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 70px;
    }

    .main {
        flex: 1;
        position: relative;
        left: 200px;
        top: 60px;
        padding: 20px;
        background: rgb(231, 233, 236);
    }
}  
</style>