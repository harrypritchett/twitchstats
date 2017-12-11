import {inject} from 'aurelia-framework';
import {RouterConfiguration, Router} from 'aurelia-router';

import {TwitchClient} from './twitchapi/twitchclient';

@inject('TwitchClient')
export class App {
  router: Router;

  constructor(public twitchClient: TwitchClient) {}

  configureRouter(config: RouterConfiguration, router: Router): void {
    this.router = router;
    config.title = 'TwitchStats';
    config.options.pushState = true;
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: 'home/index',
        nav: true,
        title: 'Home'
      },
      {
        route: 'games',
        name: 'games',
        moduleId: 'games/index',
        nav: true,
        title: 'Top Games'
      }
    ]);
  }
}
