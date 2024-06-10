import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<void>();
  
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.confirm.emit();
  }
}
