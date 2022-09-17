import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { KarenHeaderComponentComponent } from './components/karen-header-component/karen-header-component.component';
import { KarenTimerComponentComponent } from './components/karen-timer-component/karen-timer-component.component';
import { KarenSimpleInterestsComponentComponent } from './components/karen-simple-interests-component/karen-simple-interests-component.component';
import { KarenCompoundInterestsComponentComponent } from './components/karen-compound-interests-component/karen-compound-interests-component.component';
import { KarenRandomNumbersComponentComponent } from './components/karen-random-numbers-component/karen-random-numbers-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, KarenHeaderComponentComponent, KarenTimerComponentComponent, KarenSimpleInterestsComponentComponent, KarenCompoundInterestsComponentComponent, KarenRandomNumbersComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
