const CopyrightLink = ({ link }) => {
    const { content } = link;

    return (
        <span className='hover:text-cyan-500 cursor-pointer'>
            {content}
        </span>
    );
};

export default CopyrightLink;