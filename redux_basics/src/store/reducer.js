const initialState = {
    total: 0,
    id: 0,
    photos: []
};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_IMAGE'){
        // console.log('Added!');
        return {...state,
                id: new Date(),
                photos: state.photos.concat({
                    title: action.title,
                    link: action.link,
                    clicked: 0
                })
        }
    }
    else if(action.type === 'CLICKED') {
        // console.log('Heeee');
        return {
            ...state,
            total : state.total + 1,
            photos: state.photos.map(photo => (photo.id === action.id) ? 
                            {...photo, clicked: photo.clicked + 1}
                            : photo)
            }
    }
    return state;
}

export default reducer;
