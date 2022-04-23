import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public toastController: ToastController) { }

  async presentToast(valor: string) {
    const toast = await this.toastController.create({
      position: 'middle',
      message: 'Você selecionou ' + valor + '!',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

}
