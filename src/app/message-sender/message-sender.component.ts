import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Messages } from '../Models/messages.model';
import { MessageSend } from '../Models/messageSender.model';
import { MessageService } from '../service/message.service';

@Component({
  selector: 'app-message-sender',
  templateUrl: './message-sender.component.html',
  styleUrls: ['./message-sender.component.css'],
})
export class MessageSenderComponent implements OnInit {
  model: MessageSend = {
    messageId: 0,
    mail: '',
  };

  constructor(
    private messageService: MessageService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (prams) => {
        const id = prams.get('id');

        if (id) {
          this.messageService.getMessageById(+id).subscribe({
            next: (response) => {
              this.model.messageId = response.messageId;
            },
          });
        }
      },
    });
  }

  onSubmit() {
    this.messageService.SendMessage(this.model).subscribe({
      next: (message) => {
        console.log(message);
        this.router.navigate(['/']);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
