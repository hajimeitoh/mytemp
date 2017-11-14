class pageview{
  constructor() {
    this.slideAllWidth = 1600;
    this.slideWidth = 1600;
    this.slideHeight = 300;
    return this;
  };

  init() {
    let
      that = this;
    that.setEl();
    that.setEvents();
    return this;
  };

  setEl() {
    this.$topslider = $('#topslider');
    this.$sidebanner = $('#sidebanner');
    return this;
  };

  setEvents() {
    let
      that = this;
    that.sliderSet();
    that.bannerSet();
    return this;
  };

  // スライダープラグインに値をセットして起動
  sliderSet() {
    let
      that = this,
      slideRatio = this.slideAllWidth / this.slideHeight,
      slideWidthPer = this.slideWidth / this.slideAllWidth;

    this.$topslider.find('.main-gallery').flickity({
      adaptiveHeight: true,
      cellAlign: 'center',
      contain: true,
      wrapAround: true,
      imagesLoaded: true,
      draggable: true,
      prevNextButtons: true,
      pageDots: true,
      accessibility: true,
      resize: true,
      autoPlay: 6000
    });
    return this;
  };

  bannerSet() {
    let
      that = this,
      $banner = this.$sidebanner,
      $window = $(window),
      ww,
      bannerSlideActive = false,
      bannerSlideOption = {
        cellSelector: '.banner-item',
        adaptiveHeight: true,
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        imagesLoaded: true,
        draggable: true,
        prevNextButtons: false,
        pageDots: false,
        accessibility: true,
        resize: true,
        autoPlay: 6000
      };
    $(window).on('resize', () => {
      ww = $(window).width();
      if( ww > 768 && bannerSlideActive ){
        $banner.flickity('destroy');
        bannerSlideActive = false;
      } else if ( ww <= 768 && !bannerSlideActive ){
        $banner.flickity(bannerSlideOption)
        //let bannerSlide = new Flickity( $banner, bannerSlideOption );
        bannerSlideActive = true;
      }
    }).resize();

    return this;
  };

};

$(()=>{
  var view = new pageview();
  view.init();
});