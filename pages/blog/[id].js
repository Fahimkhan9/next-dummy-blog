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
    fallback:false
}

}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();
  
    return {
      props: { singleblog: data }
    }
  }
function Datils({singleblog}) {
console.log(singleblog)
    return (
        <div>
            <Navigation />
          <div className='flex justify-center align-center w-auto' >
          <div className="p-8 bg-white border rounded shadow-sm">
                        
                        <p
                              
                              title={singleblog.name}
                              className="inline-block cursor-pointer mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              {singleblog.name}
                            </p>
                       
                            <p className="mb-5 text-gray-700">
                              {singleblog.email}
                            </p>
                            <div className="flex items-center">
                              <a href="/" aria-label="Author" title="Author" className="mr-3">
                                <img
                                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                  alt="avatar"
                                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                                />
                              </a>
                              <div>
                                <a
                                  href="/"
                                  aria-label="Author"
                                  title="Author"
                                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                  Vasile Melinte
                                </a>
                                <p className="text-sm font-medium leading-4 text-gray-600">
                                  Author
                                </p>
                              </div>
                            </div>
                          </div>
               
          </div>
             
        </div>
    )
}

export default Datils
