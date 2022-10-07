export const getAllData = async function (lang:'pt'|'en') {
    try {
        const resObj = await fetch(import.meta.env.VITE_LOCALHOST + `/api/v1/projects`);

        const data = await resObj.json();

        return data.filter((element:any) => element.lang === lang);
    } 
    catch (err) {
        console.log(err);
        return []
    }
}

