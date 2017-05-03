<template>
  <div class="main">
    <div class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button class="navbar-toggle" data-toggle="collapse" data-target="#dish-list">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div class="navbar-brand">
            <router-link to="/" class="blue-font h3">开饭啦</router-link>
          </div>
        </div>
        <div class="collapse navbar-collapse">
          <!-- todo：main菜单导航条设置-->
        </div>
      </div>
    </div>
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'main',
    data() {
      return {
        transitionName:'slide-right'
      }
    },
    watch:{
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .slide-right-enter-active,.slide-right-leave-active{
      transition:all .5s ease;
  }
  .slide-right-enter{
      transform:translateX(-100%);
  }
  .slide-right-leave-active{
     transform:translateX(100%);
   }

  .slide-left-enter-active,.slide-left-leave-active{
    transition:all .5s ease;
  }
  .slide-left-enter{
    transform:translateX(100%);
  }
  .slide-left-leave-active{
    transform:translateX(-100%);
  }
</style>
