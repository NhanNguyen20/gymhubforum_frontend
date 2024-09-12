import axios from "./axios";

const options = {
    withCredentials: true
};

// call other functions based on the form type
export async function handleForm(formType: string, data: any) {
    let res = null;
    switch (formType) {
        case "signup":
            res = signup(data);
            break;
        case "login":
            res = login(data);
            break;
        case "create post":
            res = createPost(data);
            break;
        case "create thread":
            res = createThread(data);
            break;
        case "report post":
            // res = reportPost(data);
            break;
    }
    return res;
}

//// ===== AUTH ===== ////
export async function signup(data: any) {
    const res = await axios.post("/auth/register", data);
    console.log(res.status)
}

export async function login(data: any) {
    try {
        const res = await axios.post("/auth/login", data)
        if (res.status == 200) {
            const mem = fetchMember(data.username);
            return mem;
        }
    } catch (error) {
        return 403 || error;
    }
}

export async function logOut() {
    try {
        const res = await axios.post('auth/logout');
        return res.status;
    } catch (error) {
        console.log(error)
    }
}

export async function refreshToken() {
    // auth/refresh-token
}

//// ===== THREAD ===== ////
// fetch all threads of a box (category)
export async function fetchBoxThreads(category: string | any) {
    try {
        const res = await axios.get(`thread/${category.toLowerCase()}`);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function fetchBoxThreadsSuggest(category: string) {
    try {
        const res = await axios.get(`thread/suggested`);
        return res.data[category];
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
        const res = await axios.post(`thread/new`, data, options);
        console.log(res.status, res.data)
    } catch (error) {
        console.error(error)
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

export async function createPost(data: any) {
    try {
        data.threadId = parseInt(data.threadId)
        const res = await axios.post(`post/new`, data, options);
        console.log(res.status, res.data);
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

export async function fetchProfileHeaderInfo(id: number) {
    return axios.get(`/member/${id}/info`).then(res => res.data).catch(err => console.log(err));
}

export async function fetchProfileHeaderStat(id: number) {
    return axios.get(`/member/${id}/stat`).then(res => res.data).catch(err => console.log(err));
}


export async function fetchProfileLatestPost(id: number, page: number, pageSize: number) {
    return axios.get(`/member/${id}/post`, {
        params: {
            page: page,
            pageSize: pageSize
        }
    }).then(res => res.data).catch(err => console.log(err));
}

export async function fetchProfilePreview(id: number) {
    return axios.get(`/update/${id}`).then(res => res.data).catch(err => console.log(err));
}
