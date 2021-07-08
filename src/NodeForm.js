import React, { Component } from 'react';
import {connect} from 'react-redux'
class NodeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent: '',
            id: ''
        }
    }

    componentDidMount(){
        console.log(this.props.editItem)
        if(this.props.editItem){
            this.setState({
                noteTitle:this.props.editItem.noteTitle,
                noteContent: this.props.editItem.noteContent,
                id: this.props.editItem.id
            })
        }
    }
    
    isChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState ({
            [name]: value
        })
    }

    addData = (title, content) => {
        if(this.state.id){
            var editObject = {};
            editObject.id = this.state.id;
            editObject.noteContent = this.state.noteContent;
            editObject.noteTitle = this.state.noteTitle;
            this.props.editDataStore(editObject);
            this.props.changeEditStatus(); // tắt form khi lưu

        }else{
            var item = {};
            item.noteTitle = title;
            item.noteContent = content;
            // this.props.getData(item)
            //item = JSON.stringify(item)
            this.props.addDataStore(item);
        }
        
    }
    printTitle = () => {
        console.log(this.props.addStatus)
        if(this.props.addStatus){
            return <h4>Thêm mới</h4>
        }else{
            return <h4>Sửa ghi chú</h4>
        }
    }

    render() {
        return (
            <div className="col-4">
                {this.printTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTite">Tiêu đề note</label>
                        <input defaultValue={this.props.editItem.noteTitle} onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTite" aria-describedby="helpIdNoteTitle" placeholder="Nhập tiêu đề" />
                        {/* <small id="helpIdNoteTitle" class="form-text text-muted">Help text</small> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung note</label>
                        <textarea  onChange={(event)=>this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteTite" aria-describedby="helpIdNoteTitle" placeholder="Nội dụng note" defaultValue={this.props.editItem.noteContent} />
                        {/* <small id="helpIdNoteTitle" class="form-text text-muted">Help text</small> */}
                    </div>
                    <button onClick={()=>this.addData(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-primary btn-block">Lưu</button>
                </form>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        addDataStore: (getItem) =>{
            dispatch({type:'ADD_DATA', getItem})
        },
        editDataStore: (getItem) =>{
            dispatch({type:'EDIT', getItem})
        },
        changeEditStatus: () =>{
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NodeForm)