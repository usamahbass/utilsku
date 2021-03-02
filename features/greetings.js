const getGreetings = () => {
  let data = [
      [0, 12, "Selamat pagi"],
      [12, 18, "Selamat siang"],
      [18, 24, "Selamat malam"],
    ],
    hr = new Date().getHours();

  for (var i = 0; i < data.length; i++) {
    if (hr >= data[i][0] && hr <= data[i][1]) {
      return data[i][2];
    }
  }
};
