import { Pipedream } from "@pipedream/types";

interface PdAxiosRequest {
  $: Pipedream;
}

export interface HttpRequestParams extends PdAxiosRequest {
  url: string;
  data?: object | string;
  params?: object;
}

export interface AddUserToListParams extends PdAxiosRequest {
  listId: string;
  data: {
    user_id: string;
  };
}

export interface CreateTweetParams extends PdAxiosRequest {
  data: {
    text: string;
    geo?: {
      place_id: string;
    };
    media?: {
      media_ids: string[];
      tagged_user_ids: string[];
    };
    reply?: {
      exclude_reply_user_ids: string[];
      in_reply_to_tweet_id: string;
    };
  };
}

export interface FollowUserParams extends PdAxiosRequest {
  data: {
    target_user_id: string;
  };
}

export interface GetLikedTweetParams extends PdAxiosRequest {
  userId: string;
  params: TweetFields;
}

export interface GetOwnedListsParams extends PdAxiosRequest {
  userId: string;
}

export interface GetUserMentionsParams extends PdAxiosRequest {
  userId: string;
}

export interface GetUserTweetsParams extends PdAxiosRequest {
  userId: string;
}

interface UserFields {
  expansions: string;
  "tweet.fields": string;
  "user.fields": string;
}

export interface GetUserParams extends PdAxiosRequest {
  userId: string;
  params: UserFields;
}

interface TweetFields {
  expansions: string;
  "media.fields": string;
  "place.fields": string;
  "poll.fields": string;
  "tweet.fields": string;
  "user.fields": string;
}

export interface GetTweetParams extends PdAxiosRequest {
  tweetId: string;
  params: TweetFields;
}

export interface ListFollowersParams extends PdAxiosRequest {
  userId: string;
  params: UserFields;
}

export interface UnfollowUserParams extends PdAxiosRequest {
  userId: string;
}

export interface LikeTweetParams extends PdAxiosRequest {
  data: {
    tweet_id: string;
  };
}
export interface RetweetParams extends PdAxiosRequest {
  data: {
    tweet_id: string;
  };
}

export interface UnlikeTweetParams extends PdAxiosRequest {
  tweetId: string;
}