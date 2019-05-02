import {Component} from '@angular/core';

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
    const params =  {
      username: this.user,
      password: this.password
    };
    console.log('abc');
    if (!this.user) {
      console.log(params);
      this.error = 'This field is require!';
    }
  }
}
