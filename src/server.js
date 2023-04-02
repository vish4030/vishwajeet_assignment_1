const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchData = async () =>
{
    try{
    const data = await fetch(url, {method:'GET'});
    return  data.json();
    }
    catch(e)
    {
        console.log(e,"something went wrong");
        return e;
    }
}

