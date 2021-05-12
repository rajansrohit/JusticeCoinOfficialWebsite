import React, { useState, useEffect } from "react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
import getOptions from "./getOptions";

import firebaseDB from "./firebaseDB";

function CreateBlogPost(props) {
    const [sunEditorOptions, setSunEditorOptions] = useState(getOptions());
    const [blogPost, setBlogPost] = useState({ author: "", title: "", description: "", content: "", thumbnailURL: ""});

    function sendPostToFirebase(event) {
        firebaseDB.collection("blogPosts").add({
            author: blogPost.author,
            title: blogPost.title,
            description: blogPost.description,
            content: blogPost.content,
            thumbnailURL: blogPost.thumbnailURL,
            datePublished: Date.now(),
            dateLastEdited: Date.now()
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                alert("Successfully posted!");
                setBlogPost({ author: "", title: "", description: "", content: "" });
            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
                alert("ERROR: " + error);
            });
    };

    return (<>
            <div className="" style={{ height: "90vh" }}>
                <div className="px-5 py-3">
                    <h1 className="text-center">Create A Blog Post</h1>
                    <div>
                        <form>
                            <div className="row my-3">
                                <div className="col-6">
                                    <input type="text"
                                        className="form-control"
                                        id="authorInput"
                                        placeholder="Author Name"
                                        value={blogPost.author}
                                        onChange={event => {
                                            let newInput = event.target.value;
                                            setBlogPost(prev => {
                                                return { ...prev, author: newInput };
                                            })
                                        }} />
                                </div>
                                <div className="col-6">
                                    <input type="text"
                                        className="form-control"
                                        id="titleInput"
                                        placeholder="Post Title"
                                        value={blogPost.title}
                                        onChange={event => {
                                            let newInput = event.target.value;
                                            setBlogPost(prev => {
                                                return { ...prev, title: newInput };
                                            })
                                        }} />
                                </div>
                            </div>
                            <input type="text"
                                        className="form-control"
                                        id="thumbnailInpug"
                                        placeholder="Thumbnail Image URL"
                                        value={blogPost.thumbnailURL}
                                        onChange={event => {
                                            let newInput = event.target.value;
                                            setBlogPost(prev => {
                                                return { ...prev, thumbnailURL: newInput };
                                            })
                                        }} />
                            <div className="row my-3">
                                <div className="col-12">
                                    <textarea type="text"
                                        rows="3"
                                        className="form-control"
                                        id="descriptionInput"
                                        placeholder="Post Description"
                                        value={blogPost.description}
                                        onChange={event => {
                                            let newInput = event.target.value;
                                            setBlogPost(prev => {
                                                return { ...prev, description: newInput };
                                            })
                                        }} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <SunEditor
                        setOptions={sunEditorOptions}
                        style={{ overflowY: "auto" }}
                        onChange={content => {
                            setBlogPost(prev => {
                                return { ...prev, content: content };
                            });
                        }} />
                </div>
                <div className="text-center mb-5">
                    <button
                        className="btn btn-outline-secondary font-weight-bold"
                        onClick={event => sendPostToFirebase(event)}>Post To Blog</button>
                </div>
            </div>
    </>);
}

export default CreateBlogPost;