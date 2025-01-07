import React, { useState } from "react";

export function CreateTodo(props) {
    //react query

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // this is the state of the todos
    // wrong
    return <div>
            <input id="title" style={{
                    padding: "10px",
                    margin: "10px",
                }} type="text" placeholder="title"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            ></input>
            <br />

            <input
                id="description"
                style={{
                    padding: "10px",
                    margin: "10px",
                }}
                type="text"
                placeholder="description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            ></input>
            <br />

            <button
                style={{
                    padding: "10px",
                    margin: "10px",
                }}
                onClick={() => {
                    fetch("http://localhost:3000/todo",
                        {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description
                            }),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }).then(async (res) => {
                            const json = await res.json();
                            alert("todo added");
                        });
                }}
            >
                ADD A TODO
            </button>
        </div>
}
