import React from 'react'
import { Menu } from 'semantic-ui-react'

const Book = (props) => {
    return (
        <div>
            <Menu.Item as={"a"} onClick={() =>  props.captureBook(props.book.id)}> {props.book.title}</Menu.Item>
        </div>
    )
}

export default  Book
//<Menu.Item as={"a"} onClick={e => console.log("book clicked!")}></Menu.Item>