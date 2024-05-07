import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.css']
})
export class TableExampleComponent {
  albums: any[] = [];
  pagedAlbums: any[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums').subscribe(albums => {
      this.albums = albums;
      this.totalPages = Math.ceil(this.albums.length / this.pageSize);
      this.setPage(1);
    });
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.albums.length);
    this.pagedAlbums = this.albums.slice(startIndex, endIndex);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }
}
