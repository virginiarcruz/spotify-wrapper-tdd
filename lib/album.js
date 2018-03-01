"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = album;
function album() {
  var _this = this;

  return { // vou retornar os métodos que eu quero
    getAlbum: function getAlbum(id) {
      return _this.request(_this.apiURL + "/albums/" + id);
    }, // estou chamando um id, então ele vai chamar o this.request passando a url
    getAlbums: function getAlbums(ids) {
      return _this.request(_this.apiURL + "/albums?ids=" + ids);
    },
    getTracks: function getTracks(id) {
      return _this.request(_this.apiURL + "/albums/" + id + "/tracks");
    }
  };
}