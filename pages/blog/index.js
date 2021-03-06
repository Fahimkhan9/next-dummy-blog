
import Link from 'next/link'
import { Navigation } from '../../comp/Navigation'

export const getStaticProps = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await res.json()

return{
    props: {
        blogs: data
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
                        <Link
                        href={'/blog/'+blog.id}
                        >
                        <p
                              
                              title={blog.name}
                              className="inline-block cursor-pointer mb-3 text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                              {blog.name}
                            </p>
                        </Link>
                           
                            <p className="mb-5 text-gray-700">
                              {blog.email}
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
                  
                        ))
                    }
               
                </div>
   
          </div>
</div>
    )
}

export default Blogs