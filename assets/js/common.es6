
class commonview{
  constructor() {
    this.affFlg = $('#afNav').length ? 1 : 0;
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
    if( this.affFlg ) this.$affixNav = $('#afNav');
    return this;
  };

  setEvents() {
    if( this.affFlg ) this.affixRun();
    return this;
  };

  // スライダープラグインに値をセットして起動
  affixRun() {
    let
      aw = this.$affixNav.width(),
      affTop = this.$affixNav.offset().top - 10;
    this.$affixNav.affix({
      offset: {
        top: affTop
      }
    });
    return this;
  };

};

$(()=>{
  var view = new commonview();
  view.init();
});