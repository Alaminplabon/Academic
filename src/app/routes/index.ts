import { Router } from 'express';
import { otpRoutes } from '../modules/otp/otp.routes';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.route';
import { notificationRoutes } from '../modules/notification/notificaiton.route';
import { termsRoutes } from '../modules/terms/terms.route';
import { privacyRoutes } from '../modules/privacy/privacy.route';
import { callForPaperRoutes } from '../modules/callForPaper/callForPaper.route';
import { eventRoutes } from '../modules/event/event.route';
import Grants from '../modules/grants/grants.models';
import { grantsRoutes } from '../modules/grants/grants.route';
import { jobPostRoutes } from '../modules/jobPost/jobPost.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/otp',
    route: otpRoutes,
  },
  {
    path: '/notifications',
    route: notificationRoutes,
  },
  {
    path: '/privacy',
    route: privacyRoutes,
  },
  {
    path: '/terms',
    route: termsRoutes,
  },
  {
    path: '/callForPaper',
    route: callForPaperRoutes,
  },
  {
    path: '/event',
    route: eventRoutes,
  },
  {
    path: '/grants',
    route: grantsRoutes,
  },
  {
    path: '/jobPost',
    route: jobPostRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
