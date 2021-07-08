import React, { Component } from 'react';
import {connect} from 'react-redux';
class NoteItem extends Component {
    twoActionButton =  () => {
        // hàm lấy trang thái true false để hiển thị form
        this.props.changeEditStatus()
        //hàm lấy nội dung truyền trong store, để store up load dữ liệu
        this.props.getEditData(this.props.note);
    }
    deleteData = () => {
        this.props.getDeleteData(this.props.note.id)
    }
    


    render() {
        return (
            <div className="card mt-2">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number"+ this.props.i} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.noteTitle}
                        </a>
                        <div className = "btn-group float-right">
                            <button onClick ={()=>this.twoActionButton()} className="btn btn-outline-info">Sửa</button>
                            <button className="btn btn-outline-secondary" onClick = {()=>this.deleteData()}>Xóa</button>
                        
                        </div>
                    </h5>
                </div>
                <div id={"number"+ this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return{
        isEdit: state.isEdit
    }
  }
const mapDispatchToProps = (dispatch, ownProps) => {
return{
    changeEditStatus: () =>{
        dispatch({type:"CHANGE_EDIT_STATUS"})
    },
    getEditData: (editObject) =>{
        dispatch({type:"GET_EDIT_STATUS", editObject})
    },
    getDeleteData: (id) =>{
        dispatch({type:"DELETE_DATA", id})
    }
}
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
