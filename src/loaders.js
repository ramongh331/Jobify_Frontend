const URL='https://jobify-personal-api.onrender.com';


export const indexLoader = async () => {
    const response = await fetch(URL + "/posts");
    const job = await response.json();
    return job;
}

export const showLoader = async ({params}) => {
    const response = await fetch(URL + "/posts/" + params.id);
    const eachjob = await response.json();
    return eachjob;
}