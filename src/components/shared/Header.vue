<template>
  <div class="header">
    <div class="container" :visible="show">
      <h1 class="header__title">Lorem Ipsum<br/>
        Dolor sit amet consectetur..
      </h1>
      <p class="header__subtitle">Lorem ipsum dolor sit amet, consectetur<br/> adipisicing elit, sed do eiusmod tempor.
      </p>
      <button type="button" class="btn btn-primary header__button">CTA BUTTON</button>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Header",
        show: true
        ,
        watch: {
            $route(to, from, next) {
                this.show = false;
                next();
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

  .header {
    background-image: url("../../assets/hero.png");
    height: 100%;
    min-height: 350px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-bottom: 1px solid #ce1c1f;

    &__title {
      padding-top: 50px;
      font-size: 36px;
    }

    &__subtitle {
      font-size: 24px;
      color: #070707;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      padding-top: 40px;
    }

    &__button {
      width: 355px;
      height: 60px;
      background: #376fe1;
      border-radius: 5px;
      font-size: 18px;
    }
  }
</style>
