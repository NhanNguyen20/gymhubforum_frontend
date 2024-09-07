export interface PostStatsProps {
  likeCount: number;
  className?: string;
}

export interface ThreadStatsProps {
  postCount: number;
  viewCount: number;
  likeCount?: number;
  lastUpload: string;
  className?: string;
}

export interface PictureProps {
  blob: Blob | null;
  alt: string;
  className?: string;
}

export interface ProfileInfoProps {
  // img : string;
  profileInfo: {
    id: number;
    userName: string;
    email: string;
    likeCount: number;
    bio: string;
    stringAvatar?: string;
    joinDate: string;
    lastSeen: string;
    className?: string;
  };
}

export interface ProfileStatProps {
  likeCount: number;
  postCount: number;
  followerCount: number;
  className?: string;
}

export interface LatestPostProps {
  tags: TagsProps;
  avatar: Blob | null;
  title: string;
  content: string;
  date: string;
  boxType: string;
  className?: string;
}

export interface TagsProps {
  tags: string[];
  limit: number;
  className?: string;
}

export interface PostDetailProps {
  threadId: string;
  postId: number;
  authorId: number;
  content: string;
  encodedImages?: string[];
  className?: string;
}

export interface ThreadInfoProps {
  id: number;
  creationDateTime: string;
  likeCount: number;
  viewCount: number;
  beenReport: boolean;
  postCount: number;
  authorName: string;
  authorId: string;
  authorAvatar: string;
  name: string;
  className?: string;
}

export interface PostInfoProps {
  id: number;
  creationDateTime: string;
  likeCount: number;
  viewCount: number;
  beenReport: boolean;
  beenLiked: boolean;
  postCount: number;
  authorName: string;
  authorId: string;
  authorAvatar: string;
  name: string;
  className?: string;
}

export enum ThreadCategory {
  FLEXING = "FLEXING",
  ADVISE = "ADVISE",
  SUPPLEMENT = "SUPPLEMENT",
}

export interface ThreadReportProps {
  id: number;
  reason: string[];
  threadCategory: ThreadCategory;
  from: number;
  to: number;
  comment?: string;
}

export interface PostReportProps {
  id: number;
  threadId: number;
  reason: string[];
  from: number;
  to: number;
  comment?: string;
}

export interface LatestPostItemProps {
  content: string;
  date: string;
  boxType: string;
  className?: string;
}

export interface ProfilePreviewProps {
  account: {
    email: string;
    username: string;
    likeCount: number;
    password: string;
    bio: string;
    avatar?: string;
  };
}

export interface NavbarProps {
  title: string;
  listOfTags: string[];
  mID: number;
}

export interface UserBanListTableProps {
  username: string;
  banReason: string;
  banDuration: string;
}

export interface UserBanFormProps {
  title: string;
  joinDate: string;
}