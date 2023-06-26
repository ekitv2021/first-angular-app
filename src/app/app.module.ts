import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
//here we will define the metadata for running the project
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent
    ],
    bootstrap:[
        AppComponent
    ]
})
export class AppModule{
    //logic and data will be added inside the class
}