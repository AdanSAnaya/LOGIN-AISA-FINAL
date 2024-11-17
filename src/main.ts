import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de importar HttpClientModule aquí
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Importa HttpClientModule globalmente
bootstrapApplication(AppComponent, {
  providers: [HttpClientModule, ...appConfig.providers], // Asegúrate de incluirlo en los providers
})
  .catch((err) => console.error(err));
