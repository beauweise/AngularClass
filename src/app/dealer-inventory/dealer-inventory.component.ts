import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle'
import { InventoryService } from '../inventory.service'

@Component({
  selector: 'app-dealer-inventory',
  templateUrl: './dealer-inventory.component.html',
  styleUrls: ['./dealer-inventory.component.css']
})
export class DealerInventoryComponent implements OnInit {


 inventory:Vehicle [] = []

  trackByVIN(index:number, car:Vehicle) : string {
    return car.VIN
  }

  deleteVehicle(car:Vehicle){
    this.inventorySvc.deleteVehicle(car)
    this.inventory= this.inventorySvc.getInventory()
  }

  handlePhotoNavigation(photoIndex:number, car:Vehicle){
    if (photoIndex == car.photos.length-1){
      alert("Come visit us in our showroom!")
    }
  }

  addVehicle(v:Vehicle){
    this.inventorySvc.addVehicle(v)
    this.inventory = this.inventorySvc.getInventory()
  }
  
  vehicleToEdit:Vehicle = undefined

  beginEditing(v:Vehicle){
    this.vehicleToEdit = v
  }

  commitEdit(v:Vehicle){
   this.inventorySvc.updateVehicle(this.vehicleToEdit.VIN,v)
   this.inventory = this.inventorySvc.getInventory()
  }

  constructor( private inventorySvc:InventoryService) { }

  ngOnInit(): void {
    this.inventory = this.inventorySvc.getInventory()
  }

}
