export const getCity = ids =>
  fetch(`http://api.openweathermap.org/data/2.5/group?id=${ids}&mode=json&units=metric&appid=a0bf404919f7603c5bde4b4291c5a1c3`)
    .then(data => data.json());

export const getTempo = () => {};
