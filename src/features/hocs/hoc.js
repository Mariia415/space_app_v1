import React from "react";

const MyFirstHoc = (WrappedComponent) => {
    return(
        class withSearch extends React.Component{
            state ={
                searchTerm: ""
            }

            handleSearch = e => {
                this.setState({searchTerm: e.target.value})
            }
           
            render(){

              const filterItems = (searchTerm, items) => {
                   searchTerm = searchTerm.toUpperCase();
                   return items.filter(item => {
                       let str = `${item.info}`.toUpperCase();
                       return str.indexOf(searchTerm) >= 0;
                   })
                }

                const {searchTerm} = this.state;
                const filteredItems = filterItems(searchTerm, this.props.text);
                
                console.log(`filteredItems`, filteredItems);
                console.log(`If we change props`, this.props.text)

                return (
                    <>
                    <div className="search-bar">
                        <label className="label">Search</label>
                        <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="search"/>
                    </div>
                    
                    <WrappedComponent text={filteredItems} int={this.props.int}/>
                    {/* <WrappedComponent {...this.props}/> */}
                    </>
                )
            }
        }
    )
}

export default MyFirstHoc;