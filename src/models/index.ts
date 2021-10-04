import React from "react";
import {RealStateDetailAttributes} from "../services/models/real-state";

export interface Layout {
    children: React.ReactNode;
}

export interface RealStateData {
    id: string;
    name: string;
    realEstateIds: number[];
}

export interface RealStateIncluded {
    [key: string]: RealStateDetailAttributes;
}

export interface RealStates {
    estates: RealStateData[];
    included: RealStateIncluded;
}

