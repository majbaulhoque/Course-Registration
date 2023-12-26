import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {name} = bookmark;
    return (
        <div className='w-1/3'>
            <div>
                <h3 className='ml-12 text-[12px]'>{name}</h3>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.obj
}


export default Bookmark;