import { Download } from './download';

export class Release {
  name: string;
  date: string;
  notes: string;
  bugs: string;
  downloads: Download[];
}
