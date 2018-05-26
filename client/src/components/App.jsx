class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperatures: []
    }

    this.search = this.search.bind(this);
  }

  componentDidMount() {
    this.fetchCurrentTemperature();

    setInterval(() => {
      this.fetchCurrentTemperature();
      }, 10000);
  }

  render() {
    return (
      <React.Fragment>
        <Search onSearch={this.search}/>
        <TemperaturesList temperatures={this.state.temperatures}/>
      </React.Fragment>
    );
  }

  fetchCurrentTemperature() {
    fetch('/temperature')
      .then(res => res.json())
      .then((temperatures) => {
        this.setState({
          temperatures: temperatures
        });
      });
  }

  search(value) {
    fetch(`/temperature?search=${value.search}&numResults=${value.numResults}`)
      .then(res => res.json())
      .then((temperatures) => {
        this.setState({
          temperatures: temperatures
        });
      });
  }
}
