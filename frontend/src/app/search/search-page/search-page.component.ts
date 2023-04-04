import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchTerm = ''

  constructor(activatedRoute: ActivatedRoute, private router: Router){

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm) this.searchTerm=params.searchTerm
    })
  }

  ngOnInit(): void {

  }

  search(term:string){
    if(term)
    this.router.navigateByUrl('search/' + term)
  }

}
