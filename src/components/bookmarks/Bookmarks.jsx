

import Bookmark from '../bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
   
    console.log(bookmarks)
    return (
        <div className="md:w-1/3 p-5 bg-slate-200 m-3 rounded">
            <div className='p-3 bg-cyan-200 rounded'>
                <h2>Spent time on read : {readingTime} min</h2>
            </div>
            <h2 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                key={idx} 
                bookmark={bookmark}
            ></Bookmark>)
            }
          
        </div>
    );
};


export default Bookmarks;