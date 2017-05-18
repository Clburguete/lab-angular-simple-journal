import { Routes } from '@angular/router';

import { EntryListComponent } from './entry-list/entry-list.component';
import { SingleEntryComponent } from './single-entry/single-entry.component'

export const routes: Routes = [
  { path: '', redirectTo: 'api/journal-entries', pathMatch: 'full'},
  { path: 'api/journal-entries', component: EntryListComponent },
  {path: 'api/journal-entries/:id', component: SingleEntryComponent}
]
