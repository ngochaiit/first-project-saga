import axios from 'axios'




const url = 'http://localhost:3000/blogposts/showallpost'


 const fetchUsers = async () =>
{
        try
        {
           let response = await axios('http://localhost:3000/blogposts/showallpost', {
               method: 'GET',  
               headers: {
                'Content-Type': 'application/json'
            }
           })

           console.log(response,'banh kep kem')
           return response;
        }
        catch(error)
        {
            console.log(error,'failed la cai chac roi')
        }
}

function* getApi() {
      try{
        console.log('start api 123')
        const response = yield axios(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response,'api done')
        return response;
      }
      catch(error)
      {
        console.log(error,'call api')
      }
   }


   

export const Api = 
{
    getApi,
    fetchUsers
}