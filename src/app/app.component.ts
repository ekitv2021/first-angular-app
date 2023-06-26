import {Component} from "@angular/core"

@Component({    
    selector:'app',
    templateUrl: "app.component.html",
    styleUrls: ["app.component.css"]
})

export class AppComponent{
    //to define the variable, no need to use var, let or const
    //here datatype is assigned implicitly
    title = "this is my first app"; 
    num = 89 
    
    //here datatype is assigned explicitly
    // title:any = "string";

    //[] are used to define array,
    //collection of multiple referred using same variable name
    colors = ["red","green","blue","yellow","purple","pink","orange"];

    marks: number[] = [56,34,65,46,5,23,90,46];
}