"use strict";

var Temperature = function Temperature(_ref) {
  var temperature = _ref.temperature;
  return React.createElement(
    "p",
    null,
    "The temperature was ",
    temperature.temperature,
    " at ",
    moment(temperature.date).fromNow(),
    " (",
    temperature.date,
    ")"
  );
};