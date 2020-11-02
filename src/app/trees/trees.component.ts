import { Component, OnInit } from '@angular/core';
import { Tree } from './tree/tree.model';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss'],
})
export class TreesComponent implements OnInit {
  trees: Tree[];

  constructor() {
    this.trees = [
      {
        description: 'desc',
        caveat: 'caveat',
        bonus: 'bonus',
        photoUrl: 'https://placeimg.com/250/250/nature',
      },
      {
        description: 'desc',
        caveat: 'caveat',
        bonus: 'bonus',
        photoUrl: 'https://placeimg.com/250/250/nature',
      },
    ];
  }

  ngOnInit(): void {}
}
