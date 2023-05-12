import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './Pages/Dashboard/Sales/sales.component';
import { TodoComponent } from './Pages/Todo/todo.component';
import { ContactComponent } from './Pages/Contact/contact.component';
import { EmailComponent } from './Pages/Email/email.component';
import { ChatComponent } from './Pages/Chat/chat.component';
import { BasicComponent } from './Pages/Calendars/basic/basic.component';
import { EventsComponent } from './Pages/Calendars/events/events.component';
import { KanBanComponent } from './Pages/Kan-Ban/kan-ban.component';
import { NewsComponent } from './Pages/News/news.component';
import { SocialComponent } from './Pages/Social/social.component';
import { SummaryComponent } from './Pages/Invoice/Summary/summary.component';
import { TemplateComponent } from './Pages/Invoice/Template/template.component';
import { CardsComponent } from './Pages/User/Cards/cards.component';
import { ProfileComponent } from './Pages/User/Profile/profile.component';
import { GridComponent } from './Pages/Gallery/Grid/grid.component';
import { MasonryComponent } from './Pages/Gallery/Masonry/masonry.component';
import { NotFoundComponent } from './Pages/Not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/sales', pathMatch: 'full' },
  { path: 'dashboard/sales', component: SalesComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'email', component: EmailComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'calendars/basic', component: BasicComponent },
  { path: 'calendars/events', component: EventsComponent },
  { path: 'kan-ban', component: KanBanComponent },
  { path: 'feed', component: NewsComponent },
  { path: 'invoice/summary', component: SummaryComponent },
  { path: 'invoice/template', component: TemplateComponent },
  { path: 'user/cards', component: CardsComponent },
  { path: 'user/profile', component: ProfileComponent },
  { path: 'social', component: SocialComponent },
  { path: 'gallery/grid', component: GridComponent },
  { path: 'gallery/masonry', component: MasonryComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
