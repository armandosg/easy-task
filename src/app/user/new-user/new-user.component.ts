import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewUserData } from '../user.model';

@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css',
})
export class NewUserComponent {
  enteredName: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewUserData>();

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.add.emit({
      name: this.enteredName,
    });
  }
}
