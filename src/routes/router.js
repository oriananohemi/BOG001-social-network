import start from '../pages/start';
import login from '../pages/login';
import singUp from '../pages/singUp';
import timeline from '../pages/timeline';
import event from '../pages/event';
import error404 from '../pages/error404';

const root = document.getElementById('root');

const router = (rout) => {
  switch (rout) {
    case '#/':
    {
      return root.innerHTML = start();
    }
    case '#/login':
    {
      return root.innerHTML = login();
    }
    case '#/singUp':
    {
      return root.innerHTML = singUp();
    }
    case '#/timeline':
    {
      return root.innerHTML = timeline();
    }
    case '#/event':
    {
      return root.innerHTML = event();
    }
    default:
    {
      return root.innerHTML = error404();
    }
  }
};

export default router;