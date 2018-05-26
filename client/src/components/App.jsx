class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperatures: []
    }
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

  componentDidMount() {
    this.fetchCurrentTemperature();

    setInterval(() => {
      this.fetchCurrentTemperature();
      }, 10000);
  }

  render() {
    return <TemperaturesList temperatures={this.state.temperatures}/>;
  }
}
