let saludar = nombre => `Hola ${nombre}`;

function Season() {
  this.season = "Spring";
  this.nextSeason = () => {
    this.season = "Summer";
    return this.season;
  };
  this.getNextSeason = () => {
    return this.nextSeason();
  };
}
