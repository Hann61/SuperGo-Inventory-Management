const addUser = async (name) => {
    const response = await fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
    });

    const data = await response.json();
    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg)
    }

    return data;
};

const getUsers = async () => {
    const response = await fetch('http://localhost:3005/users', {
        method: 'GET'
    });
    return response.json();
};

const deleteUser = async () => {
    const response = await fetch('http://localhost:3005/users', {
        method: 'DELETE'
    });
    return response.json();
};

export default {
    addUser,
    getUsers,
    deleteUser
};