import axios from 'axios';

const url = {
  getMeetups: 'https://birras-santander.herokuapp.com/meetups',
  createMeetup: 'https://birras-santander.herokuapp.com/meetups/create',
  getWeather: 'https://api.openweathermap.org/data/2.5/weather?q=buenos%20aires,ar&appid=1db3d08995d69e48a381491aaec0fe7c&units=metric',
};

export default {
  getMeetups: () => axios.get(url.getMeetups).then((response) => response.data),
  createMeetup: (data) => axios.post(url.createMeetup, data).then((response) => response.data),
  getWeather: () =>
    axios.get(url.getWeather)
    .then(({ data }) => ({
      temp: data.main.temp,
      location: `${data.name}, ${data.sys.country}`,
      desc: data.weather[0].description,
    })),
};
