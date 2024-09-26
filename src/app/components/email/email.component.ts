import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BackendService } from '../../service/backend.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common'; // Import CommonModule to use ngIf

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CommonModule // Add CommonModule for ngIf and other common directives
  ],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers: [BackendService]
})
export class EmailComponent {
  data = {
    to: "",
    subject: "",
    message: ""
  };

  flag: boolean = false;

  constructor(private backendService: BackendService, private snak: MatSnackBar) {}

  doSubmitForm() {
    console.log("Submit method triggered");
    console.log("DATA", this.data);

    if (this.data.to === '' || this.data.subject === '' || this.data.message === '') {
      this.snak.open("Fields cannot be empty !!", "OK");
      return;
    }

    // Set loading spinner
    this.flag = true;
    
    // Example usage of the service
    this.backendService.sendEmail(this.data).subscribe(
      (response: any) => {
        console.log('Data submitted successfully:', response);
        this.flag = false;  // Stop the spinner
        this.snak.open("Email sent successfully", "OK");
      },
      (error: any) => {
        console.error('Error submitting data:', error);
        this.flag = false;  // Stop the spinner
        this.snak.open("Error sending email", "OK");
      }
    );
  }
}
