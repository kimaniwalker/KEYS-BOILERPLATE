import { Router } from 'express';
import profileRouter from './profile';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import blogListRouter from './blogList';
import contactRouter from './contactform';




import stripeDonationsRouter from './stripeDonations';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/donate', stripeDonationsRouter);
router.use('/contact', contactRouter);
router.use('/users', usersRouter);




router.use('/blogList', blogListRouter);
router.use('/classes', classesRouter);
router.use('/profile', profileRouter);


router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);



router.use(tokenMiddleware);
router.use(isLoggedIn);






export default router;