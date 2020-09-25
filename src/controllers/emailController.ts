import { Request, Response } from 'express';

class EmailController {
  public async sendEmail(req: Request, res: Response): Promise<Response> {
    return res.status(200).send('funciona');
  }
}

export default EmailController;
