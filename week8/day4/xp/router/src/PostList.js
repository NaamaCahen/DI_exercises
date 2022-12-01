import React from "react";
import file from './file.json'
class PostList extends React.Component {
    constructor() {
        super();
        this.state = {
            json: file
        }
    }
    render() {
        return (
            <>
                <h1>Hi This is a Title</h1>
                {this.state.json.map(item => {
                    return (
                        <div>
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    )
                })}

            </>
        )
    }
}
export default PostList;