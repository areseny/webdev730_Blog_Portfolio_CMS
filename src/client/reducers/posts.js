import { 
  FETCH_POSTS, 
  FETCH_POST
} from '../constants';

const INITIAL_STATE = { 
  posts: [], 
  limit: 20, 
  page: 1, 
  total: 0, 
  post: { title: '', publishedAt: '' },
  error: null
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
   
    case FETCH_POSTS.SUCCESS:
     
      // NOTE: reset params in the case of initial load, otherwise keep previous params
      let posts;
      if(action.payload.page === 1) {
        posts = [...action.payload.posts]
      } else {
        posts = [...state.posts, ...action.payload.posts]
      }

      return { 
        ...state, 
        posts,
        limit: action.payload.limit, 
        page: action.payload.page, 
        total: action.payload.total 
      };
    
    case FETCH_POST.SUCCESS:
      return { post: action.payload.post };
    
    case FETCH_POSTS.FAILURE:
    case FETCH_POST.FAILURE:
  
    default:
      return state;
  }
}