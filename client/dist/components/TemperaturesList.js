"use strict";

var TemperaturesList = function TemperaturesList(_ref) {
  var temperatures = _ref.temperatures;
  return temperatures.map(function (temperature, index) {
    return React.createElement(Temperature, { key: index, temperature: temperature });
  });
};