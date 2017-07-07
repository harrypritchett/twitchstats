import {inject} from 'aurelia-framework';

import {TwitchClient} from '../twitchapi/twitchclient';

@inject(TwitchClient)
export class Home {
  streams;

  constructor (public twitchClient: TwitchClient) {
  }

  created(params) {
    return this.twitchClient.getFeaturedStreams()
      .then(data => this.streams = data);
  }
}
