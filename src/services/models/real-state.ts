interface RealStatesGroupAttributes {
    name: string;
    real_estate_ids: number[];
}
export interface RealStatesGroup {
    id: string;
    attributes: RealStatesGroupAttributes;
}

export enum City {
    Bogotá = 'Bogotá',
}

export enum Country {
    Colombia = 'Colombia',
}

export enum LaHausState {
    Active = 'active',
    Inactive = 'inactive',
}

export interface RealStateDetail {
    id: string;
    attributes: RealStateDetailAttributes;
}

export interface RealStateDetailAttributes {
    slug: string;
    name: string;
    description: string;
    code: string;
    city: City;
    country: Country;
    neighborhood: string;
    minArea: number;
    minPrice: number;
    maxPrice: null;
    isNew: boolean;
    stratum: number;
    matterport: null;
    gallery_urls: string[];
    administrationPrice: number | null;
    bathroom: number[];
    bedroom: number[];
    amenities: string[];
    parkingLotsUnits: number[];
    parkingLots: number[];
    yearBuilt: number;
    reservationFee: null;
    reservationFeeMeasureUnit: null;
    builder: null;
    fiduciary: null;
    latitude: number;
    longitude: number;
    laHausState: LaHausState;
    isPrelaunch: boolean;
    laHausCity: City;
    deliveredAt: Date;
    pricePerSquareMeter: number;
    minimumPriceGuaranteed: null;
}

export interface RealStateResponse {
    data: RealStatesGroup[];
    included: RealStateDetail[];
}
