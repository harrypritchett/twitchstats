import {inject} from 'aurelia-framework';

import {TwitchClient} from '../twitchapi/twitchclient';

@inject(TwitchClient)
export class Games {
  games;

  constructor (private twitchClient: TwitchClient) {
    this.twitchClient = twitchClient;
  }

  created(params) {
    return this.twitchClient.getTopGames()
      .then(data => this.games = data);
  }
}
