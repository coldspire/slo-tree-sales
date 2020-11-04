import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tree } from '../trees/tree/tree.model';
import { TreePhoto } from '../data/tree-photo.model';
import { TreePhotos } from '../data/tree-photos';

@Injectable({
  providedIn: 'root',
})
export class TreeGenService {

  private readonly treePhotos = TreePhotos;
  private get numTreePhotos(): number {
    return this.treePhotos.length;
  }
  private getRndTreePhoto(): TreePhoto {
    const maxNum = this.numTreePhotos - 1;
    const rndIdx = Math.floor(Math.random() * Math.floor(maxNum));
    return this.treePhotos[rndIdx];
  }

  private growTree(): Tree {
    return {
      description: 'desc',
      caveat: 'caveat',
      bonus: 'bonus',
      photo: this.getRndTreePhoto()
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
