import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'




import { AppComponent } from './app.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
   
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
