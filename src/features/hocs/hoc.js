import React from "react";

const MyFirstHoc = (WrappedComponent) => {
    return(
        class newComponent extends React.Component{
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
                       let str = `${item}`.toUpperCase();
                       return str.indexOf(searchTerm) >= 0;
                   })

                   
                }

                const {searchTerm} = this.state;
                const filteredItems = filterItems(searchTerm, this.props.titles);
                
                console.log(`filteredItems`, filteredItems);
                console.log(`If we change props`, this.props.titles)

                return (
                    <>
                    <label>Search</label>
                    <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="search"/>
                    <WrappedComponent titles={filteredItems} imgs={this.props.imgs}/>
                    {/* <WrappedComponent {...this.props}/> */}
                    </>
                )
            }
        }
    )
}

export default MyFirstHoc;