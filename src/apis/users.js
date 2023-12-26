import axios from "axios";
// promise, callback function, async / await
export const getAllUserAPI = async () => {
    const res = await axios({
        method: "GET",
        url: "https://643faaef3dee5b763e22055a.mockapi.io/users",
    });
    return res.data;
};

export const createUserApi = async (user) => {
    const res = await axios({
        method: "POST",
        url: "https://643faaef3dee5b763e22055a.mockapi.io/users",
        data: user,
    });
    return res.data;
};
export const removeUserApi = async (id) => {
    const res = await axios({
        method: "DELETE",
        url: `https://643faaef3dee5b763e22055a.mockapi.io/users/${id}`,
    });
    return res;
};
export const updateUserApi = async (user) => {
    const res = await axios({
        method: "PUT",
        url: `https://643faaef3dee5b763e22055a.mockapi.io/users/${user.id}`,
        data: user,
    });
    return res.data;
}