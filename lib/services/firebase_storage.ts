import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { FirebaseService } from "./firebase_config";
import { v4 as uuidv4 } from "uuid";

export default class Service {
  private firebase: FirebaseService; 

  constructor() {
    this.firebase = new FirebaseService();

    this.upload_image = this.upload_image.bind(this);
  }

  public async upload_image(imageFile: Express.Multer.File): Promise<String> {
    const bucket = this.firebase.bucket;

    const id = uuidv4();

    const bucketRef = ref(
      bucket,
      `product_images/${id + "." + imageFile.mimetype.split("/")[1]}`
    );

    const uploadTask = await uploadBytesResumable(bucketRef, imageFile.buffer);
    return await getDownloadURL(uploadTask.ref);
  }
}
