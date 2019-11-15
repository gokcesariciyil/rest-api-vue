<template>
  <div class="container home">
    <div class="mt-3">
      <div class="row no-gutters mb-3" v-for="(movie, index) in getMovies" :key="index">
        <div class="col-md-2">
          <h1>Film Adı:</h1>
          <div class="home__img">
            <img :src='movie.Poster' class="rounded img-fluid"/>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card-body">
            <h5 class="card-title">{{movie.Title}}</h5>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dictum varius ultricies.
              Ut malesuada lobortis hendrerit. Aenean tincidunt cursus orci in auctor.
            </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="home__point">
            <span class="home__count">Yıl : {{movie.Year}}</span>
<!--            <router-link-->
<!--              tag="button"-->
<!--              @click="goTodetail(movie.key)"-->
<!--              class="btn btn-primary">-->
<!--              DETAY-->
<!--            </router-link>-->
            <button @click="goTodetail(movie.key)" class="btn btn-primary">DETAY</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                selectedMovie: null,

            }
        },
        computed: {
            ...mapGetters(["getMovies"])
        },
        methods: {
            goTodetail(proId) {
                this.$router.push({name: 'detail', params: {key: proId}})
            }

        }
    }
</script>
<style lang="scss">
  .home {

    .no-gutters {
      background: #fff;
    }

    h1 {
      font-size: 20px;
      color: #636363;
      font-weight: 700;
      text-align: center;
      padding-top: 15px;
      padding-bottom: 25px;
    }

    &__img {
      display: flex;
      justify-content: center;

      img {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 92px;
        width: 92px;
      }
    }

    &__point {
      position: relative;
      height: 100%;

      .home__count {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 20px;
        color: #ec561b;
        font-family: "Open Sans";
        font-weight: 700;
        text-align: right;
      }

      .btn.btn-primary {
        position: absolute;
        bottom: 10px;
        right: 20px;
        height: 43px;
        width: 208px;
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
</style>
