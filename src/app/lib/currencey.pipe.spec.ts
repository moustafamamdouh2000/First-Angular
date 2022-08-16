import { CurrenceyPipe } from './currencey.pipe';

describe('CurrenceyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrenceyPipe();
    expect(pipe).toBeTruthy();
  });
});
