import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IntroductionComponent }   from './introduction/introduction.component';
import { InstallationComponent }   from './installation/installation.component';
import { ReleasesComponent }   from './releases/releases.component';
import { ReleaseComponent }   from './releases/release.component';
import { CliModuleComponent }   from './modules/cli.component';
import { CompressModuleComponent }   from './modules/compress.component';
import { ConfigModuleComponent }   from './modules/config.component';

import { ReleaseService }   from './releases/release.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    IntroductionComponent,
    InstallationComponent,
    ReleasesComponent,
    ReleaseComponent,
    CliModuleComponent,
    CompressModuleComponent,
    ConfigModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ReleaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
