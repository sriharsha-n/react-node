
export async function getAllUsersAPI() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUserAPI(data) {
    const response = await fetch(`/api/user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}

export async function deleteUserAPI(user_id){
    console.log(user_id);
    const response = await fetch(`/api/user/delete`, {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id:user_id})
    })
    return await response.json();
}