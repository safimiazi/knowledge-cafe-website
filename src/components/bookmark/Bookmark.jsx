

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="p-4 bg-white m-2 rounded">
            <h2 className="text-xl">{title}</h2>
        </div>
    );
};

export default Bookmark;