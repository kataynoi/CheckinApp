import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  products: any[] = [];
  selectedProduct: any;
  productFound: boolean = false;
  id: string;
  name: string;

  constructor(public navCtrl: NavController,
    public navParams:NavParams,
    private barcodeScanner: BarcodeScanner,
    private toast: Toast,
    public dataService: DataServiceProvider) {
      this.dataService.getProducts()
        .subscribe((response)=> {
            this.products = response
          console.log(this.products);
          
          let id = this.navParams.get('id');
          let name = this.navParams.get('name');
          this.id = id;
          this.name = name;
        });
  }

  scan() {
    this.selectedProduct = {};
    this.barcodeScanner.scan().then((barcodeData) => {
      console.log('Barcode : ' + barcodeData.text);
      alert(barcodeData.text);

    }, (err) => {
      this.toast.show(err, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      );
    });
  }

}
