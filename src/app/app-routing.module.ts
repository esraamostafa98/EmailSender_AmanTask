import { MessageSenderComponent } from './message-sender/message-sender.component';
import { MessageStoreComponent } from './message-store/message-store.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MessageStoreComponent },
  { path: 'messageSender/:id', component: MessageSenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
