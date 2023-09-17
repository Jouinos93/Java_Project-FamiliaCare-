import { Component, OnInit } from '@angular/core';
import { SitterService } from 'src/app/services/sittersservice';
import { Sitter } from 'src/app/models/sitter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-one-sitter',
  templateUrl: './show-one-sitter.component.html',
  styleUrls: ['./show-one-sitter.component.css']
})
export class ShowOneSitterComponent implements OnInit {

  sitter!: Sitter;

  constructor(
    private route: ActivatedRoute,
    private sitterService: SitterService
  ) { }

  ngOnInit(): void {
    this.sitter = new Sitter();
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.sitterService.getSitter(id).subscribe((sitter: Sitter) => {
        this.sitter = sitter;
      });
    });
  }
}