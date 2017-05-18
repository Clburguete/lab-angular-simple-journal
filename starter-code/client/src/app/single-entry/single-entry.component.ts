import { Component, OnInit } from '@angular/core';
import { JournalServiceService } from '../journal-service.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [JournalServiceService]
})
export class SingleEntryComponent implements OnInit {
entry: any;
  constructor(
    private route: ActivatedRoute,
    private entryService: JournalServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getEntryDetails(params['id']);
  });

}

  getEntryDetails(id){
    this.entryService.getSingleEntry(id).subscribe((entry)=>{
      this.entry = entry;
    })
  }
}
