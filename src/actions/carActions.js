import { ADD_FEATURE, REMOVE_FEATURE } from '../reducers/carReducer';

export const removeFeature = feature => {
    // dispatch an action here to remove an feature
    return { type: REMOVE_FEATURE, payload: feature };
};

export const buyItem = feature => {
    // dipsatch an action here to add an item
    return { type: ADD_FEATURE, payload: feature };
};