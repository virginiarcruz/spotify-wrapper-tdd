'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlbumTracks = exports.getAlbums = exports.getAlbum = undefined;

var _config = require('./config');

var _util = require('./util');

var getAlbum = exports.getAlbum = function getAlbum(id) {
  return fetch(_config.API_URL + '/albums/' + id).then(_util.toJSON);
};

var getAlbums = exports.getAlbums = function getAlbums(ids) {
  return fetch(_config.API_URL + '/albums?ids=' + ids).then(_util.toJSON);
};

var getAlbumTracks = exports.getAlbumTracks = function getAlbumTracks(id) {
  return fetch(_config.API_URL + '/albums/' + id + '/tracks').then(_util.toJSON);
};