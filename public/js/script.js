function formatoSelect(state) {
  if (!state.id) {
    return state.text;
  }
  var $state = $(
    '<span class="flag-span"><span class="flag flag-' + state.element.value.toLowerCase() + '"></span>' + state.text + '</span>'
  );
  return $state;
};

var data = [{
  id: 'us',
  text: 'English',
  phone: ''
}, {
  id: 'jp',
  text: 'Japan',
  phone: ''
}];

$('#paises').select2({
  templateResult: formatoSelect,
  templateSelection: formatoSelect,
  data: data
});
// buscar si esta definido el pais.
function arrayObjectIndexOf(myArray, searchTerm, property) {
  for (var i = 0, len = myArray.length; i < len; i++) {
    if (myArray[i][property] === searchTerm) return i;
  }
  return -1;
}

$.getJSON('http://ipinfo.io', function(n) {
  //console.log(n)
  //alert(arrayObjectIndexOf(data, "co", "id"));
  var ct = arrayObjectIndexOf(data, n.country.toLowerCase(), "id");
  if (ct !== -1) {
    $('#paises').val(n.country.toLowerCase());
    $('#paises').trigger('change');
    $('.telefono').text(data[ct].phone);
  } else {
    $('#paises').val('us');
    $('#paises').trigger('change');
    $('.telefono').text('(888) 886 9881');
  }

});

$('#paises').on('select2:select', function(evt) {
  //console.log(evt);
  //  alert();
  if (arrayObjectIndexOf(data, $('#paises').val(), "id") !== -1) {
    var ct = arrayObjectIndexOf(data, $('#paises').val(), "id");
    //alert(data[ct].phone);
    $('.telefono').text(data[ct].phone);
  }

});


// var data = [{
//   id: 'ar',
//   text: 'Argentina',
//   phone: '+54 115 219 4122'
// }, {
//   id: 'pe',
//   text: 'Peru',
//   phone: '+51 1 640 9680'
// }, {
//   id: 'mx',
//   text: 'Mexico',
//   phone: '+52 55 8526 2777'
// }, {
//   id: 'sv',
//   text: 'El Salvador',
//   phone: '503 211 309 07'
// }, {
//   id: 'cl',
//   text: 'Chile',
//   phone: '+56 2 25952 977'
// }, {
//   id: 'uy',
//   text: 'Uruguay',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'py',
//   text: 'Paraguay',
//   phone: '595 21 2380004'
// }, {
//   id: 'pa',
//   text: 'Panamá',
//   phone: '+507 8336 284'
// }, {
//   id: 've',
//   text: 'Venezuela',
//   phone: '+58 212 335 9474'
// }, {
//   id: 'es',
//   text: 'España',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'ni',
//   text: 'Nicaragua',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'cr',
//   text: 'Costa Rica',
//   phone: '506 40001857'
// }, {
//   id: 'bo',
//   text: 'Bolivia',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'pr',
//   text: 'Puerto Rico',
//   phone: '(787) 493 0244'
// }, {
//   id: 'us',
//   text: 'Estados Unidos',
//   phone: '786 275 5989'
// }, {
//   id: 'hn',
//   text: 'Honduras',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'ec',
//   text: 'Ecuador',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'br',
//   text: 'Brasil',
//   phone: '+1 786 275 5989'
// }, {
//   id: 'do',
//   text: 'R. Dominicana',
//   phone: '1 829 234 6897'
// }, {
//   id: 'gt',
//   text: 'Guatemala',
//   phone: '502 222 96 592'
// }, {
//   id: 'co',
//   text: 'Colombia',
//   phone: '+57 1 381 6806'
// }];