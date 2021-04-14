import { Injectable } from '@angular/core';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private inventory: Vehicle[]= []

  public getInventory() : Vehicle [] {
    return this.inventory
  }

  public addVehicle(v:Vehicle){
    this.inventory.push(v)
  }

  public updateVehicle(oldVIN:string, newVehicle:Vehicle){
    const oldVehicle =this.inventory.find(
      v=> v.VIN===oldVIN)
      if(oldVehicle != undefined){
        Object.assign(oldVehicle, newVehicle)
      }
  }

  public deleteVehicle(vehicleToDelete:Vehicle){
    this.inventory = this.inventory.filter(v => v.VIN !==
      vehicleToDelete.VIN)
  }

  constructor() { }
}
