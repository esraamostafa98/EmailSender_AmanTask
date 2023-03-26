import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Messages } from '../Models/messages.model';
import { MessageSend } from '../Models/messageSender.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) {}
  getMessageById(id: number): Observable<Messages> {
    return this.http.get<Messages>(this.baseApiUrl + '/api/Sender/' + id);
  }
  getAllMessage(): Observable<Messages[]> {
    return this.http.get<Messages[]>(this.baseApiUrl + '/api/Sender/');
  }

  AddMessage(formData: FormData) {
    return this.http.post<any>(
      this.baseApiUrl + '/api/Sender/postdata',
      formData
    );
  }

  SendMessage(model: MessageSend) {
    return this.http.post<any>(this.baseApiUrl + '/api/Sender/sendmail', model);
  }
}
