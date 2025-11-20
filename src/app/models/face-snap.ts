export class FaceSnap {
    location?: string;
    constructor(
        public title: string,
        public description: string,
        public createdAt: Date,
        public snaps: number,
        public imgUrl: string
    ) {}

    addSnap(): void {
        this.snaps++;
    }

    removeSnap(): void {
        this.snaps--;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): FaceSnap {
        this.setLocation(location);
        return this;
    }
}
