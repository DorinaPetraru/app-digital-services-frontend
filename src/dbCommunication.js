//Éstas funciones llevan a cabo la comunicación con la base de datos
export const getAllServices = async () => {
    const response = await fetch(
        'https://app-digital-service.herokuapp.com/services'
    );

    const { data } = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

export const getOneService = async (id) => {
    const response = await fetch(
        `https://app-digital-service.herokuapp.com/services/${id}`
    );

    const { data } = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

export const registerUser = async ({
    name,
    email,
    biography,
    photo,
    password,
}) => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('email', email);
    formData.append('biography', biography);
    formData.append('photo', photo);
    formData.append('password', password);

    const response = await fetch(
        'https://app-digital-service.herokuapp.com/users',
        {
            method: 'POST',
            mode: 'cors',
            body: formData,
        }
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
};

export const loginUser = async ({ email, password }) => {
    const response = await fetch(
        'https://app-digital-service.herokuapp.com/login',
        {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        }
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const getOwnUser = async (token) => {
    const response = await fetch(
        `https://app-digital-service.herokuapp.com/users`,
        {
            headers: {
                Authorization: token,
            },
        }
    );

    const { data } = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

export const getUser = async (id) => {
    const response = await fetch(
        `https://app-digital-service.herokuapp.com/users/${id}`
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const createNewService = async ({ title, description, file, token }) => {
    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    const response = await fetch(
        'https://app-digital-service.herokuapp.com/services',
        {
            method: 'POST',
            mode: 'cors',
            body: formData,
            headers: {
                Authorization: token,
            },
        }
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
};

export const getAllComments = async (idService, token) => {
    const response = await fetch(
        `https://app-digital-service.herokuapp.com/services/${idService}/comments`,
        {
            headers: {
                Authorization: token,
            },
        }
    );

    const { data } = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
};

export const createCommentsAndFileCompleted = async ({
    text,
    fileCompleted,
    token,
    idService,
}) => {
    const formData = new FormData();

    formData.append('text', text);
    formData.append('fileCompleted', fileCompleted);

    const response = await fetch(
        `https://app-digital-service.herokuapp.com/services/${idService}/filecompleted`,
        {
            method: 'POST',
            mode: 'cors',
            body: formData,
            headers: {
                Authorization: token,
            },
        }
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }
    return json.data.comment;
};

export const updateServiceStatus = async (idService, token) => {
    const response = await fetch(
        `https://app-digital-service.herokuapp.com/services/${idService}/resolved`,
        {
            method: 'PUT',
            mode: 'cors',
            headers: {
                Authorization: token,
            },
        }
    );

    const json = await response.json();

    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};
