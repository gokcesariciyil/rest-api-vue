<template>
  <div id="app">
    <app-header></app-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
    import Header from './components/shared/Header';
    import Footer from './components/shared/Footer';

    export default {
        name: 'app',
        components: {
            appHeader: Header,
            appFooter: Footer,
        },
        created() {
            this.$store.dispatch("initApp");
        }

    }

</script>
<style lang="scss">
  body{
    background: #c7c7c7;
  }
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity .3s ease-out;
  }

  .fade-leave {
  }

  .fade-leave-active {
    transition: opacity .3s ease-out;
    opacity: 0;
  }
</style>
