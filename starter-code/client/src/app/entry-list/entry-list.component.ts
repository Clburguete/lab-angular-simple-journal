import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../journal-service.service'
@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [JournalServiceService]
})
export class EntryListComponent implements OnInit {
  entries;
  constructor(private entry: JournalServiceService) { }

  ngOnInit() {
    this.entry.getEntries()
    .subscribe((entries) => {
      this.entries = entries;
      console.log(entries)
    })
  }

}
