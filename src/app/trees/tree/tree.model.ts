import { TreePhoto } from 'src/app/data/tree-photo.model';

export interface Tree {
  description: string;
  size: string;
  caveat?: string;
  bonus?: string;
  photo: TreePhoto;
}
