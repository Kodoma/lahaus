import { RealStates } from '../models';
import { RealStateResponse } from './models/real-state'

import realEstatesMock from './mocks/real-states.json';
import {dataMapper, includedMapper} from "./converters";

class RealStatesService {
    private mapperList(response: RealStateResponse): RealStates {
        const { data, included } = response;
        return {
            estates: dataMapper(data, included),
            included: includedMapper(included),
        };

    }

    public async getList(): Promise<RealStates> {
        return new Promise((resolve) => {
            resolve(this.mapperList(realEstatesMock as any));
        });
    }
}

export const realStateClient = new RealStatesService();
