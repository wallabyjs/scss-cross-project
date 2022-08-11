import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

function getBackgroundColor(element: Element) {
  function convert(rgb: string) {
    const result = rgb.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/
    );
    function hex(x: string) {
      return ('0' + parseInt(x).toString(16)).slice(-2);
    }

    if (!result) {
      return '';
    }

    return '#' + hex(result[1]) + hex(result[2]) + hex(result[3]);
  }
  return convert(
    window.getComputedStyle(element, null).getPropertyValue('background-color')
  );
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'shared-theme-components'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('shared-theme-components');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const element = compiled.querySelector('span');
    expect(element).toBeDefined();
    expect(element?.textContent).toContain(
      'shared-theme-components app is running!'
    );
    if (element) {
      expect(getBackgroundColor(element)).toBe('#c6538c');
    }
  });
});
