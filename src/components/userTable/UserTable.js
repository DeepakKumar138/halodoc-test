import React from 'react';
import { connect } from 'react-redux'

// const data = [
//     {title: "Halodoc", url: "https://blogs.halodoc.io/in-app-update-on-android-at-halodoc/", author: "shashankel", submitted: 2}
// ]

function UserTable(props) {
    return (
        <div className="container-fluid">
            {props.search && props.search.loading ? <div>Loading ...</div>
                : (props.search.error === undefined) ? <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author (Submission Count)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.search && props.search.data && props.search.data.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><a href={item.url} target="_blank">{item.title}</a></td>
                                    <td>{item.author}({item.submitted})</td>
                                </tr>
                            )
                        })}
                    </tbody>
            </table> : <h2>{props.search.error && props.search.error.message}</h2>}
        </div>
    );
}

const mapStateToProps = state => ({
    search: state.search,
})

export default connect(mapStateToProps)(UserTable)
