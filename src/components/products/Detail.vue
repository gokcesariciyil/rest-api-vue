<template>
  <div class="container">
    <div class="detail">
      <div class="row" v-if="proId === item.key" v-for="(item, index) in getMovies" :key="index">
        <div class="col-md-8">
          <ul>
            <h1>{{item.Title}}</h1>
            <li><span>Vizyon Yılı:</span> {{item.Year}}</li>
            <li><span>Film Süresi:</span> xx saat xx dakika</li>
            <li><span>Dil:</span> Türkçe</li>
            <li><span>Altyazı:</span> İngilizce</li>
            <li><span>Aktörler:</span> Daniella Carter, Laverne Cox.</li>
          </ul>
        </div>
        <div class="col-md-4">
          <div class="detail__img">
            <img :src='item.Poster' class="rounded img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'detail',
        data() {
            return {
                proId: this.$route.params.key,
            }
        },
        computed: {
            ...mapGetters(["getMovies"])
        }
    }
</script>

<style lang="scss" scoped>
  .detail {
    padding-top: 25px;
    padding-bottom: 90px;

    ul {
      li {
        span {
          font-size: 18px;
          color: #636363;
          font-weight: bold;
        }
      }
    }

    &__img {
      width: 374px;
      height: 242px;
      overflow: hidden;

      img {
        width: 100%;
        height: auto;
      }

    }
  }

</style>
