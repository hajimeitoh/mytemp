class commonview{
  constructor() {
    this.mapoption = {
      "lat": "35.6809819",
      "lng": "139.7665776",
      "zoom": 18,
      "title": "sample space",
      "content": "<p>this is sample.</p>"
    };

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
    this.$mapdetail = $('#map-detail');
    return this;
  };

  setEvents() {
    this.maps();
    return this;
  };

  // スライダープラグインに値をセットして起動
  maps() {
    let
      that = this,
      option = this.mapoption;
    $(window).on('load', function(){
      /* --------------------
      // gmapsのカスタマイズ
      -------------------- */
      let mapg = new GMaps({
        div: "#map-detail",
        lat: option.lat,
        lng: option.lng,
        zoom: option.zoom,
      });
      mapg.addMarker({
        lat: option.lat,
        lng: option.lng,
        title: option.title,
        infoWindow: {
          content: option.content
        }
      });
    });


    return this;
  };

};

$(()=>{
  var view = new commonview();
  view.init();
});

