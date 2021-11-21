<template>
        <GoogleMap
        ref="mapRef"
            api-key="AIzaSyCd-AjuswdlIANt6_dua-zgVMf1jU1kf78"
            style="width: 100%; height: 165px"
            :center='this.center'
            :zoom="3"
          >
            <Polyline :options="this.options" /> 
          
           </GoogleMap>
</template>
<script>
import { GoogleMap, Polyline } from "vue3-google-map";
export default {
    components: { GoogleMap, Polyline },
    data() {
        return {
            center: { lat: 120.567977424533, lng: 24.3286993887771 },
            
        }
    },setup() {

  
    },
    props: {
        // center: Object,
        options: Array,
    },
    mounted() {
        console.log('+++++++++++++++++++++++++++');
        
        // console.log(this.center);
        console.log(this.options);
        
        
    },
    methods: {
          
    },
}
</script>