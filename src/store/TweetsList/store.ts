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
  updateRetweets:(tweetId:string,method:'inc' | 'dec') => void
  getIsUserLiked:(tweetId:string) => boolean
  getLikesLength:(tweetId:string) => number
};

export const useTweetsListState = create<State>((set,get) => ({
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
        updatedList[id].isUserLiked = false
      } else if(method === 'inc') {
        updatedList[id].likes += 1
        updatedList[id].isUserLiked = true
      }
       return { list: updatedList };
    });
  },
  updateRetweets: (id, method) => {
    set((state) => {
      const updatedList = { ...state.list };
      if(method === 'dec') {
        updatedList[id].retweets -= 1
        updatedList[id].isUserRetweeted = false
      } else if(method === 'inc') {
        updatedList[id].retweets += 1
        updatedList[id].isUserRetweeted = true
      }
       return { list: updatedList };
    });
  },
  getIsUserLiked:(tweetId:string) => get().list[tweetId]?.isUserLiked || false,
  getLikesLength:(tweetId:string) => get().list[tweetId]?.likes || 0
}));


