import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  LoadingCtrl= inject(LoadingController)
  toastCtrl= inject(ToastController)
  router = inject(Router)

  loading() {
    return this.LoadingCtrl.create({
      spinner: 'crescent',
      message: 'Cargando...',
    })
  }

  async toast(opts?: ToastOptions) {
    const toast= await this.toastCtrl.create(opts)
    toast.present();
    
  }

  routerLink(url : string) {
    return this.router.navigateByUrl(url)
  }

  saveInLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value))

  }

  getFromLocalStorage(key: string) {
    return JSON.parse(localStorage.getItem(key))
  }
}