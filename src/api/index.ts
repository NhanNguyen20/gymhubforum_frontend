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

export async function refreshToken() {
    // auth/refresh-token
}

//// ===== THREAD ===== ////
// fetch all threads of a box (category)
export async function fetchBoxThreads(category: string | undefined, limit?: number, page?: number) {
    try {
        let res;
        if (limit) res = await axios.get(`thread/${category}?limit=${limit}&page=${page}`);
        else res = await axios.get(`thread/${category}`);
        if (category === 'suggested') return res.data['By Algorithm'];
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

// fetch threads by tag
export async function fetchThreadsByTag(tag: string, limit: number = 10, page: number = 0) {
    try {
        const response = await axios.get(`/thread/${tag}?limit=${limit}&page=${page}`);
        return response.data; // Return the fetched data
    } catch (error) {
        console.error("Error fetching threads by tag:", error);
        throw error; // Re-throw the error to handle it in the calling function
    }
}

// fetch all threads of a member
export async function fetchThreadsUser(id: number, limit: number, page: number) {
    try {
        const res = await axios.get(`thread/user-${id}?limit=${limit}&page=${page}`);
        console.log(`thread/user-${id}?limit=${limit}&page=${page}`, res.status, res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function createThread(data: any) {
    try {
        const res = await axios.post(``);
    } catch (error) {
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
export async function fetchPostsThread(id: number, limit?: number, page?: number) {
    try {
        const res = await axios.get(`post/thread-${id}?limit=${limit}&page=${page}`);
        // console.log(`post/thread-${threadID}?limit=${limit}&page=${page}`, res.status, res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function createPost(threadID: number, data: any) {
    try {
        const res = await axios.post(`post/new/thread-${threadID}`, data);
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

export async function fetchModDashboard(id: number) {
    try {
        const res = await axios.get(`mod/dashboard/mod-${id}`);
        console.log(res.status, res.data.pendingPosts, res)
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

export async function banMember(modID: number, memberID: number, duration: number, reason: string) {
    try {
        const res = await axios.patch(`mod/dashboard/mod-${modID}/ban/member-${memberID}?duration=${duration}&reason=${reason}`);
        console.log(res.status)
    } catch (error) {
        console.log(error)
    }
}