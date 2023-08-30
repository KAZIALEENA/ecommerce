import React, { Component } from 'react';
import FashionCard from './FashionCard';
import { data } from '../data';
import store from '../store';
import { addFashion } from '../actions';
import { updateFashion } from '../actions';
import {deleteFashion} from '../actions';

export default class FashionItem extends Component {
    constructor() {
        super();
        console.log("hii");
        // Set initial state
        this.state = {
            list: data,
            sortAscending: true,
        };
        // Bind methods to the component's instance
        this.handleEditData = this.handleEditData.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.sortList = this.sortList.bind(this);
    }

    // Handle editing an existing fashion item
    handleEditData(updatedDat) {
        const updatedData = this.state.list.map(item => {
          if (item.id === updatedDat.id) {
            return {
              ...item,
              title: updatedDat.title,
              price: {

                displayValue: updatedDat.price,
              },
              author: updatedDat.author,
              summary: updatedDat.summary,
            };
          }
          return item;
        });
      
        // Dispatch the updateFashion action with the updated data
        store.dispatch(updateFashion(updatedData)); // Correct function name
      
        alert("Fashion Item Updated Successfully");
      }

        // Handle deletion of an album
        handleDelete(id) {
            // Dispatch the deleteFashion action with the ID of the item to be deleted
            store.dispatch(deleteFashion(id));
          }
          

          sortList() {
            const { sortAscending } = this.state;
            const sortedList = store.getState().fashion.list.slice().sort((a, b) => {
              const priceA = parseFloat(a.price.displayValue);
              const priceB = parseFloat(b.price.displayValue);
        
              return sortAscending ? priceA - priceB : priceB - priceA;
            });
        
            // Update the sort order and state with the sorted list
            this.setState({
              sortAscending: !sortAscending,
            });
        
            store.dispatch(updateFashion(sortedList));
          }
        
        
      
    componentDidMount() {
        store.subscribe(() =>{
            console.log('UPDATED');
            this.forceUpdate();
            
        })
        store.dispatch(addFashion(data));
        console.log('STATE', store.getState());
    }

   

    render() {

      const { sortAscending } = this.state;
      const sortedSymbol = sortAscending ? '▲' : '▼'
        const {list} = store.getState().fashion; // Access the fashion state
        
        return (
            <div>
               <button className='btn btn-primary sort' onClick={this.sortList}>
          Sort By Price {sortedSymbol}
        </button>
                <div className='list'>
                    {list.map((fashions, index) => (
                        <FashionCard
                            fashions={fashions}
                            
                            key={`fashion-${index}`}
                            id={fashions.id}
                            dispatch={store.dispatch}
                            onhandleEditData={this.handleEditData}
                            onhandleDelete = {this.handleDelete}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
