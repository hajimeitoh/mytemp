class pageview{
  constructor() {
    this.slideAllWidth = 1600;
    this.slideWidth = 1200;
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
    return this;
  };

  setEvents() {
    let
      that = this;
    that.sliderSet();
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
    $(window).on('resize', ()=>{
      let
        ww = that.$topslider.width(),
        wh = ww / slideRatio,
        tw = ww * slideWidthPer;
      that.$topslider.css('height', wh + 'px');
      that.$topslider.find('.gallery-cell').css({
        'width': tw + 'px',
        'height': wh + 'px'
      });
    }).resize();

    return this;
  };

};

$(()=>{
  var view = new pageview();
  view.init();
});