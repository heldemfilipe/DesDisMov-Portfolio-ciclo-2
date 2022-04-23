import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DadosService } from '../dados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: any;
  senha = '';
  login = '';
  mensagem = '';

  constructor(public toastController: ToastController, dadosServ: DadosService, private route: Router) {
    this.usuario = dadosServ.usuario;
  }
  ngOnInit() {
  }

  entrar(campoLogin, campoSenha) {
    this.login = campoLogin;
    this.senha = campoSenha;
    if (this.login === this.usuario[0].usuario && this.senha === this.usuario[0].senha) {
      this.route.navigate(['/bem-vindo']);
      this.presentToast('Olá ' + this.usuario[0].nome + '! Seja bem vindo!', 'success');
      console.log(this.login);
    }
    else {
      this.apresentaAlert();
    }
  }

  async presentToast(texto: string, cor: string) {
    const toast = await this.toastController.create({
      message: texto,
      color: cor,
      duration: 2000
    });
    toast.present();
  }

  async apresentaAlert() {
    const alert = await this.toastController.create({
      color: 'danger',
      header: 'Atenção!',
      message: 'Usuário e/ou senha inválidos!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
