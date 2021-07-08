import React, { Component } from 'react';
import NoteItem from './NoteItem';

import {noteData} from './Components/firebaseConnect'
class NodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFireBase: []
        }
    }
    componentDidMount(){
        noteData.on('value', (notes) => {
            var arrayData = []
            notes.forEach(element => {
                const key = element.key;
                const noteContent = element.val().noteContent;
                const noteTitle = element.val().noteTitle;
                arrayData.push({
                    id: key,
                    noteTitle: noteTitle,
                    noteContent:noteContent
                })
            });
            this.setState({
                dataFireBase: arrayData
            })
        })
    }

    getData = () => {
        if(this.state.dataFireBase){
            return this.state.dataFireBase.map((value, key)=>{
                return(
                    <NoteItem 
                    key={key}
                    i={key}// để lấy key khi click vào title sẽ chỉ hiện ra nội dung của title được click
                    noteTitle = {value.noteTitle}
                    noteContent = {value.noteContent}
                    note = {value}
                    />
                )
            })
        }
    }
    

    render() {
        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>

        );
    }
}

export default NodeList;