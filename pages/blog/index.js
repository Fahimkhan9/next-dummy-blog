
import Link from 'next/link'
import { Navigation } from '../../comp/Navigation'

export const getStaticProps = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/photos')
const data = await res.json()

return{
    props: {
        blogs: data.slice(0,20)
    }
}
}

const Blogs = ({blogs}) => {
    console.log(blogs);
    return (
        <div>
            <Navigation />
  
          <div className='m-2'>
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full" >
                    {
                        blogs.map(blog => (
                            <div className="p-8 bg-white border rounded shadow-sm">
                       
                      <img
                                  src={blog.url}
                                  alt={blog.title}
                                  className="object-cover w-100 h-100 rounded-full shadow-sm"
                                />
                                 <Link
                        href={'/blog/'+blog.id}
                        >
                                <a>{blog.title}</a>
                        </Link>
                           
                          
                          </div>
                  
                        ))
                    }
               
                </div>
   
          </div>
</div>
    )
}

export default Blogs