import { StorageController } from "../controllers/StorageController";
export class Helper {
  constructor() {
    this.StorageController = new StorageController();
  }
  saveCurrentArrayToLocalStorage(key, arrayToSave) {
    this.StorageController.set(key, JSON.stringify(arrayToSave));
  }
}
