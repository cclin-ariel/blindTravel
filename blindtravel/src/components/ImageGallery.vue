<template>
  <div>
    <div>
      <div class="row">
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/900/900"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/800/800"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/700/700"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/500/500"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/700/700"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/600/600"
            alt="img"
          />
        </div>
      </div>

      <div class="row">
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/600/600"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/900/900"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/500/500"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/800/800"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/600/600"
            alt="img"
          />
        </div>
        <div class="col-md-2 col-sm-4 col-xs-4 photo">
          <div class="title">
            <p>大草原</p>
            <p>台東縣</p>
          </div>
          <img
            class="img-thumbnail"
            src="https://picsum.photos/700/700"
            alt="img"
          />
        </div>
      </div>
    </div>
    <div v-if="true" class="d-flex justify-content-center">
      <div class="spinner-border text-secondary m-5" role="status">
        <span class=""></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImageGallery",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
<style scoped>
.col-md-2 {
  padding: 0;
}
.photo:hover > .title {
  display: block;
}
.photo:hover > img {
  filter: blur(2px) grayscale(70%);
  transition: 0.3s;
}
.photo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  display: none;
  position: absolute;
  font-family: "Noto Serif TC", serif;
  color: rgb(247, 240, 230);
  z-index: 99;
}

.title p:first-child{
    font-size: .8em;
    letter-spacing: 3.2px;
    text-align: center;
}
.title p:last-child{
    font-size: .1em;
    letter-spacing: 1.6px;
    text-align: center;
    margin: 0;
}
@media (min-width: 768px) {
.title p:first-child{
    font-size: 1.8em;
    letter-spacing: 3.2px;
    text-align: center;
}
.title p:last-child{
    font-size: .8em;
    letter-spacing: 1.6px;
    text-align: center;
}
}
</style>
