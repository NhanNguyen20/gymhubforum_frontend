import axios from "./axios";

export async function fetchUser(userID: string) {
    return axios.get(`user/${userID}`).then(res => res.data).catch(err => console.log(err));
}

export async function signup(data: any) {
    const { userName, password, email } = data;
    return axios.post("/auth/register", data).then(res => res.data).catch(err => console.log(err));
}

// call other functions based on the form type
export async function handleForm(formType: string, data: any) {
    switch (formType) {
        case "signup":
            signup(data);
        case "login":
    }
}