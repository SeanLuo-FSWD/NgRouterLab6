import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mnav',
  templateUrl: './mnav.component.html',
  styleUrls: ['./mnav.component.css'],
})
export class MnavComponent implements OnInit {
  @Input()
  navState;

  @Input()
  genreList;

  @Output() genreSelected = new EventEmitter<{
    genreId: number;
  }>();

  @ViewChild('genreInput', { static: true })
  genreInput: ElementRef;

  onChangeGenre() {
    this.genreSelected.emit({ genreId: +this.genreInput.nativeElement.value });
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigate(next: boolean) {
    if (next) {
      if (this.navState[0] < this.navState[1]) {
        this.router.navigate([this.navState[0] + 1]);
      }
    } else {
      if (this.navState[0] > 1) {
        this.router.navigate([this.navState[0] - 1]);
      }
    }
  }
}
