import React from "react";

const WithSearchHoc = (WrappedComponent) => {
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
               
               const filterDates = (dates, filter) => {
                   let properDates = [];
                   for(let i = 0; i < dates.length; i++){
    
                    for(let j = 0; j < filter.length; j++){
                      if(dates[i].id === filter[j].id){
                        properDates.push(dates[i]);
                        }
                     }
                   }
                   return properDates;
               } 

                const {searchTerm} = this.state;
                const filteredItems = filterItems(searchTerm, this.props.text);
                const filteredDates = filterDates(this.props.int, filteredItems);
                
                console.log(`filteredItems`, filteredItems);
                console.log(`If we change props`, this.props.text)

                return (
                    <>
                    <div className="search-bar">
                        <label className="label">Search</label>
                        <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="search"/>
                    </div>
                    
                    <WrappedComponent text={filteredItems} int={filteredDates}/>
                    
                    </>
                )
            }
        }
    )
}

export default WithSearchHoc;