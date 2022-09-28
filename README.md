
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]



## Mailchimp subscription library
Allows you to subscribe users to your Mailchimp list. You can use it in your favourite framework or even in plain js/ts project.
### Installation

```sh
  npm i mailchimp-subscription-library
```

### Usage
1. Retrieve mailchimp signup form url, something like 
    ```
    https://YOUR_MAILCHIMP_FORM_HOST/subscribe?u=YOUR_U&id=YOUR_FORM_ID
    ```
2. Import the module
   ```typescript
   import { MailchimpSubscription } from 'mailchimp-subscription';
    ```
3. Create a new instance and call the subscribe method
   ```typescript
   const mailchimpSubscription = new MailchimpSubscription('https://YOUR_MAILCHIMP_FORM_HOST/subscribe?u=YOUR_U&id=YOUR_FORM_ID');
   const res = await mailchimpSubscription.subscribe({ FOO: 'bar' });
   
   // the response type
   { message?: string; status: SubscribeStatus }
   ```

[contributors-shield]: https://img.shields.io/github/contributors/elcrostatina/mailchimp-subscribe.svg?style=for-the-badge
[contributors-url]: https://github.com/elcrostatina/mailchimp-subscribe/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/elcrostatina/mailchimp-subscribe.svg?style=for-the-badge
[forks-url]: https://github.com/elcrostatina/mailchimp-subscribe/network/members
[stars-shield]: https://img.shields.io/github/stars/elcrostatina/mailchimp-subscribe.svg?style=for-the-badge
[stars-url]: https://github.com/elcrostatina/mailchimp-subscribe/stargazers
[issues-shield]: https://img.shields.io/github/issues/elcrostatina/mailchimp-subscribe.svg?style=for-the-badge
[issues-url]: https://github.com/elcrostatina/mailchimp-subscribe/issues
