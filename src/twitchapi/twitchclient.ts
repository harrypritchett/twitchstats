import {autoinject} from 'aurelia-framework'
import {HttpClient} from 'aurelia-fetch-client';

@autoinject
export class TwitchClient {

  constructor(private httpClient: HttpClient) {
    httpClient.configure(config => {
      config
        .withBaseUrl('https://api.twitch.tv/kraken/')
        .withDefaults({
          headers: {
            'Accept': 'application/vnd.twitchtv.v5+json',
            'X-Requested-With': 'Fetch',
            'Client-ID': 'o6wm2ciet6ecsghyst3nsh1qiifmti'
          }
        })
        .withInterceptor({
          request(request) {
            // console.log(`Requesting ${request.method} ${request.url}`);
            return request;
          },
          response(response) {
            // console.log(`Received ${response.status} ${response.url}`);
            return response.json();
          }
        });
    });
  }

  getChannels(query): Promise<Response> {
    return this.httpClient.fetch(`search/channels?query=${query}`);
  }

  getTopGames(): Promise<Response> {
    return this.httpClient.fetch(`games/top?limit=12`);
  }

  getGameById(id): Promise<Response> {
    return this.httpClient.fetch(`games/490429`);
  }

  getChannelById(id): Promise<Response> {
    return this.httpClient.fetch(`channels/${id}`);
  }

  getFeaturedStreams(): Promise<Response> {
    return this.httpClient.fetch(`streams/featured`);
  }
}
