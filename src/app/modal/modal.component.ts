import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnChanges {
  @ViewChild('closeButton')
  closeButton?: ElementRef<HTMLButtonElement>;

  @Input()
  activeModal?: boolean;

  @Output()
  activeModalChange = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeModal']?.currentValue) {
      setTimeout(()=>{
        this.closeButton?.nativeElement.focus()
      })

    }
  }

  close() {
    this.activeModalChange.emit(false);
  }
}
