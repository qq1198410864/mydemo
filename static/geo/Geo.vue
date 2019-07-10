<template>
  <div>{{location}}</div>
</template>
<script>
import BMap from 'BMap'
export default {
  data () {
    return {
      location: ''
    }
  },
  created () {
    // 获取城市名称
    // new BMap.localCity().get((result) => {})
    // 获取详细地址
    // 获取经纬度
    var geolocation = new BMap.Geolocation()
    geolocation.getCurrentPosition((r) => {
      // lng经度，lat纬度
      var p = new BMap.Point(r.point.lng, r.point.lat)
      // 根据经纬度获取地址
      var myGeo = new BMap.Geocoder()
      myGeo.getLocation(p, (result) => {
        if (result) {
          this.location = result.address
        }
      })
    })
  }
}
</script>
