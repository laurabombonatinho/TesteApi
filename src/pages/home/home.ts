import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarPage } from '../cadastrar/cadastrar';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  EntrarPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }

}
