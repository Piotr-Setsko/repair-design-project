var myMap;
ymaps.ready(init);
function init () {
  myMap = new ymaps.Map('map', {
  center: [47.244,39.723],
  zoom: 14
  }, {
    searchControlProvider: 'yandex#search'
  });
  myMap.geoObjects
  .add(new ymaps.Placemark([47.244,39.723], {
    iconCaption: 'ТЦ "Декорум"'
  },{
    preset: 'islands#dotIcon',
    iconColor: '#735184'
  }))
}