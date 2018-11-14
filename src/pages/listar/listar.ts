import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


/**
 * Generated class for the ListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar',
  templateUrl: 'listar.html',
})
export class ListarPage {

  post: any;

  constructor(public navCtrl: NavController, public restProvider :RestProvider) {
    this.ListPost();
  }

  ListPost(){
    this.restProvider.getPostagem()
    .then(data=>{
      this.post = data;
      console.log(this.post);
  });
}

}
