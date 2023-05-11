import { TestBed } from '@angular/core/testing';
import { SharedService } from './shared.service';

fdescribe('SharedService', () => {
  let sharedService: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedService],
    });

    sharedService = TestBed.inject(SharedService);
  });

  it('Debería poner y obtener el mensaje', () => {
    const message = 'Hello, world!';

    sharedService.setMessage(message);
    expect(sharedService.getMessage()).toEqual(message);
  });

  it('Deberia de cambiar el estado de inscripción', () => {
    expect(sharedService.inscriptionStatus).toBeFalsy();

    sharedService.inscriptionMode(true);
    expect(sharedService.inscriptionStatus).toBeTruthy();

    sharedService.inscriptionMode(false);
    expect(sharedService.inscriptionStatus).toBeFalsy();
  });
});
