import * as axios from 'axios';


// const _apiBase = 'http://192.168.20.168:5001/api/';
// // const getData = ({ data }) => data;
//
export const service =
    {
    async getResource(url){
        const res = await fetch(`${_apiBase}${url}`);
        if(!res.ok){
            throw new Error(`${url}`)
        }
        return await res.json();
    }

    // getAllPerson(){
    //     return this.getResource(`/people/`)
    // }
    // getPerson(id){
    //     return this.getResource(`/person/${id}/`)
    // }
};


// const getResource = async (url)=>{
//     const res = await fetch(url);
//     if(!res.ok){
//         throw new Error(`${url}`)
//     };
//     const body = await res.json();
//     return body
// };

// getResource('https://swapi.co/api/people/1/')
//     .then(body=>{
//         console.log(body)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
//
//
// fetch('https://swapi.co/api/people/1/')
//     .then((res) => res.json())
//     .then((body) => console.log(body))
//     .catch((err) => {
//         console.error("Could not fetch", err)
//});