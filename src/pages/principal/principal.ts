import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { EditarPage } from '../editar/editar';
import { ListarPage } from '../listar/listar';

/**
 * Generated class for the PrincipalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  EntrarCadastrar() {
    this.navCtrl.push(CadastrarPage);
  }

  EntrarEditar() {
    this.navCtrl.push(EditarPage);
  }

  EntrarListar() {
    this.navCtrl.push(ListarPage);
  }

}
