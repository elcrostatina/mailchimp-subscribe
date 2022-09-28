import { SubscribeStatus } from '../enums/subscribe.enum';

export type SubscribeParams = { [key: string]: string };

export type SubscribeResponse = { message?: string; status: SubscribeStatus };

export type MailchimpSubscribeResponse = {
  msg: string;
  result: SubscribeStatus;
};
