import dayjs from 'dayjs';
import { Review } from './types/reviews';

export const sortCommentsByDate = (commentA: Review, commentB: Review) => dayjs(commentA.date).diff(dayjs(commentB.date));

