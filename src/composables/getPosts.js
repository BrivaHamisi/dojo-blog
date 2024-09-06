import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([
      
    ])
    const error = ref(null)

    const load = async () => {
      try{
        let data = await fetch('http://localhost:3000/posts')
        //  .then(response => response.json())
        console.log(data)
        if (!data.ok){
          throw Error(`No data Available: ${data.status}, ${data.statusText} `)
        }

        posts.value = await data.json()
      }catch(e){
        error.value = e.message

        console.log(error.value)
      }
    }

    return { posts, error, load }
}


export default getPosts
