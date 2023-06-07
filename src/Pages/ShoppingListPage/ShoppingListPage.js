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
    const [newItem, setNewItem] = useState('')

    const shoppingListSection = list && list.length > 0 ? (
        <ul>
            {list.map((item, index) => <ShoppingItem key={index} data={item} />)}
        </ul>  
    ) : (
        <h3>Your shopping list is empty.</h3>
    )

    const newItemHandler = (event) => {
        event.preventDefault();
        setNewItem('');
    }

    const itemInputHandler = (event) => setNewItem(event.target.value);


  return (
    <Container>
        <form onSubmit={newItemHandler}>
            <label htmlFor='shopping-item'>New Item: </label>
            <input type='text' id='shopping-item' name='shopping-item' value={newItem} onChange={itemInputHandler} />
            <input type='submit' value='Create' />
        </form>
        {shoppingListSection}
    </Container>
  )
}

export default ShoppingListPage