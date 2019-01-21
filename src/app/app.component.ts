import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dataSize:number = 350
  dataPerPage:number

  currentPage:number = 0
  // this involved in paginate function
    currentPaginationButton:number = 1
  // this involved in getPageCount function
    lastPage:number 

  pages:number[] = []
  paginationValues:number[] = []
  offset:number = 0

  ngOnInit(){

    this.pages = []
    this.paginationValues = []

    //p = pages
    var p = Math.ceil(this.dataSize / 20)

    //set number and value of pages
    var i:number
    var x:number = 0

    for(i = 1; i <= p ; i++){
      this.pages.push(i)
      this.paginationValues.push(x)
      x += 20
    }
    this.lastPage = this.pages[this.pages.length - 1]
  }
  next(){
    this.currentPaginationButton += 1
    if((this.pages.length - 5 )> this.currentPage){
      this.currentPage += 1
      this.offset = this.paginationValues[this.currentPaginationButton - 1]
    }
  }
  
  previous(){
    this.currentPaginationButton -= 1
    if(this.currentPage >= 1){
      this.currentPage -= 1
      this.offset = this.paginationValues[this.currentPaginationButton - 1]
    }
  }
  
  first(){
    this.currentPage = 0
    this.offset = 0
    this.currentPaginationButton = 1
  }
  
  last(){
    this.currentPage = this.pages.length - 5
    this.currentPaginationButton = this.pages[this.pages.length - 1]
    this.offset = this.paginationValues[this.paginationValues.length - 1]
  }

  paginate(i:number){
    this.offset = this.paginationValues[i - 1]
    this.currentPaginationButton = i
  }
}
