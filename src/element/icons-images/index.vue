<template>
  <div>
    <!-- Page header -->
    <div class="trailer--large">
      <div class="text-size--36 trailer--section title__color text--telenor-light">Atom icons</div>
    </div>
    <!-- SG Components -->
    <div id="sgComponentWrapper">
      <div id="icons" class="doc-compontent-box">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Icons</h3>
        </div>
        <div class="sg-content container grid-row grid-row--gutter-none">
          <div class="col-md-12">
            <div class="sg-component__status">
            </div>
            <div class="sg-content__markup sg-markdown">
              <div class="sg-icons-list clear" id="sg-list"></div>
              <div class="sg-icons-list clear">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">logo-onedrive</div>
                  <span class="icon-logo-onedrive"></span>
                </div>
              </div>
              <div class="sg-icons-list clear">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">office365</div>
                  <span class="icon-office365"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="iconsCircle" class="doc-compontent-box">
        <div class="leader--large trailer">
          <h3 class="doc-text-size--24">Icons With Circle</h3>
        </div>
        <div class="sg-content container grid-row grid-row--gutter-none">
          <div class="col-md-12">
            <div class="sg-content__markup sg-markdown">
              <div class="sg-icons-list float-left">
                <!--<div class="sg-icons-list__item">
                                  <div class="sg-component__label sg-component__label&#45;&#45;small">01-camera</div>
                                  <span class="icon-0-24"></span>
                              </div>-->
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-outline</div>
                  <span class="icon-truck circle-outline"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-outline--middle</div>
                  <span class="icon-truck circle-outline circle-outline--middle"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-outline--small</div>
                  <span class="icon-truck circle-outline circle-outline--small"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background with-border</div>
                  <span class="icon-truck circle-background with-border"></span>
                </div>
              </div>
              <div class="sg-icons-list float-left">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background blue</div>
                  <span class="icon-truck circle-background blue"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background green</div>
                  <span class="icon-truck circle-background green"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background gray</div>
                  <span class="icon-truck circle-background gray"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background white</div>
                  <span class="icon-truck circle-background white"></span>
                </div>
              </div>
              <div class="sg-icons-list float-left">
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background yellow</div>
                  <span class="icon-truck circle-background yellow"></span>
                </div>
                <div class="sg-icons-list__item">
                  <div class="sg-component__label sg-component__label--small">circle-background light-yellow</div>
                  <span class="icon-truck circle-background yellow-light"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="responsive-image" class="doc-compontent-box">
        <div class="sg-component">
          <div class="leader--large trailer">
            <h3 class="doc-text-size--24">Responsive Image</h3>
          </div>
          <div class="sg-component__markup">
            <!-- : Responsive image element -->
            <span data-picture="" data-alt="The worlds most hyped smart phone.">
                    <span data-src="../../styleguide/assets/framework/img/galaxy-small.png"></span>
					<span data-src="../../styleguide/assets/framework/img.png" data-media="(min-width: 450px)"></span>
					<span data-src="/static/img/galaxy-large.png" data-media="(min-width: 600px)">
                        <img alt="The worlds most hyped smart phone." src="/static/img/galaxy-large.png">
                    </span>
					</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import svg from './svg.json'
  export default {
    mounted () {
      svg.svgArray.splice(svg.svgArray.indexOf('office365'), 1) && svg.svgArray.splice(svg.svgArray.indexOf('logo-onedrive'), 1)
      for (var i = 0, len = svg.svgArray.length; i < len; i++) {
        var item = $('<div class="sg-icons-list__item">' +
          '   <div class="sg-component__label sg-component__label--small">icon-' + svg.svgArray[i] + '</div>' +
          '       <span class="icon-' + svg.svgArray[i] + '"></span>' +
          ' </div>')
        $('#sg-list').append(item)
      }
    }
  }
</script>
