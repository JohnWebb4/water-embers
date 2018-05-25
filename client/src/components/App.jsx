class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperatures: [
        1, 2, 3, 4, 5
      ]
    }
  }

  render() {
    return <TemperaturesList temperatures={this.state.temperatures}/>;
  }
}
