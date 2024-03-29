import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.shows') isOpen = false;
  @HostListener('click') toggleOpen() {
    console.log('clicked');
    this.isOpen = !this.isOpen;
  }
}
