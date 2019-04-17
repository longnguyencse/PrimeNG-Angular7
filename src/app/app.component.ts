import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'primeng-angularcli-setup';
  public user: string;
  public password: string;
  public error: string;
  

  submit() {
    let params =  {
      username: this.user,
      password: this.password
    }
    !this.user && (this.error = "This field is require!")
    console.log(params)
  }
}
