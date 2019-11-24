import React from 'react';
import { Pagination } from 'react-bootstrap';
import '../css/Pagination.css'
class MyPagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }
    }
    getPages() {
        let items = [];
        for (let number = 1; number <= this.props.totalPages; number++) {
            items.push(
                <Pagination.Item key={number} active={number === this.state.page}  onClick={() => this.changePage(number)}>
                    {number}
                </Pagination.Item>,
            );
        }
        return items
    }
    changePage(page){
        this.setState({page:page})
        if(this.props.param){
            this.props.getMethod(this.props.param,page-1);
        }else{
            this.props.getMethod(page-1);
        }
    }

    render() {
        return (
            <Pagination size="lg" className="justify-content-center" >
                <Pagination.First disabled={this.state.page === 1? true:false} onClick={() => this.changePage(1)}/>
                <Pagination.Prev disabled={this.state.page === 1?  true:false} onClick={() => this.changePage(this.state.page-1)}/>
                {this.getPages()}
                <Pagination.Next disabled={this.state.page === this.props.totalPages?  true:false} onClick={() => this.changePage(this.state.page+1)}/>
                <Pagination.Last disabled={this.state.page === this.props.totalPages?  true:false} onClick={() => this.changePage(this.props.totalPages)}/>
            </Pagination>
        );
    }
}
export default MyPagination;