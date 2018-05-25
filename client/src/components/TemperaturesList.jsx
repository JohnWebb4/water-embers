const TemperaturesList = ({temperatures}) => (
  temperatures.map((temperature, index) => {
    return <Temperature key={index} temperature={temperature} />;
  })
);