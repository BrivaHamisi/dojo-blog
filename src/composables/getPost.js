import { ref } from 'vue'


const getPost = (id) =>{
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts/' + id)
        //  .then(response => response.json())
        console.log(data)
        if (!data.ok){
          throw Error(`That Post deoes no Exist: ${data.status}, ${data.statusText} `)
        }
        post.value = await data.json()
      }catch(e){
        error.value = e.message

        console.log(error.value)
      }
    }

    return { post, error, load }
}

export default getPost