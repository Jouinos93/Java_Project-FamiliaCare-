import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.scss']
})
export class AddressesComponent implements OnInit {

  addresses: Address[] = [];
  constructor( private adrServ: AddressService ) {}
  ngOnInit(): void {
  
    this.adrServ.getAllAddresss().subscribe((addresses)=>{
      this.addresses=addresses;
    });
  }

  deleteAdr(adrId: number){
    console.log("here for delete");
    
    this.adrServ.deleteAddress(adrId).subscribe((res)=>{
      console.log(res);
      
    });
  }

  updateAddress(adr: Address){
    console.log("updating");
    
    this.adrServ.updateAddress(adr.id,adr).subscribe(
      (response) => {
        // Handle the successful update here
        console.log('Address updated:', response);
      },
      (error) => {
        // Handle any errors that occur during the update
        console.error('Error updating address:', error);
      }
    );
  }

}
