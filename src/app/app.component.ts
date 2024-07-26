import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { busBusiness } from './service/bussines/bus.business';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private navCtrl: NavController,
    private olho: busBusiness
  ) { }

  home() {
    this.navCtrl.navigateForward('/mapbus');
    this.olho.ObterToken();
  }
  async documentacao() {
    this.navCtrl.navigateForward('/documentacao');
    console.log('fez buscar')
    const olho = await this.olho.busca();

    console.log('olho',olho)
  }
}
