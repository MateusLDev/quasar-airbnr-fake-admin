import { RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { getToken } from '../utils';

export default function routerGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  if (to.path === '/' && !getToken()) {
    next('/login');
  }

  if (to.path === '/login' && getToken()) {
    next('/');
  }
  next();
}
