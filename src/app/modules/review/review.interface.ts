import { Types } from 'mongoose';

export type TReview = {
  userName: string;
  userEmail: string;
  userImage?: string;
  rating: number;
  review: string;
  sellerId: Types.ObjectId;
  productId: Types.ObjectId;
  publishedStatus: 'Published' | 'Unpublished';
};
