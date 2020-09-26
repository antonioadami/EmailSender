import { Router } from 'express';

import EmailController from '../controllers/emailController';

const emailRoutes = Router();
const emailController = new EmailController();

emailRoutes.get('/', (req, res) => emailController.sendEmail(req, res));

export default emailRoutes;
