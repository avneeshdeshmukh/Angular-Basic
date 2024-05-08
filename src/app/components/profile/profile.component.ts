import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userData:any;

  constructor(private router : Router){
    const dataString= localStorage.getItem("user");
    this.userData= dataString ? JSON.parse(dataString) : null;
  }
  
}
