
import { BsBookmarkStarFill } from 'react-icons/bs';


const Blog = ({blog, handleAddBookmark, handleMarksAsRead}) => {
    const {id, title, cover, author,author_img,posted_date,hashtags, reading_time} = blog;
    return (
        <div className='mb-20'>
            <img className='rounded-xl w-full' src={cover} alt={`cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center'>
                    <img className='w-10 h-10 rounded-full' src={author_img} alt="" />
                    <div className='m-2'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark(blog)} className='ml-2'><BsBookmarkStarFill></BsBookmarkStarFill></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button className='text-purple-600 font-bold underline' 
            onClick={()=>handleMarksAsRead(reading_time, title)}>Mark as read</button>
        </div>
    );
};



export default Blog;