import { ThreadInfoProps } from "@/types"

export async function findThreadById(id: number, threads: ThreadInfoProps[]) {
    const empty: ThreadInfoProps = {
        id: 0,
        creationDateTime: '',
        likeCount: 0,
        viewCount: 0,
        beenReport: false,
        postCount: 0,
        authorName: '',
        authorId: '',
        authorAvatar: '',
        title: ''
    }
    const res = (threads).find((thread) => thread.id == id)
    return res || empty;
}

export function getPostTitle(likeCount: number) {
    switch (true) {
        case likeCount <= 10:
            return "Chicken Leg";
        case likeCount <= 20:
            return "Try-harder";
        case likeCount <= 40:
            return "Gym Rat";
        case likeCount <= 100:
            return "Gym Bro";
        case likeCount <= 500:
            return "Acient Gymmer";
        default:
            return "Mr.Olympia";
    }
}
