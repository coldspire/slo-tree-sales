import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { TreeGenService } from '../services/tree-gen.service';
import { Tree } from './tree/tree.model';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.scss'],
})
export class TreesComponent implements OnInit {
  trees: Tree[];

  constructor(private treeGen: TreeGenService) {
    this.trees = [];
  }

  private addMoreTrees(amount: number): void {
    this.treeGen
      .getTrees(amount)
      .pipe(take(1))
      .subscribe({
        next: (freshTrees: Tree[]) => {
          this.trees.push(...freshTrees);
        },
      });
  }

  ngOnInit(): void {
    this.addMoreTrees(6);
  }

  onAddTrees(): void {
    this.addMoreTrees(6);
  }
}
