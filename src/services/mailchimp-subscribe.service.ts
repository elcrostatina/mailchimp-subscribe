import {
  MailchimpSubscribeResponse,
  SubscribeParams,
  SubscribeResponse,
} from '../types/subscribe.type';
import { get } from '../utils/http.utils';
import { SubscribeStatus } from '../enums/subscribe.enum';
import { replace } from '../utils/string.utils';

export class MailchimpSubscribe {
  constructor(private readonly url: string) {}

  public async subscribe(params: SubscribeParams): Promise<SubscribeResponse> {
    try {
      const response = await get<MailchimpSubscribeResponse>({
        url: replace(this.url, '/post?', '/post-json?'),
        params,
      });

      return {
        message: response.msg,
        status: response.result,
      };
    } catch (e) {
      return {
        message: e.response.data.msg,
        status: SubscribeStatus.ERROR,
      };
    }
  }
}
