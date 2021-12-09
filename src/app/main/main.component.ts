import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  list = [];
  displayList = [];
  navState: [number, number] = [0, 0];
  slice: number = 4;
  id = 0;
  genre = 0;
  genreList = [
    {
      id: 28,
      name: 'Action',
    },
    {
      id: 12,
      name: 'Adventure',
    },
    {
      id: 16,
      name: 'Animation',
    },
    {
      id: 35,
      name: 'Comedy',
    },
    {
      id: 80,
      name: 'Crime',
    },
    {
      id: 99,
      name: 'Documentary',
    },
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 10751,
      name: 'Family',
    },
    {
      id: 14,
      name: 'Fantasy',
    },
    {
      id: 36,
      name: 'History',
    },
    {
      id: 27,
      name: 'Horror',
    },
    {
      id: 10402,
      name: 'Music',
    },
    {
      id: 9648,
      name: 'Mystery',
    },
    {
      id: 10749,
      name: 'Romance',
    },
    {
      id: 878,
      name: 'Science Fiction',
    },
    {
      id: 10770,
      name: 'TV Movie',
    },
    {
      id: 53,
      name: 'Thriller',
    },
    {
      id: 10752,
      name: 'War',
    },
    {
      id: 37,
      name: 'Western',
    },
  ];

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    await this.fetchList();
    this.id = +this.route.snapshot.params['id'];

    this.route.params.subscribe((params: Params) => {
      console.log('param changed');
      console.log(params['id']);

      this.id = +params['id'];
      this.initProps();
    });
  }

  onChangeGenre(genre) {
    this.genre = +genre.genreId;
    this.initProps();
    this.router.navigate(['1']);
  }

  private fetchList(): any {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=30f1528aa3b148352fb926ffd693b275&language=en-US&page=1'
      )
      .subscribe(async (result: any) => {
        this.list = await result.results;
        this.initProps();
      });
  }

  private initProps(): any {
    let genreList;
    let newNavState: [number, number] = [...this.navState];
    newNavState[0] = this.id;
    this.navState = newNavState;
    const jump = (this.navState[0] - 1) * this.slice;

    if (this.genre === 0) {
      genreList = [...this.list];
    } else {
      genreList = this.list.filter((m) => m.genre_ids.includes(this.genre));
    }

    newNavState[1] = Math.ceil(genreList.length / this.slice);

    this.displayList = genreList.slice(jump, jump + this.slice);
  }
}
