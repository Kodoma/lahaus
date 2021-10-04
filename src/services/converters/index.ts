import {RealStateDetail, RealStatesGroup} from "../models/real-state";
import {RealStateData, RealStateIncluded} from "../../models";

const getImages = (item: RealStatesGroup, included: RealStateDetail[]) => {
    return item.attributes.real_estate_ids
        .map((realEstateId) => {
            const element = included.find(element => element.id === realEstateId.toString());
            const { gallery_urls, name } = (element) ? element.attributes: { name: '', gallery_urls: [] };
            if (gallery_urls && gallery_urls.length > 0) {
                return {
                    id: realEstateId.toString(),
                    image: gallery_urls[0],
                    alt: name,
                };
            }
            return undefined;
        })
        .filter((item) => !!item);
}

export const dataMapper = (data: RealStatesGroup[], included: RealStateDetail[]): RealStateData[] => {
    return data.map((item) => {
        return {
            id: item.id,
            name: item.attributes.name,
            images: getImages(item, included),
            realEstateIds: item.attributes.real_estate_ids,
        };
    });
};

export const includedMapper = (data: RealStateDetail[]): RealStateIncluded => {
    const newData: any = {};
    data.forEach((item) => {
        const { id, attributes } = item;
        newData[id] = attributes;
    });

    return newData;
};
