import { Request, Response } from 'express';
import NodeMailer from '../providers/nodemailer';

class EmailController {
  nodemailer: NodeMailer;

  constructor() {
    this.nodemailer = new NodeMailer();
  }

  public async sendEmail(req: Request, res: Response): Promise<Response> {
    try {
      await this.nodemailer.Run();
    } catch (erro) {
      console.log(erro);
    }
    return res.status(200).send('funciona');
  }
}

export default EmailController;
