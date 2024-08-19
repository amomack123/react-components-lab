const WeatherData = ({ day, conditions, time }) => {
    return (
      <div>
        <h2>Day: {day}</h2>
        <p><span>Conditions: </span>{conditions}</p>
        <p><span>Time: </span>{time}</p>
      </div>
    );
}
  
export default WeatherData;