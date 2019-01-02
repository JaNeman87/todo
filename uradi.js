angular.module("UradiApp", []).controller("uradiKontroler", function() {
  var lista = this;
  lista.uradi = [
    { text: "Otici na Djanija", gotovo: false },
    { text: "Deliver", gotovo: true }
  ];

  lista.dodaj = function() {
    lista.uradi.push({ text: lista.uradiText, gotovo: false });
    lista.uradiText = "";
  };

  lista.preostalo = function() {
    var broj = 0;
    angular.forEach(lista.uradi, function(uradi) {
      broj += uradi.gotovo ? 0 : 1;
    });
    return broj;
  };

  lista.obrisi = function() {
    var prethodniUradiZadaci = lista.uradi;
    lista.uradi = [];
    angular.forEach(prethodniUradiZadaci, function(uradi) {
      !uradi.gotovo ? lista.uradi.push(uradi) : null;
    });
  };
});
