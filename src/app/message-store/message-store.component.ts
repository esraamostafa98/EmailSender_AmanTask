import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Messages } from '../Models/messages.model';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message-store',
  templateUrl: './message-store.component.html',
  styleUrls: ['./message-store.component.css'],
})
export class MessageStoreComponent implements OnInit {
  MessageForm: FormGroup;
  messages: Messages[];
  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.MessageForm = this.fb.group({
      messageId: 0,
      subject: '',
      message: '',
    });

    this.messageService.getAllMessage().subscribe({
      next: (message) => {
        this.messages = message;
        console.log(message);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('MessageId', this.MessageForm.get('messageId')?.value);
    formData.append('Subject', this.MessageForm.get('subject')?.value);
    formData.append('Message', this.MessageForm.get('message')?.value);
    this.messageService.AddMessage(formData).subscribe({
      next: (message) => {
        debugger;
        console.log(message);
        location.reload();
      },
      error: (response) => {
        debugger;
        console.log(response);
      },
    });
  }
}
