<template>
  <div class="picker-slot" :class="classNames" :style="flexStyle">
    <div v-if="!divider" ref="wrapper" class="picker-slot-wrapper" :class="{ dragging: dragging }" :style="{ height: contentHeight + 'px' }">
      <div class="picker-item" v-for="itemValue in mutatingValues" :class="{ 'picker-selected': itemValue === currentValue }">
        {{ typeof itemValue === 'object' && itemValue[valueKey] ? itemValue[valueKey] : itemValue }}
      </div>
    </div>
    <div v-if="divider">{{ content }}</div>
  </div>
</template>

<script>
  import draggable from './draggable';
  import translateUtil from './translate';
  import { once } from 'wind-dom/src/event';
  import { addClass, removeClass } from 'wind-dom/src/class';
  import 'raf.js';

  var rotateElement = function (element, angle) {
    if (!element) return;
    var transformProperty = translateUtil.transformProperty;

    element.style[transformProperty] = element.style[transformProperty].replace(/rotateX\(.+?deg\)/gi, '') + ` rotateX(${angle}deg)`;
  };

  const ITEM_HEIGHT = 36;
  const VISIBLE_ITEMS_ANGLE_MAP = {
    3: -45,
    5: -20,
    7: -15
  };

  export default {
    name: 't-picker-slot',
    props: {
      values: {
        type: Array,
        default () {
          return [];
        }
      },
      value: {},
      visibleItemCount: {
        type: Number,
        default: 5
      },
      valueKey: String,
      rotateEffect: {
        type: Boolean,
        default: false
      },
      divider: {
        type: Boolean,
        default: false
      },
      textAlign: {
        type: String,
        default: 'center'
      },
      flex: {},
      className: {},
      content: {}
    },

    data () {
      return {
        currentValue: this.value,
        mutatingValues: this.values,
        dragging: false,
        animationFrameId: null
      };
    },
    computed: {
      flexStyle () {
        return {
          'flex': this.flex,
          '-webkit-box-flex': this.flex,
          '-moz-box-flex': this.flex,
          '-ms-flex': this.flex
        };
      },
      classNames () {
        const PREFIX = 'picker-slot-';
        let resultArray = [];

        if (this.rotateEffect) {
          resultArray.push(PREFIX + 'absolute');
        }

        let textAlign = this.textAlign || 'center';
        resultArray.push(PREFIX + textAlign);

        if (this.divider) {
          resultArray.push(PREFIX + 'divider');
        }

        if (this.className) {
          resultArray.push(this.className);
        }

        return resultArray.join(' ');
      },
      contentHeight () {
        return ITEM_HEIGHT * this.visibleItemCount;
      },
      valueIndex () {
        return this.mutatingValues.indexOf(this.currentValue);
      },
      dragRange () {
        var values = this.mutatingValues;
        var visibleItemCount = this.visibleItemCount;

        return [ -ITEM_HEIGHT * (values.length - Math.ceil(visibleItemCount / 2)), ITEM_HEIGHT * Math.floor(visibleItemCount / 2) ];
      }
    },

    methods: {
      value2Translate (value) {
        var values = this.mutatingValues;
        var valueIndex = values.indexOf(value);
        var offset = Math.floor(this.visibleItemCount / 2);

        if (valueIndex !== -1) {
          return (valueIndex - offset) * -ITEM_HEIGHT;
        }
      },

      translate2Value (translate) {
        translate = Math.round(translate / ITEM_HEIGHT) * ITEM_HEIGHT;
        var index = -(translate - Math.floor(this.visibleItemCount / 2) * ITEM_HEIGHT) / ITEM_HEIGHT;

        return this.mutatingValues[index];
      },

      updateRotate: function (currentTranslate, pickerItems) {
        if (this.divider) return;
        var dragRange = this.dragRange;
        var wrapper = this.$refs.wrapper;

        if (!pickerItems) {
          pickerItems = wrapper.querySelectorAll('.picker-item');
        }

        if (currentTranslate === undefined) {
          currentTranslate = translateUtil.getElementTranslate(wrapper).top;
        }

//        var itemsFit = Math.ceil(this.visibleItemCount / 2);
        var angleUnit = VISIBLE_ITEMS_ANGLE_MAP[this.visibleItemCount] || -20;

        [].forEach.call(pickerItems, (item, index) => {
          var itemOffsetTop = index * ITEM_HEIGHT;
          var translateOffset = dragRange[1] - currentTranslate;
          var itemOffset = itemOffsetTop - translateOffset;
          var percentage = itemOffset / ITEM_HEIGHT;

          var angle = angleUnit * percentage;
          if (angle > 180) angle = 180;
          if (angle < -180) angle = -180;

          rotateElement(item, angle);

          if (Math.abs(percentage) > itemsFit) {
            addClass(item, 'picker-item-far');
          } else {
            removeClass(item, 'picker-item-far');
          }
        });
      },

      planUpdateRotate: function () {
//        var el = this.$refs.wrapper;
        cancelAnimationFrame(this.animationFrameId);

        this.animationFrameId = requestAnimationFrame(() => {
          this.updateRotate();
        });

        once(el, translateUtil.transitionEndProperty, () => {
          this.animationFrameId = null;
          cancelAnimationFrame(this.animationFrameId);
        });
      },

      initEvents () {
        var el = this.$refs.wrapper;
        var dragState = {};

        var velocityTranslate, prevTranslate, pickerItems;

        draggable(el, {
          start: (event) => {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
            dragState = {
              range: this.dragRange,
              start: new Date(),
              startLeft: event.pageX,
              startTop: event.pageY,
              startTranslateTop: translateUtil.getElementTranslate(el).top
            };
            pickerItems = el.querySelectorAll('.picker-item');
          },

          drag: (event) => {
            this.dragging = true;

            dragState.left = event.pageX;
            dragState.top = event.pageY;

            var deltaY = dragState.top - dragState.startTop;
            var translate = dragState.startTranslateTop + deltaY;

            translateUtil.translateElement(el, null, translate);

            velocityTranslate = translate - prevTranslate || translate;

            prevTranslate = translate;

            if (this.rotateEffect) {
              this.updateRotate(prevTranslate, pickerItems);
            }
          },

          end: () => {
            this.dragging = false;

            var momentumRatio = 7;
            var currentTranslate = translateUtil.getElementTranslate(el).top;
            var duration = new Date() - dragState.start;

            var momentumTranslate;
            if (duration < 300) {
              momentumTranslate = currentTranslate + velocityTranslate * momentumRatio;
            }

            var dragRange = dragState.range;

            this.$nextTick(() => {
              var translate;
              if (momentumTranslate) {
                translate = Math.round(momentumTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
              } else {
                translate = Math.round(currentTranslate / ITEM_HEIGHT) * ITEM_HEIGHT;
              }

              translate = Math.max(Math.min(translate, dragRange[1]), dragRange[0]);

              translateUtil.translateElement(el, null, translate);

              this.currentValue = this.translate2Value(translate);

              if (this.rotateEffect) {
                this.planUpdateRotate();
              }
            });

            dragState = {};
          }
        });
      },
      // 此方法后续考虑去掉!!
      dispatch (componentName, eventName, params) {
        var parent = this.$parent;
        var name = parent.$options.componentName;

        while (parent && (!name || name !== componentName)) {
          parent = parent.$parent;

          if (parent) {
            name = parent.$options.componentName;
          }
        }
        if (parent) {
          parent.$emit.apply(parent, [eventName].concat(params));
        }
      },
      doOnValueChange () {
        var value = this.currentValue;
        var wrapper = this.$refs.wrapper;

        translateUtil.translateElement(wrapper, null, this.value2Translate(value));
      },

      doOnValuesChange () {
        var el = this.$el;
        var items = el.querySelectorAll('.picker-item');
        [].forEach.call(items, (item, index) => {
          translateUtil.translateElement(item, null, ITEM_HEIGHT * index);
        });
        if (this.rotateEffect) {
          this.planUpdateRotate();
        }
      }
    },

    mounted () {
      this.ready = true;
      this.$emit('input', this.currentValue);

      if (!this.divider) {
        this.initEvents();
        this.doOnValueChange();
      }

      if (this.rotateEffect) {
        this.doOnValuesChange();
      }
    },

    watch: {
      values (val) {
        this.mutatingValues = val;
      },

      mutatingValues (val) {
        if (this.valueIndex === -1) {
          this.currentValue = (val || [])[0];
        }
        if (this.rotateEffect) {
          this.$nextTick(() => {
            this.doOnValuesChange();
          });
        }
      },
      currentValue (val) {
        this.doOnValueChange();
        if (this.rotateEffect) {
          this.planUpdateRotate();
        }
        this.$emit('input', val);
        this.dispatch('picker', 'slotValueChange', this);
      }
    }
  };
</script>


