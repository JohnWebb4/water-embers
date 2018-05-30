"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.state = {
      search: '',
      numResults: 0
    };

    _this.search = _this.search.bind(_this);
    _this.selectChange = _this.selectChange.bind(_this);
    _this.numResultsChange = _this.numResultsChange.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          "h2",
          null,
          "Search"
        ),
        React.createElement(
          "form",
          { name: "Search", onSubmit: this.search },
          React.createElement(
            "select",
            { name: "search-criteria", defaultValue: "Newest", onChange: this.selectChange },
            React.createElement(
              "option",
              { value: "Newest" },
              "Newest"
            )
          ),
          React.createElement(
            "p",
            null,
            "Number of results"
          ),
          React.createElement("input", { type: "number", onChange: this.numResultsChange }),
          React.createElement("input", { type: "submit" })
        )
      );
    }
  }, {
    key: "selectChange",
    value: function selectChange(e) {
      this.setState({ search: e.target.value });
    }
  }, {
    key: "numResultsChange",
    value: function numResultsChange(e) {
      this.setState({ numResults: e.target.value });
    }
  }, {
    key: "search",
    value: function search(e) {
      e.preventDefault();
      this.props.onSearch(this.state);
    }
  }]);

  return Search;
}(React.Component);