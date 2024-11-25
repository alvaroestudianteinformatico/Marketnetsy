import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  FirebaseSvc = inject(FirebaseService)
  UtilsSvc = inject(UtilsService)

  ngOnInit() {
    
  }

  async submit(){
    
    if (this.form.valid) {
      const loading = await this.UtilsSvc.loading()
       await loading.present()

      this.FirebaseSvc.signIn(this.form.value as User).then((res) => {
        

        this.getUserInfo(res.user.uid);

        
        
      }).catch(error => {
        this.UtilsSvc.toast({
          message: error.message,
          duration: 3000,
          color: 'danger',
          icon: 'close-circle-outline',
          position: 'middle'
        })

      }).finally(() => {
        loading.dismiss()
      })


    }
  }

  async getUserInfo(uid : string) {
    if (this.form.valid) {
      const loading = await this.UtilsSvc.loading()
       await loading.present()
       let path = `/users/${uid}`
       delete this.form.value.password;

      
      this.FirebaseSvc.getDocument(path).then((user: User) => {

        this.UtilsSvc.saveInLocalStorage('user', user)        
        this.UtilsSvc.routerLink('/home') 
        this.form.reset()

        this.UtilsSvc.toast({
          message: `¡Bienvenido a nuestra Aplicación! ${user.email}`,
          duration: 3000,
          color: 'success',
          icon: 'checkmark-circle-outline',
          position: 'middle'
        })

       
      }).catch(error => {
        this.UtilsSvc.toast({
          message: error.message,
          duration: 3000,
          color: 'danger',
          icon: 'close-circle-outline',
          position: 'middle'
        })

      }).finally(() => {
        loading.dismiss()
      })


    }
  }
}