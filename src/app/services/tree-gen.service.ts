import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tree } from '../trees/tree/tree.model';
import { TreePhoto } from '../data/tree-photo.model';
import { TreeVarieties } from '../data/tree-varieties';
import { TreePhotos } from '../data/tree-photos';

@Injectable({
  providedIn: 'root',
})
export class TreeGenService {
  private readonly treeVars = TreeVarieties;
  private readonly treePhotos = TreePhotos;

  private getRndBool(): boolean {
    const result = Math.floor(Math.random() * Math.floor(2));
    console.log(result);
    return result === 1;
  }

  private getRndIdxInArr(maxNum: number): number {
    const lastIdx = maxNum - 1;
    const rndIdx = Math.floor(Math.random() * Math.floor(lastIdx));
    return rndIdx;
  }

  //// Photo stuff
  private get numTreePhotos(): number {
    return this.treePhotos.length;
  }
  private getRndTreePhoto(): TreePhoto {
    const maxNum = this.numTreePhotos - 1;
    const rndIdx = this.getRndIdxInArr(maxNum);
    return this.treePhotos[rndIdx];
  }
  ////

  //// Tree type stuff
  private get numTreeTypeBases(): number {
    return this.treeVars.types.bases.length;
  }
  private get numTreeTypeMods(): number {
    return this.treeVars.types.modifiers.length;
  }
  private getTreeDescription(): string {
    const idxBase = this.getRndIdxInArr(this.numTreeTypeBases);
    const idxMod = this.getRndIdxInArr(this.numTreeTypeMods);

    const desc = `${this.treeVars.types.modifiers[idxMod]} ${this.treeVars.types.bases[idxBase]}`;
    return desc;
  }
  ////

  //// Bonus stuff
  private get numTreeBonusBases(): number {
    return this.treeVars.bonuses.bases.length;
  }
  private get numTreeBonusModifiers(): number {
    return this.treeVars.bonuses.modifiers.length;
  }
  private getTreeBonus(): string {
    const showBonus = this.getRndBool();
    if (!showBonus) {
      return '';
    }

    const idxBase = this.getRndIdxInArr(this.numTreeBonusBases);
    const showMod = this.getRndBool();

    let desc: string;
    if (showMod) {
      const idxMod = this.getRndIdxInArr(this.numTreeBonusModifiers);
      desc = `${this.treeVars.bonuses.modifiers[idxMod]} ${this.treeVars.bonuses.bases[idxBase]}`;
    } else {
      desc = `${this.treeVars.bonuses.bases[idxBase]}`;
    }

    return desc;
  }
  ////

  //// Caveat stuff
  private get numTreeCaveatBases(): number {
    return this.treeVars.caveats.bases.length;
  }
  private get numTreeCaveatModifiers(): number {
    return this.treeVars.caveats.modifiers.length;
  }
  private getTreeCaveat(): string {
    const showCaveat = this.getRndBool();
    if (!showCaveat) {
      return '';
    }

    const idxBase = this.getRndIdxInArr(this.numTreeCaveatBases);
    const showMod = this.getRndBool();

    let desc: string;
    if (showMod) {
      const idxMod = this.getRndIdxInArr(this.numTreeCaveatModifiers);
      desc = `${this.treeVars.caveats.modifiers[idxMod]} ${this.treeVars.caveats.bases[idxBase]}`;
    } else {
      desc = `${this.treeVars.caveats.bases[idxBase]}`;
    }

    return desc;
  }
  ////

  private growTree(): Tree {
    const bonus = this.getTreeBonus();
    const caveat = this.getTreeCaveat();

    return {
      description: this.getTreeDescription(),
      bonus: bonus ? `with ${bonus}` : '',
      caveat: caveat ? `may include ${caveat}` : '',
      photo: this.getRndTreePhoto(),
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
