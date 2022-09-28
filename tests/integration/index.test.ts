import * as httpUtils from '../../src/utils/http.utils';
import { MailchimpSubscription } from '../../src';

const URL = 'foo';

describe('mailchimp integration test suit', () => {
  const axiosSuccessMockedResponse = {
    result: 'success',
    msg: 'Thank you for subscribing!',
  };

  const axiosErrorMockedResponse = {
    result: 'error',
    msg: 'foo',
  };

  beforeEach(async () => {
    jest.resetModules();
  });

  it('should return correct response', async () => {
    jest
      .spyOn(httpUtils, 'get')
      .mockImplementation(async () => axiosSuccessMockedResponse);

    const resp = await new MailchimpSubscription(URL).subscribe({
      EMAIL: 'foo',
      LNAME: 'fooo',
    });

    expect(resp).toMatchObject({
      status: 'success',
      message: 'Thank you for subscribing!',
    });
  });

  it('should return error', async () => {
    jest
      .spyOn(httpUtils, 'get')
      .mockImplementation(async () => axiosErrorMockedResponse);

    const resp = await new MailchimpSubscription(URL).subscribe({
      EMAIL: 'foo',
      LNAME: 'fooo',
    });

    expect(resp).toMatchObject({
      status: 'error',
      message: 'foo',
    });
  });
});
