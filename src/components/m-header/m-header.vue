<template>
  <div class="m-header">
    <i class="icon-music-logo"></i>
    <h1 class="text">Bobby John</h1>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/variable"
  @import "../../common/stylus/mixin"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon-music-logo
      display: inline-block
      vertical-align: top
      font-size: 30px
      line-height: 44px
      margin-right: 10px
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
</style>
