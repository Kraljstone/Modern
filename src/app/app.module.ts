import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './Components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { SalesComponent } from './Pages/Dashboard/Sales/sales.component';
import { TodoComponent } from './Pages/Todo/todo.component';
import { ContactComponent } from './Pages/Contact/contact.component';
import { EmailComponent } from './Pages/Email/email.component';
import { ChatComponent } from './Pages/Chat/chat.component';
import { BasicComponent } from './Pages/Calendars/basic/basic.component';
import { EventsComponent } from './Pages/Calendars/events/events.component';
import { NewsComponent } from './Pages/News/news.component';
import { SocialComponent } from './Pages/Social/social.component';
import { SummaryComponent } from './Pages/Invoice/Summary/summary.component';
import { TemplateComponent } from './Pages/Invoice/Template/template.component';
import { ProfileComponent } from './Pages/User/Profile/profile.component';
import { CardsComponent } from './Pages/User/Cards/cards.component';
import { GridComponent } from './Pages/Gallery/Grid/grid.component';
import { MasonryComponent } from './Pages/Gallery/Masonry/masonry.component';
import { KanBanComponent } from './Pages/Kan-Ban/kan-ban.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LineChartComponent } from './Components/line-chart/line-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieChartComponent } from './Components/pie-chart/pie-chart.component';
import { SalesEmailComponent } from './Components/sales-email/sales-email.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BubbleChartComponent } from './Components/bubble-chart/bubble-chart.component';
import { RecentSalesComponent } from './Components/recent-sales/recent-sales.component';
import { HttpClientModule } from '@angular/common/http';
import { provideDatabase, getDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    NavbarComponent,
    SalesComponent,
    TodoComponent,
    ContactComponent,
    EmailComponent,
    ChatComponent,
    BasicComponent,
    EventsComponent,
    NewsComponent,
    SocialComponent,
    SummaryComponent,
    TemplateComponent,
    ProfileComponent,
    CardsComponent,
    GridComponent,
    MasonryComponent,
    KanBanComponent,
    LineChartComponent,
    PieChartComponent,
    SalesEmailComponent,
    BubbleChartComponent,
    RecentSalesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FontAwesomeModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatMenuModule,
    MatButtonModule,
    MatGridListModule,
    NgxChartsModule,
    MatProgressBarModule,
    HttpClientModule,
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
