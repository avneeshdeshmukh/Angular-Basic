import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  userData={
    email:'',
    username:'',
    password:''
  };

  constructor(private router : Router){}

  onSubmit(){
    console.log(this.userData);
    if(localStorage.getItem("user")){
      localStorage.removeItem("user")
    }
    localStorage.setItem("user", JSON.stringify(this.userData));
    this.router.navigate(['/login'])
  }
}
