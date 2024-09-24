import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'; // Import MatButtonModule
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,MatSnackBarModule], // Add MatButtonModule to imports
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private snack:MatSnackBar){

  }

  btnClick(){
    console.log("btn click");
    this.snack.open("Hey welcome to this app","Cancel");
    
  }

}
