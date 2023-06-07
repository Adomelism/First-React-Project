import './ShoppingList.css';
import Container from '../../Components/Container/Container';
import { useState } from 'react';
import ShoppingItem from '../../Components/ShoppingListComponents/ShoppingItem';

const ShoppingListPage = () => {

    const itemsListData = [
        {
         title: 'apple',
         done: false,
        },
        {
         title: 'pear',
         done: true,
        },
        {
         title: 'banana',
         done: true,
        },
        {
         title: 'grapes',
         done: false,
        },
        {
         title: 'melon',
         done: true,
        },
     ];

     const [list, setList] = useState(itemsListData)
    //  console.log(setList)


  return (
    <Container>
        {list && list.length > 0 ? (
            <ul>
                {list.map((item, index) => <li className={item.done ? 'done' : ''} 
                key={index}>{item.title}</li>)}
            </ul>  
        ) : (
            <h3>Your shopping list is empty.</h3>
        )}
    
    </Container>
  )
}

export default ShoppingListPage