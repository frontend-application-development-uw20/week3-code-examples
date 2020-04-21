import React from 'react';
import PropTypes from 'prop-types';

class Article extends React.Component {
    // static propTypes = {
    //     articleObj: PropTypes.object
    // };
    static propTypes = {
        articleObj: PropTypes.shape({
            title: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            author: PropTypes.shape({
                firstName: PropTypes.string
            })
        })
    }

    render() {
        return <div>Article</div>;
    }
}

// <Article articleObj={article} />

// {}
// {
    // title: ''
// }