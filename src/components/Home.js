import '../App.css';
import SearchBar from './SearchBar';
import TransactionTable from './TransactionTable';
import AddTransactionForm from './AddTransactionForm';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from 'react';
import EditTransaction from './EditTransaction';
import { Route, Routes } from 'react-router-dom';


function Home() {
  // state to hold transactions 
  const [transactions, setTransactions] = useState([]);
  //using a copy of the search value
  const [term,setTerm] = useState('');
  const [sortType, setSortType] = useState(null);
  const [editedTransaction, setEditedTransaction] = useState({})
  const [displayEditForm, setDisplayEditForm] = useState(false)


  // as the component mounts , this will run initially 
  useEffect(() => 
  {
      fetchTransaction();
  }, []);   


  const fetchTransaction = async () => {
        try {
           const response = await fetch("http://localhost:4000/transactions");
           const data = await response.json()
           setTransactions(data);
          //  console.log(data)
          //  console.log(transactions)
        } catch(error) {
            console.log("Error fetching transaction " , error);
        }
  }

  const handleSearch = async (searchValue) => {
    // console.log("from app.js " , searchValue)
    setTerm(searchValue)
    console.log(term)
    // from using the search value to filter my shared transactions
  }


  const filteredTransactions = transactions.filter((transaction) => 
       transaction.description.toLowerCase().includes(term.toLowerCase())
  );

  const addTransaction = async (newTransaction) => {
      try {
          const response = await fetch("http://localhost:4000/transactions", {
             method: 'POST',
             headers: {
              'Content-Type' : 'application/json'
             },
             body: JSON.stringify(newTransaction)
          });
          if(response.ok){
                //re render 
                fetchTransaction(); 
          }else {
               console.log('Error adding transaction ' , response.statusText)
          }
      }catch(error) {
        console.error("error adding transaction " , error)
      }
  }

  const handleDelete = async (id) => {
    try {
        const response = await fetch(`http://localhost:4000/transactions/${id}`, {
           method: 'DELETE'
                  });
        if(response.ok){
            setTransactions(transactions.filter((transaction) => transaction.id != id ))  
            fetchTransaction()             
        }else {
             console.log('Error deleting transaction ' , response.statusText)
        }
    }catch(error) {
      console.error("error deleting transaction " , error)
    }
}

  const handleEdit = async (id) => {
    const response = await fetch(`http://localhost:4000/transactions/${id}`)
    const transaction = await response.json()
    setEditedTransaction(transaction)
  }

  const updateTransaction = async (transObj) => {
    const myTransactions = transactions.map(trans => {
      if(trans.id === transObj.id){
        return transObj
      }else{
        return trans
      }
    })
    setTransactions(myTransactions)
    fetchAndUpdate(transObj)
  }

  const fetchAndUpdate = async (transaction) => {
    const obj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
          description: transaction.description,
          amount: transaction.amount,
          date: transaction.date,
          category: transaction.category
      })
    }
    const res = await fetch(`http://localhost:4000/transactions/${transaction.id}`,obj)
  }

//sort function 
const handleSort = (type) => {
   if(sortType === type){
         setSortType(null);
   } else {
    setSortType(type);
    // making a copy of the transactions array to be used for sorting purposes as per the type 
    const sortedTransactions = [...transactions]

    if(type === 'category'){
       sortedTransactions.sort((a,b) => a.category.localeCompare(b.category));
    } else if(type === 'description'){
      sortedTransactions.sort((a,b) => a.description.localeCompare(b.description));
    }
    setTransactions(sortedTransactions)

   }
}

  return (
    <div className="App">
      
          <h2>Bank Of FlatIron</h2>
          <SearchBar onSearch={handleSearch} />
          <br></br>
          <button style={{
            margin: 10
          }} className='btn btn-primary' onClick={() => handleSort(null)}>Clear Sort</button>
          <button  style={{
            margin: 10
          }} className='btn btn-primary' onClick={() => handleSort('category')}>Sort by Category</button>
          <button  style={{
            margin: 10
          }} className='btn btn-primary' onClick={() => handleSort('description')}>Sort by Description</button>
          <button  style={{
            margin: 10
          }} className='btn btn-info' onClick={() => setDisplayEditForm(!displayEditForm)}>Toggle Edit Form</button>
          <TransactionTable transactions={filteredTransactions} onDelete={handleDelete} onEdit={handleEdit}/>
          {displayEditForm ? <EditTransaction toEdit={editedTransaction} myEdit={updateTransaction}/> : null}
          <AddTransactionForm onAdd={addTransaction}/>
    </div>
  );
}

export default Home;
