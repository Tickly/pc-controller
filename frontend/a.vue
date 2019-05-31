<template>
  <div class="lengQueTa">
    <div v-for="(n,i) in list" :key="i" class="rain" :style="{ transform:`rotate(-15deg) translate(${n.left}px,${n.top}px)`, height: n.height + 'px'}"></div>
  </div>
</template>

<script>
import TWEEN from '@tweenjs/tween.js'

// 随机生成数字
//含最大值，含最小值 
function getRandomIntInclusive([min, max]) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function animate(time) {
  requestAnimationFrame(animate);
  TWEEN.update(time);
}
requestAnimationFrame(animate);

export default {
  data() {
    let area_width = screen.availWidth,
      area_height = screen.availHeight;

    return {
      show: true,
      left: null,
      top: null,
      height: null,

      list: [],
      // 定义一个范围，在此范围内随机生成初始坐标
      area_left: [-area_width, area_width],
      area_top: [-area_height / 2, area_height / 2],
      // 最终坐标，相对于屏幕右下角的偏移量
      area_right: [area_width / 2, area_width],
      area_bottom: [area_height, area_height + 50],
      // 雨滴大小
      rain_height: [15, 55],
      // 雨滴所在矩形大小，可以是屏幕尺寸，后期也可以固定一个大小，不一定全屏
      area_width,
      area_height,
    }
  },
  // 组件初始化的时候，生成一批雨滴，
  created() {
    for (let i = 0; i < 120; i++) {
      setTimeout(() => {
        this.addRain(this.newRain())
      }, i * 10);
    }
  },
  methods: {
    addRain(rain) {
      let i = this.list.push(rain) - 1;
      this.move(i);
    },
    onMoveEnd(i) {
      this.$set(this.list, i, this.newRain())
      this.move(i);
    },
    move(i) {
      let rain = this.list[i];
      new TWEEN.Tween(rain)
        // 1000ms 移动到目的地
        .to({
          left: rain.to_left,
          top: rain.to_top,
        }, 2000)
        // 移动完了之后
        .onComplete(() => {
          this.onMoveEnd(i);
        })
        .start()
    },

    // 生成一个雨滴
    newRain() {
      // 如果你愿意，可以在加一个duration，让每个雨滴的速度都不一样
      let rain = {
        // 初始位置 
        left: getRandomIntInclusive(this.area_left),
        top: getRandomIntInclusive(this.area_top),
        // 目标位置 相对于右下角的点(width,height)
        // to_left: getRandomIntInclusive(this.area_right),
        // to_top: getRandomIntInclusive(this.area_bottom),
        height: getRandomIntInclusive(this.rain_height),
      }

      // 计算便宜
      rain.to_left = rain.left + this.area_width * .6
      rain.to_top = rain.top + this.area_height * 1.2

      return rain;
    },
  }
}
</script>


<style scoped>
.lengQueTa {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to bottom, #00b6c5, #009fc5);
  overflow: hidden;
}

.rain {
  position: absolute;
  top: 0;
  left: 0;
  width: 2px;
  opacity: 0.6;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.4)
  );
  /* animation: move_rain 2s linear; */
  /* -webkit-animation: move_rain 2s linear infinite; */
}
</style>
