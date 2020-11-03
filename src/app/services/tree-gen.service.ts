import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { Tree } from '../trees/tree/tree.model';

@Injectable({
  providedIn: 'root',
})
export class TreeGenService {
  private growTree(): Tree {
    return {
      description: 'desc',
      caveat: 'caveat',
      bonus: 'bonus',
      photoUrl: 'https://placeimg.com/250/250/nature',
    };
  }

  getTrees(amount: number): Observable<Tree[]> {
    const trees: Tree[] = [];

    for (let idx = 0; idx < amount; idx += 1) {
      trees.push(this.growTree());
    }

    return of(trees);
  }

  constructor() {}
}
