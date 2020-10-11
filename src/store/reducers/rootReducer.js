const initialState = {
  list: [],
  info: {
    urls: {
      regular: ''
    },
    exif: {
      make: '',
      model: '',
      exposure_time: '',
      aperture: '',
      focal_length: '',
      iso: '',
    },
    location: {
      city: '',
      country: '',
      latitude: '',
      longitude: '',
    },
    tags: []
  }
};

export const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_UNSPLASH_API': 
      return {
        ...state,
        list: action.payload
      }
    case 'FETCH_UNSPLASH_INFO_API': 
      return {
        ...state,
        info: action.payload
      }
    default:
      return state;
  }
};