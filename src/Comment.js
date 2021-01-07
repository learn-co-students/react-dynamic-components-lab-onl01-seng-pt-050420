import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className="comment">
                <p>{this.props.commentText}</p>
            </div>
        )
    }
}

export default Comment
