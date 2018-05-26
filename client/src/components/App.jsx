class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTemperature: {},
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
        <h1>Current Temperature</h1>
        <Temperature temperature={this.state.currentTemperature}/>
        <Search onSearch={this.search}/>
        <h3>Search Results</h3>
        <TemperaturesList temperatures={this.state.temperatures}/>
      </React.Fragment>
    );
  }

  fetchCurrentTemperature() {
    fetch('/temperature')
      .then(res => res.json())
      .then((temperatures) => {
        this.setState({
          currentTemperature: temperatures[0]
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
