<template>
    <div class="common-layout">
      <el-container>
        <el-aside :width="CollapseStore.isCollapse ? '4.0625rem' : '16.25vw'" class="asider">
          <LeftBar></LeftBar>
        </el-aside>
        <el-container>
          <el-header class="header">
            <Header></Header>
          </el-header>
            <Tags></Tags>
          <el-main class="main">
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import Tags from '../components/tags.vue'
  import LeftBar from '../components/LeftBar.vue'
  import Header from '../components/Header.vue'
  import { useCollapseStore } from '../store/collapse';
  
  
  //折叠
  const CollapseStore = useCollapseStore();
  </script>
  
  <style scoped >

  *{
    overflow-x: hidden;
  }
  .asider {
    height: 100vh;
    transition: width 0.2s;
  }
  
  .main {
    height: calc(90vh);
    box-shadow: rgba(204, 219, 232, 0.5) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
    padding: 0;
    overflow-x: hidden;
  }
  
  .header {
    height: 5.93vh;
    background-color: rgba(251,250,250,1);
  }
  </style>