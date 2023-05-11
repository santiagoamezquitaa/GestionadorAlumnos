import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { of } from 'rxjs';
import swal from 'sweetalert2';

fdescribe('Pruebas para LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule],
      providers: [
        FormBuilder,
        AuthService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debería inicializarse el formulario y los campos deben de estar vacíos', () => {
    expect(component.loginUsers.get('email')?.value).toBe('');
    expect(component.loginUsers.get('password')?.value).toBe('');
  });

  it('Debería mostrar un mensaje de error porque el email no está registrado', () => {
    const authService = TestBed.inject(AuthService);
    spyOn(authService, 'getUserByEmail').and.returnValue(of(''));
  
    const swalSpy = spyOn<any>(swal, 'fire');
  
    component.loginUsers.setValue({
      email: 'nonexistent@example.com',
      password: 'password123'
    });
    component.send();
  
    expect(swalSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      title: 'Error',
      text: 'No hay ningun registro de este email.',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }));
  });

  it('Debería hacer login porque el email y la password son correctos', () => {
    const authService = TestBed.inject(AuthService);
    const user = { email: 'test@example.com', password: 'password123' };
    spyOn(authService, 'getUserByEmail').and.returnValue(of(user));

    spyOn(authService, 'login');

    component.loginUsers.setValue({
      email: user.email,
      password: user.password
    });
    component.send();

    expect(authService.login).toHaveBeenCalledWith(user, user.password);
  });
});
