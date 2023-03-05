const btnEl= document.getElementById('btn');
const jokeEL=document.getElementById('jokes')
const apikey="z6Ta9McK8YxhJwidBIjoXQ==wmI3uL40ggc2BjUA"

const options={
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    }
};
const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1"
async function getjoke(){
    try {
        jokeEL.innerText="Updating..."
        btnEl.disabled=true;
        btnEl.innerText="Loading.."
        const response=await fetch(apiurl,options);
        const data=await response.json();
        jokeEL.innerText=data[0].joke;
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke"
    } catch (error) {
        jokeEL.innerText="An Error Happened,try again later"
        btnEl.disabled=false;
        btnEl.innerText="Tell me a joke"
        console.log(error);
    }
   
}
btnEl.addEventListener('click',getjoke)