<template>
  <div
    @touchstart="startDrag"
    @mousedown="startDrag"
    @touchmove="onDrag"
    @mousemove="onDrag"
    @mouseleave="endDrag"
    @touchend="endDrag"
    class="taurus-tab-container">
    <div
      ref="wrap"
      class="taurus-tab-container-wrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { once } from 'wind-dom/src/event';
import arrayFindIndex from 'array-find-index';

export default {
  name: 't-tab-container',

  props: {
    value: {},
    swipeable: Boolean
  },

  data () {
    return {
      start: { x: 0, y: 0 },
      swiping: false,
      activeItems: [],
      pageWidth: 0,
      currentActive: this.value
    };
  },

  watch: {
    value (val) {
      this.currentActive = val;
    },

    currentActive (val, oldValue) {
      this.$emit('input', val);
      if (!this.swipeable) return;
      const lastIndex = arrayFindIndex(this.$children,
        item => item.id === oldValue);
      this.swipeLeaveTransition(lastIndex);
    }
  },

  mounted () {
    if (!this.swipeable) return;

    this.wrap = this.$refs.wrap;
    this.pageWidth = this.wrap.clientWidth;
    this.limitWidth = this.pageWidth / 4;
  },

  methods: {
    swipeLeaveTransition (lastIndex = 0) {
      if (typeof this.index !== 'number') {
        this.index = arrayFindIndex(this.$children,
          item => item.id === this.currentActive);
        this.swipeMove(-lastIndex * this.pageWidth);
      }

      setTimeout(() => {
        this.wrap.classList.add('swipe-transition');
        this.swipeMove(-this.index * this.pageWidth);

        once(this.wrap, 'webkitTransitionEnd', _ => {
          this.wrap.classList.remove('swipe-transition');
          this.wrap.style.webkitTransform = '';
          this.swiping = false;
          this.index = null;
        });
      }, 0);
    },

    swipeMove (offset) {
      this.wrap.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
      this.swiping = true;
    },

    startDrag (evt) {
      evt = evt.changedTouches ? evt.changedTouches[0] : evt;
      this.dragging = true;
      this.start.x = evt.pageX;
      this.start.y = evt.pageY;
    },

    onDrag (evt) {
      if (!this.dragging) return;
      let swiping;
      const e = evt.changedTouches ? evt.changedTouches[0] : evt;
      const offsetTop = e.pageY - this.start.y;
      const offsetLeft = e.pageX - this.start.x;
      const y = Math.abs(offsetTop);
      const x = Math.abs(offsetLeft);

      swiping = !(x < 5 || (x >= 5 && y >= x * 1.73));
      if (!swiping) return;
      evt.preventDefault();

      const len = this.$children.length - 1;
      const index = arrayFindIndex(this.$children,
        item => item.id === this.currentActive);
      const currentPageOffset = index * this.pageWidth;
      const offset = offsetLeft - currentPageOffset;
      const absOffset = Math.abs(offset);

      if (absOffset > len * this.pageWidth ||
          (offset > 0 && offset < this.pageWidth)) {
        this.swiping = false;
        return;
      }

      this.offsetLeft = offsetLeft;
      this.index = index;
      this.swipeMove(offset);
    },

    endDrag () {
      if (!this.swiping) return;

      const direction = this.offsetLeft > 0 ? -1 : 1;
      const isChange = Math.abs(this.offsetLeft) > this.limitWidth;

      if (isChange) {
        this.index += direction;
        const child = this.$children[this.index];
        if (child) {
          this.currentActive = child.id;
          return;
        }
      }

      this.swipeLeaveTransition();
    }
  }
};
</script>


