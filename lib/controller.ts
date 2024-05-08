import type { Request, Response } from "express";
import Service from "./services/firebase_storage";

export default class Controller {
  private service: Service;

  constructor() {
    this.service = new Service();

    this.upload_image = this.upload_image.bind(this);
  }

  public async upload_image(req: Request, res: Response) {
    const image_link = await this.service.upload_image(req.file!);

    return res.status(200).json({
      message: image_link,
    });
  }
}
