# resource

https://www.youtube.com/watch?v=psZXU8PTAS8
    
# to build the weather service files in src/app/services
ng g s weather 


@CalebeCopello
4 months ago
For those struggling with the module part 24:17
start the project with the cli:
ng new my-app --no-standalone --routing



@serenitytales24
1 year ago
for those who are trying to follow this tutorial and facing a problem since things changed from whe he made it.
Few points in here:
look for "Open Weather API" instead of the one in the video.
In weather service file , here is the method since the get method changed for this one so I modified it accordingly:
 getWeatherData(cityName:string):Observable<WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl+'/city/'+cityName, {
      headers: new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName,environment.XRapidAPIKeyHeaderValue),
    });
   }





# WeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
