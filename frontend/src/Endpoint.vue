<script lang="ts">

async function getAllData (lang:'pt'|'en'):Promise<object>{

    try {
        const resObj = await fetch(import.meta.env.VITE_LOCALHOST + `/api/v1/projects`);

        const data = await resObj.json();
console.log(data)
        return data.filter((element:any) => element.lang === lang);
    } 
    catch (err) {
        console.log(err);
    }}
export default {getAllData};
</script>
