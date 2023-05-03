import { MakeFullNamePipe } from './make-full-name.pipe';

describe('MakeFullNamePipe', () => {
  it('create an instance', () => {
    const pipe = new MakeFullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
