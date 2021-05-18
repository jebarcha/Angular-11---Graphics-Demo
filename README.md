# GraphicsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## db.server

This project works with a demo using db.json
1.Create a new folder named graphics-server
2.Create or place a file db.json with the content:

"grafica": {
        "facebook": 2700,
        "youtube": 2000,
        "whatsapp": 1400,
        "facebook-messenger": 1350,
        "instagram": 1123
    }
}

3.Install json server: npm i json-server

4.Execute json server: json-server --watch db.json


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
