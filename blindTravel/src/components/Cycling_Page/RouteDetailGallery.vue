<template>
  <div>One Route Detail
    {{ this.RouteFromDetail.RouteName }}
    {{ this.RouteFromDetail.City }}
    </div>
</template>
<script>
export default {
  name: "Routedetailgallery",
  props: ["RouteFromDetail"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>
