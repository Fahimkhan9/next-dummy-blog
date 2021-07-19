import { useRouter } from 'next/router'
import { Navigation } from '../../comp/Navigation'
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json()
const paths = data.map(blog => {
    return{
        params: {id:blog.id.toString()}
    }
})
return{
    paths,
    fallback:true
}

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
    const data = await res.json();

    if(!data.id){
      return{
        notFound: true
      }
    }
  
    return {
      props: { singleblog: data }
    }
  }
function Details({singleblog}) {
console.log(singleblog)
const router=useRouter()
if(router.isFallback){
  return(
    <div className="bg-gray-500">
      <h1
      className='font-semibold'
      >Loading....</h1>
    </div>
  )
}
    return (
        <div>
            <Navigation />
          <div className='flex justify-center align-center w-auto' >
        
                           
                            
                                <img
                                  src={singleblog.url}
                                  alt={singleblog.title}
                                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                                />
                          
                     
               
          </div>
             
        </div>
    )
}

export default Details
