import { SubscribeStatus } from '../enums/subscribe.enum';

export type SubscribeParams = Record<any, any>;

export type SubscribeResponse = { message?: string; status: SubscribeStatus };

export type MailchimpSubscribeResponse = {
  msg: string;
  result: SubscribeStatus;
};
