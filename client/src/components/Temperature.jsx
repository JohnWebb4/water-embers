const Temperature = ({temperature}) => (
  <p>The temperature was {temperature.temperature} at {moment(temperature.date).fromNow()} ({temperature.date})</p>
);