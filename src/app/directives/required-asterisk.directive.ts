import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'label[appRequiredAsterisk]',
  standalone: true,
})
export class RequiredAsteriskDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const nativeElement: HTMLElement = this.el.nativeElement;

    // Aplicar estilo al label
    this.renderer.setStyle(nativeElement, 'font-weight', '600');

    // Crear el asterisco
    const asterisk = this.renderer.createElement('span');
    const text = this.renderer.createText(' *');

    this.renderer.setStyle(asterisk, 'color', 'red');
    this.renderer.setAttribute(asterisk, 'aria-hidden', 'true');
    this.renderer.appendChild(asterisk, text);

    // Insertar el asterisco al final del label
    this.renderer.appendChild(nativeElement, asterisk);
  }
}
