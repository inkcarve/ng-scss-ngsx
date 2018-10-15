import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Index } from './index';

describe('Index', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        Index
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(Index);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ngScssNgxs'`, () => {
    const fixture = TestBed.createComponent(Index);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngScssNgxs');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(Index);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to ngScssNgxs!');
  });
});
