import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface dataweather {
  coord: {
    lon: Number,
    lat: Number
  },
  weather: [{
    id: Number,
    main: String,
    description: String,
    icon: String
  }],
  base: String,
  main: {
    temp: Number,
    feels_like: Number,
    temp_min: Number,
    temp_max: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
    grnd_level: Number
  },
  visibility: Number,
  wind: {
    speed: Number,
    deg: Number,
    gust: Number
  },
  clouds: {
    all: Number
  },
  dt: Number,
  sys: {
    country: String,
    sunrise: Number,
    sunset: Number
  },
  timezone: Number,
  name: String,
  cod: Number
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent {
  weatherData: dataweather[] = [];
  citiesadata: dataweather[] = []; 
  currentCity: String = "Assam";
  page: number = 1;
  convertedDate: any = "";
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
    this.fetchCurrentCityData()
  }

  fetchData() {
    const apiUrl = 'https://glorious-sheath-dress-fawn.cyclic.cloud/weatherdata'; 
    this.http.get<dataweather[]>(apiUrl).subscribe((data) => {
      this.weatherData = data
      console.log(data); // Handle the data here
    });
  }

  fetchCurrentCityData() {
    const apiUrl = `https://glorious-sheath-dress-fawn.cyclic.cloud/weatherdata?name=${this.currentCity}`; 
    this.http.get<dataweather[]>(apiUrl).subscribe((data) => {
      this.citiesadata = data
      console.log(this.citiesadata); // Handle the data here
    });
  }

  clickedAsssam(){
    this.currentCity = "Assam";
    this.fetchCurrentCityData()
  }

  clickedDelhi(){
    this.currentCity = "Delhi";
    this.fetchCurrentCityData()
  }

  clickedMaharastra(){
    this.currentCity = "Maharashtra";
    this.fetchCurrentCityData()
  }

  clickedAgra(){
    this.currentCity = "Agra";
    this.fetchCurrentCityData()
  }

  convertToDate(timestamp: any | null): any | any {
    if (timestamp !== null) {
      let currentDate = new Date(timestamp * 1000);
      this.convertedDate = currentDate.getDate() + "-" + currentDate.getMonth() + "-" +  currentDate.getFullYear();
      return this.convertedDate
      // return new Date(timestamp * 1000); // Assuming the timestamp is in seconds
    }
    this.convertedDate = null;
    return null;
  }

  checkEqual(city:any | null ,city2:any | null) : any{
    if(city._id === city2._id){
      return true;
    }
  }

  changePage(val:any):any{
    if(this.page >=1 ?? this.page <10){
      if( val == -1 && this.page >1){
        this.page = this.page + val
      }else if(val == 1 && this.page <10){
        this.page = this.page + val
      }
    }
    console.log(this.page);
  }
}
