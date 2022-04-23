import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-seguranca',
  templateUrl: './seguranca.page.html',
  styleUrls: ['./seguranca.page.scss'],
})
export class SegurancaPage implements OnInit {
  dados: any;

  constructor(public alertController: AlertController) {
    this.dados = [];
  }


  async dadosAlert() {
    const alert = await this.alertController.create({

      cssClass: 'my-custom-class',
      header: 'Informe seus dados!',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        },
        {
          name: 'telefone',
          type: 'tel',
          placeholder: 'Número'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancelar');
          }
        }, {
          text: 'Confirmar',
          handler: (data) => {
            this.dados = [];
            if (data.email && Number(data.telefone)) {
              this.dados.push(data);
              console.log(this.dados);
            }
          }
        }
      ]
    });

    await alert.present();

  }

  ngOnInit() {
  }

}
