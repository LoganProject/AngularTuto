import {SnapType} from './snap-type.type';

export class FaceSnap {
    location?: string;
    id: number;

    constructor(
        public title: string,
        public description: string,
        public createdDate: Date,
        public snaps: number,
        public imageUrl: string,
        specificId?: number
    ) {
      if(specificId) {
        this.id = specificId;
      } else {
        this.id = Number(crypto.randomUUID().substring(0, 8));
      }
    }

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    handleSnap(snapType: SnapType) {
      if(snapType === 'snap') {
        this.addSnap();
      } else {
        this.removeSnap();
      }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}
