import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  userData:any;
  
  constructor(private router : Router){
    const dataString = localStorage.getItem('user');
    this.userData = dataString ? JSON.parse(dataString) : null;
  }

  receivedData={
    username: '',
    password: '',
  }

  onSubmit(){
    console.log(this.receivedData)
    if(this.receivedData.username === this.userData.username && this.receivedData.password === this.userData.password){
      this.router.navigate(['/profile'])
    }
    else{
      alert('Invalid Credentials')
    }
  }

}
