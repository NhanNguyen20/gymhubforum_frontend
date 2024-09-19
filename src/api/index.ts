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
            res = reportPost(data);
            break;
        case "update post":
            res = updatePost(data);
            break;
        case "update thread":
            res = updateThread(data);
            break;
        case "report thread":
            res = reportThread(data);
            break;
    }
    return res;
}

//// ===== AUTH ===== ////
export async function signup(data: any) {
    try {
        const res = await axios.post("/auth/register", data);
        return res.status;
    } catch (error) {
        console.log(error)
    }
}

export async function login(data: any) {
    try {
        const res = await axios.post("/auth/login", data)
        if (res.status == 200) {
            const mem = fetchMemberByUsername(data.username);
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
        const res = await axios.post(`thread/new`, data, options);
        console.log(res.status, res.data)
        return res.status;
    } catch (error) {
        console.error(error)
    }
}

export async function updateThread(data: any) {
    try {
        const res = await axios.put(`thread/update/${data.threadId}`, data, options);
        return res.status;
    } catch (error) {
        console.error(error)
    }
}

export async function reportThread(data: any) {
    try {
        const res = await axios.put(`thread/report/${data.threadId}/${data.category.toUpperCase()}?reason=${data.reason}`, data, options);
        return res.status;
    } catch (error) {
        console.error(error)
    }
}

export async function fetchThreadByID(id: number) {
    try {
        const res = await axios.get(`thread/${id}`);
        // console.log("by thread id ", res.data)
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
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function createPost(data: any) {
    try {
        const res = await axios.post("post/new", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            ...options,
        });
        console.log(res.data)
        return res;
    } catch (error) {
        console.log(error);
    }
}

export async function updatePost(data: any) {
    try {
        console.log(data);
        const res = await axios.put(`post/update`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            ...options,
        });
        console.log(res.status);
        return res.status;
    } catch (error) {
        console.log(error)
    }
}

export async function reportPost(data: any) {
    console.log(data.threadId)
    data.threadId = parseInt(data.threadId)
    data.ownerId = parseInt(data.ownerId)
    try {
        console.log(data.threadId);
        const res = await axios.put(`/post/report/post-${data.postId}/${data.threadId}?reason=${data.reason}`, data, options);
        console.log("log report ======= ", res.status, res.data);
        return res.status;
    } catch (error) {
        console.log(error)
    }
}

export async function likePost(postId: number) {
    try {
        const res = await axios.put(`post/like/post-${postId}`, options);
        console.log("liked", res.status)
        return res.status;
    } catch (error) {
        console.log(error)
    }
}

export async function unlikePost(postId: number) {
    try {
        const res = await axios.put(`post/unlike/post-${postId}`, options);
        console.log("unliked", res.status)
        return res.status;
    } catch (error) {
        console.log(error)
    }
}

//// ===== MEMBER ===== ////
export async function fetchMemberByUsername(username: string) {
    try {
        const res = await axios.get(`member/username/${username}`);
        // console.log(res.status)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

export async function fetchMember(id: number) {
    try {
        const res = await axios.get(`member/${id}`);
        console.log("res.data:", res.data)
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export async function fetchMemberPosts(id: number) {
    try {
        const response = await axios.get(`/member/${id}/post`);
        console.log('response.data', response.data)
        return response.data; // Return the posts data
    } catch (error) {
        console.error("Error fetching member posts:", error);
        throw error;
    }
}

export async function updateMemberProfile(id: number, data: any) {
    try {
        const res = await axios.put(`/member/update/member-${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data", // To handle file uploads
            },
        });
        console.log(res.status);
        return res.data;
    } catch (error) {
        console.error("Error updating profile:", error);
        throw error;
    }
}

export async function getMemberPreview(id: number) {
    try {
        const res = await axios.post(`/member/preview/member-${id}`, { id: id });
        console.log(res.status);
        return res.data;
    } catch (error) {
        console.error("Error previewing profile:", error);
        throw error;
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

export async function getAllTags() {
    try {
        const res = await axios.get(`tag/allTags`);
        console.log(res.data)
        return res.data;
    } catch (error) {
        console.log(error)
    }
}

//// ===== MOD DASHBOARD PAGE ===== ////
// Resolve Pending Thread
export async function resolvePendingThread(modID: number, threadID: number, category: string, newToxicStatus: string, reason: string) {
    try {
        const res = await axios.put(`/mod/mod-${modID}/resolvePendingThread-${threadID}`, null, {
            params: {
                category: category,
                newToxicStatus: newToxicStatus,
                reason: reason
            }
        });
        console.log('Thread Resolution Status:', res.status);
        return res;
    } catch (error) {
        console.log("Error resolving pending thread:", error);
        throw error;
    }
}

// Resolve Pending Post
export async function resolvePendingPost(modID: number, postID: number, threadID: number, newToxicStatus: string, reason: string) {
    try {
        const res = await axios.put(`/mod/mod-${modID}/resolvePendingPost-${postID}`, null, {
            params: {
                threadId: threadID,
                newToxicStatus: newToxicStatus,
                reason: reason
            }
        });
        console.log('Post Resolution Status:', res.status);
        return res;
    } catch (error) {
        console.log("Error resolving pending post:", error);
        throw error;
    }
}

// Ban Member Function
export async function banMember(modID: number, memberID: number, duration: number, reason: string) {
    try {
        const response = await axios.put(`/mod/dashboard/mod-${modID}/ban/member-${memberID}`, null, {
            params: {
                duration: duration,
                reason: reason,
            },
        });

        console.log(response.status);
        return response.data;
    } catch (error) {
        console.log("Error banning member:", error);
        throw error;
    }
}

// Fetch Mod Dashboard
export async function fetchModDashboard(id: number) {
    try {
        const res = await axios.get(`mod/dashboard/mod-${id}`);
        console.log(res.status, res.data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

// Unban Member
export async function unbanMember(modID: number, memberID: number) {
    try {
        const res = await axios.delete(`mod/dashboard/mod-${modID}/unBan/member-${memberID}`);
        console.log(res.status);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}
