import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListPokemonsComponentComponent } from './list-pokemons-component/list-pokemons-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonSearchPipe } from './pokemon-search.pipe';
import { FormsModule } from '@angular/forms';
import { BorderDirectiveDirective } from './border-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListPokemonsComponentComponent,
    PokemonSearchPipe,
    BorderDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
