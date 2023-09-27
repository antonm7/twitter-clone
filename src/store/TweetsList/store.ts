import { create } from 'zustand';
import { FullTweetData, FullTweetDataForClient } from '@/lib/types/tweets';

type List = {
  [key:string]:FullTweetDataForClient
}

type State = {
  list: List;
  clearList: () => void;
  setList: (list: FullTweetData[]) => void;
  insertTweet: (comment: FullTweetData) => void;
  removeTweet: (id: string) => void;
  updateLikes:(tweetId:string,method:'inc' | 'dec') => void
};

export const useTweetsListState = create<State>((set) => ({
  list: {},
  clearList: () => set({ list: {} }),
  setList: (list: FullTweetData[]) => {
    let obj_to_push:List = {}
    list.forEach((obj) => {
      obj_to_push[obj._id.toString()] = {...obj}
    })
    return set({ list: obj_to_push})
  },
  insertTweet: (obj) => {
    set((state) => ({
      list: {
        [obj._id.toString()]: { ...obj },
        ...state.list,
      },
    }));
  },
  removeTweet: (id) => {
    set((state) => {
      const updatedList = { ...state.list };
      delete updatedList[id.toString()];
      return { list: updatedList };
    });
  },
  updateLikes: (id, method) => {
    set((state) => {
      const updatedList = { ...state.list };
      if(method === 'dec') {
        updatedList[id].likes -= 1
        updatedList[id].isUserLiked = true
      } else {
        updatedList[id].likes += 1
        updatedList[id].isUserLiked = false
      }
       return { list: updatedList };
    });
  },
}));

