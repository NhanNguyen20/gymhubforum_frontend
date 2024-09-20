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
        title: '',
        tagIds: [],
        threadCategoryEnum: '',
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

export function findLatestThread(allThreads: ThreadInfoProps[]) {
    if (allThreads.length === 0) {
        return null;
    }
    let latestThread = allThreads[0];
    for (const thread of allThreads) {
        if (thread.id > latestThread.id) {
            latestThread = thread;
        }
    }
    return latestThread.id + 1;
}

export function decodeBase64Image(base64: string): string {
    return `data:image/jpeg;base64,${base64}`;
}

export function decodeBase64Images(base64Images: string | string[]): string | string[] {
    if (Array.isArray(base64Images)) {
        return base64Images.map(decodeBase64Image);
    } else {
        return decodeBase64Image(base64Images);
    }
}

export function capitalizeFirstLetter(str: string): string {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

export function sortThreads(param: string, allThreads: ThreadInfoProps[]) {
    const temp = allThreads;
    const sortedResults = temp?.sort((a, b) => {
        if (param === "latest") {
            return (
                new Date(b.creationDateTime).getTime() -
                new Date(a.creationDateTime).getTime()
            );
        } else if (param === "oldest") {
            return (
                new Date(a.creationDateTime).getTime() -
                new Date(b.creationDateTime).getTime()
            );
        }
        else if (param === "mostLiked") {
            return b.likeCount - a.likeCount;
        } else if (param === "trending") {
            return (b.viewCount - a.viewCount);
        } else return 0; // default case
    });
    return sortedResults;
}

export const getDate = (creationDateStr: string) => {
    console.log('creationDateStr.', typeof (creationDateStr))
    const creationDate = new Date(creationDateStr);

    // Extract just the date part (year, month, day)
    const year = creationDate.getFullYear();
    const month = creationDate.getMonth() + 1; // Months are 0-indexed in JS
    const day = creationDate.getDate();

    // Format the date
    const formattedDate = `${year}-${month}-${day}`;
    return (formattedDate); // Output: "2024-7-11"
};