import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
})
export class BadgePage implements OnInit {
  series = [
    {
      titulo: 'Friends',
      url: "https://br.web.img3.acsta.net/pictures/19/12/20/21/27/3055482.jpg",
      enredo: "Seis amigos, três homens e três mulheres, enfrentam a vida e os amores em Nova York e adoram passar o tempo livre na cafeteria Central Perk.",
      imdb: "8,9/10"
    },
    {
      titulo: 'How I Met Your Mother',
      url: "https://m.media-amazon.com/images/I/81wl0PL9A-L._AC_SL1500_.jpg",
      enredo: "Em 2030, o arquiteto Ted Mosby (Josh Radnor) conta a história sobre como conheceu a mãe dos seus filhos. Ele volta no tempo para 2005, relembrando suas aventuras amorosas em Nova York e a busca pela mulher dos seus sonhos.",
      imdb: "8,3/10"
    },
    {
      titulo: 'Sherlock Holmes',
      url: "https://br.web.img2.acsta.net/pictures/14/01/06/14/35/382626.jpg",
      enredo: "O dr. John Watson precisa de um lugar para morar em Londres. Ele é apresentado ao detetive Sherlock Holmes e os dois acabam desenvolvendo uma parceria intrigante, na qual a dupla vagará pela capital inglesa solucionando assassinatos e outros crimes brutais. Tudo isso em pleno século XXI.",
      imdb: "9,1/10"
    },
    {
      titulo: 'Mr. Robot',
      url: "data:image/jpeg;base64,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",
      enredo: "Elliot é um jovem programador que trabalha como engenheiro de segurança virtual durante o dia, e como hacker vigilante durante a noite. Elliot se vê em uma encruzilhada quando é recrutado para destruir a firma que ele é pago para proteger.",
      imdb: "8,6/10"
    },
    {
      titulo: 'Moon Knight',
      url: "https://br.web.img3.acsta.net/pictures/22/02/21/21/06/4583208.jpg",
      enredo: "Marc Spector ganha a vida como um boxeador, fuzileiro naval e mercenário. Certo dia, enquanto estava em uma expedição dentro de um antigo templo de um deus egípcio, Marc fica gravemente ferido e é abandonado à beira da morte. Porém, no templo de Khonshu ele ganha uma oferta única e inusitada para se tornar o Cavaleiro da Lua.",
      imdb: "7,7/10"
    },
  ];
    constructor() { }

  ngOnInit() {
  }

}
