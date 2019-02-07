import { ADD_PLACE, DELETE_PLACE } from "../actions/actionType";
import mysorePalace from '../../assets/mysore_palace.jpg';

const initialState = {
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: "" + Math.random(),
                    name: action.placeName,
                    image: mysorePalace
                })
            };

        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.key;
                })
            };

        default:
            return state
    }
}

export default reducer;