import { configureStore } from "redux-starter-kit";


const store = configureStore({
    reducer:{
        users: () => {
            return null
        },
        game: () => {
            return null
        }
    }
});

export default store;