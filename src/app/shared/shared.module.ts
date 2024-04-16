import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const components = [ HeaderComponent, FooterComponent ];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  declarations: [...components],
  exports: [...components],
})

export class SharedModule {}
