import {
  AfterViewInit,
  Component,
  ElementRef, Inject,
  OnInit,
  ViewChild
} from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { PhotoDto } from '../core/todos.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
  @ViewChild('closeButton')
  closeButton?: ElementRef<HTMLButtonElement>;

  constructor(
    public dialogRef: DialogRef<string>,
    @Inject(DIALOG_DATA) public photos: PhotoDto[]
  ) {
  }

  ngAfterViewInit(): void {
    this.closeButton?.nativeElement.focus();
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }
}
