import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  usuario: Array<{ id: number; nome: string; usuario: string; senha: string; email:
      string;}>;
  constructor() {
    this.usuario = [
      {id: 1001, nome: 'Heldem Filipe Rocha Silva', usuario: 'heldem', senha: '123',
        email: 'heldem.silva@claretiano.com'}
    ];
  };
}
