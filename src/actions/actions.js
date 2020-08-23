
export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = featureInfo => {
    return { type: ADD_FEATURE, payload: featureInfo };
}

export const removeFeature = featureInfo => {
    return { type: REMOVE_FEATURE, payload: featureInfo};
}