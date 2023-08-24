import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FolderStructureComponent } from './folder-structure/folder-structure.component';
import { RecursiveNodeComponent } from './recursive-node/recursive-node.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderStructureComponent,
    RecursiveNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
