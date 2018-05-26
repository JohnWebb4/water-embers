class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperatures: []
    }
  }

  componentDidMount() {
    fetch('/temperature')
      .then(res => res.json())
      .then((temperatures) => {
        this.setState({
          temperatures: temperatures
        });
      });
  }

  render() {
    return <TemperaturesList temperatures={this.state.temperatures}/>;
  }
}
