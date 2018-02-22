"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getCity = exports.getCity = function getCity(ids) {
  return fetch("http://api.openweathermap.org/data/2.5/group?id=" + ids + "&mode=json&units=metric&appid=a0bf404919f7603c5bde4b4291c5a1c3").then(function (data) {
    return data.json();
  });
};

var getTempo = exports.getTempo = function getTempo() {};