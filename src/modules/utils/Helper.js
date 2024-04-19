import { StorageController } from "../controllers/StorageController";
export class Helper {
  constructor() {
    this.StorageController = new StorageController();
  }

  static formatDateDashToCommasReturnNewDate = (dateStr) => {
    const arr = dateStr.split("-");
    const yyyy = arr[0];
    const MM = arr[1] - 1; // MM - 1
    const dd = arr[2];

    const dateObj = new Date(yyyy, MM, dd);
    return dateObj;
  };
}
