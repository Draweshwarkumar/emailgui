import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BackendService } from 'src/app/service/backend.service'; // Correct path


@Component({
  selector: 'app-email',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule], // Add FormsModule here
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers: [BackendService] // Add BackendService here
})
export class EmailComponent {

  data = {
    to: "",
    subject: "",
    message: ""
  };

  constructor(private email: BackendService) {} // Inject BackendService

  doSubmitForm() {
    console.log("Submit method triggered");
    console.log("DATA", this.data);

    // Example usage of the service
    this.backendService.submitData(this.data).subscribe(response => {
      console.log('Data submitted successfully:', response);
    }, error => {
      console.error('Error submitting data:', error);
    });
  }
}
