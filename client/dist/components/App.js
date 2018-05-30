'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentTemperature: {},
      temperatures: []
    };

    _this.search = _this.search.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.fetchCurrentTemperature();

      setInterval(function () {
        _this2.fetchCurrentTemperature();
      }, 10000);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          'h1',
          null,
          'Current Temperature'
        ),
        React.createElement(Temperature, { temperature: this.state.currentTemperature }),
        React.createElement(Search, { onSearch: this.search }),
        React.createElement(
          'h3',
          null,
          'Search Results'
        ),
        React.createElement(TemperaturesList, { temperatures: this.state.temperatures })
      );
    }
  }, {
    key: 'fetchCurrentTemperature',
    value: function fetchCurrentTemperature() {
      var _this3 = this;

      fetch('/temperature').then(function (res) {
        return res.json();
      }).then(function (temperatures) {
        _this3.setState({
          currentTemperature: temperatures[0]
        });
      });
    }
  }, {
    key: 'search',
    value: function search(value) {
      var _this4 = this;

      fetch('/temperature?search=' + value.search + '&numResults=' + value.numResults).then(function (res) {
        return res.json();
      }).then(function (temperatures) {
        _this4.setState({
          temperatures: temperatures
        });
      });
    }
  }]);

  return App;
}(React.Component);