import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { NgModel } from '@angular/forms';

import { AppComponent } from './app.component';
import { MarkComponent } from './mark/mark.component';

const routes: Routes = [
  { path: '', redirectTo: '/mark', pathMatch: 'full' },
  { path: 'mark', component: MarkComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MarkComponent
  ],
  imports: [
    BrowserModule,
    LMarkdownEditorModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
