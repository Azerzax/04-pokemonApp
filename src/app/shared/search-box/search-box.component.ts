import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Input()
  public placeholder: string = '';

  @Output()
  public searchBoxEmitter: EventEmitter<string> = new EventEmitter();

  emitEvent(){
    this.searchBoxEmitter.emit(this.txtInput.nativeElement.value)
  }


}
