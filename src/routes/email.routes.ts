import { Router } from 'express';

import EmailController from '../controllers/emailController';

const emailRoutes = Router();
const emailController = new EmailController();

emailRoutes.get('/', emailController.sendEmail);

export default emailRoutes;
