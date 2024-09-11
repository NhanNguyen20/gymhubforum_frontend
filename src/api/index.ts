import { AxiosResponse } from "axios";
import axios from "./axios";

// call other functions based on the form type
export async function handleForm(formType: string, data: any) {
    switch (formType) {
        case "signup":
            signup(data);
        case "login":
            login(data);
    }
}

//// ===== AUTH ===== ////
export async function signup(data: any) {
    const res = await axios.post("/auth/register", data);
    console.log(res.status)
}

export async function login(data: any) {
    const res = await axios.post("/auth/login", data)
    const token = res.data.accessToken;
    console.log(token)
    console.log(res.data)
}

//// ===== THREAD ===== ////
// fetch all threads of a box (category)
export async function fetchBoxThreads(category: string | any) {
    try {
        const res = await axios.get(`thread/${category.toLowerCase()}`);
        if (category.toLowerCase() === 'suggested') return res.data['By PostCreation'];
        // console.log(res.status, res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

// fetch all threads of a member
export async function fetchThreadsUser(id: number, limit: number, page: number) {
    try {
        const res = await axios.get(`thread/user-${id}?limit=${limit}&page=${page}`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function createThread(data: any) {
    try {
        const res = await axios.post(`thread/new`, data);
        console.log(res.status)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchThreadByID(id: number) {
    try {
        const res = await axios.get(`thread/${id}`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

//// ===== POST ===== ////
// fetch posts belonging to the authenticated member
export async function fetchPostsUser(limit: number, page: number) {
    try {
        const res = await axios.get(`post/user?limit=${limit}&page=${page}`);
        console.log(res.data, res.status)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

// fetch all posts of a thread
export async function fetchPostsThread(id: number) {
    try {
        const res = await axios.get(`post/thread-${id}?limit=10&page=0`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function createPost(data: any) {
    try {
        const res = await axios.post(`post/new`, data);
        console.log(res.status);
    } catch (error) {
        console.log(error)
    }
}

export async function updatePost(id: number, data: any) {
    try {
        const res = await axios.patch(`post/update/post-${id}`, data);
        console.log(res.status);
    } catch (error) {
        console.log(error)
    }
}

//// ===== MEMBER ===== ////
export async function fetchMember(id: number) {
    try {
        const res = await axios.get(`member/${id}`);
        // console.log(res.status)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function updateMemberProfile(id: number, data: any) {
    try {
        const res = await axios.put(`/member/update/member-${id}`, data);
        console.log(res.status)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

//// ===== MODERATOR ===== ////
export async function fetchModProfile(id: number, username: string) {
    try {
        const res = await axios.get(`mod/${id}?modUsername=${username}`);
        console.log(res.status, res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function modUpdateProfile(id: number, data: any) {
    try {
        const res = await axios.put(`mod/update/mod-${id}`, data);
        console.log(res.status)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

//// ===== MOD DASHBOARD PAGE ===== ////
export async function resolvePendingThread(modID: number, threadID: number, category: string, newToxicStatus: string, reason: string) {
    try {
        const res = await axios.patch(`mod/mod-${modID}/resolvePendingThread-${threadID}?category=${category}&newToxicStatus=${newToxicStatus}&reason=${reason}`);
        console.log(res.status);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function resolvePendingPost(modID: number, postID: number, threadID: number, newToxicStatus: string, reason: string) {
    try {
        const res = await axios.patch(`mod/mod-${modID}/resolvePendingPost-${postID}?threadId=${threadID}&newToxicStatus=${newToxicStatus}&reason=${reason}`);
        console.log(res.status);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function banMember(modID: number, memberID: number, duration: number, reason: string) {
    try {
        const res = await axios.patch(`mod/dashboard/mod-${modID}/ban/member-${memberID}?duration=${duration}&reason=${reason}`);
        console.log(res.status);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchModDashboard(id: number) {
    try {
        const res = await axios.get(`mod/dashboard/mod-${id}`);
        console.log(res.status, res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function unbanMember(modID: number, memberID: number) {
    try {
        const res = await axios.delete(`mod/dashboard/mod-${modID}/unBan/member-${memberID}`);
        console.log(res.status);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

//// ===== TAG ===== ////
export async function createTag(tag: string) {
    try {
        const res = await axios.post(`tag/create?tagName=${tag}`);
        console.log(res.status);
    } catch (error) {
        console.log(error)
    }
}

export async function updateTag(id: number, newName: string) {
    try {
        const res = await axios.put(`tag/update/${id}?newTagName=${newName}`);
        console.log(res.status)
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTag(id: number) {
    try {
        const res = await axios.delete(`tag/delete/${id}`);
        console.log(res.status)
    } catch (error) {
        console.log(error)
    }
}