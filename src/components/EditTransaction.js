import { useEffect, useState } from "react"

export default function EditTransaction({toEdit, myEdit}){
    // console.log(toEdit)
    const [formData, setFormData] = useState({
        description: '',
        amount: 0,
        date: '',
        category: ''
    })

    useEffect(() => {
        setFormData({
          id: toEdit.id,
          description: toEdit.description,
          amount: toEdit.amount,
          date: toEdit.date,
          category: toEdit.category
        });
      }, [toEdit]);

    function handleEdit(event){
        event.preventDefault()
        myEdit(formData)
    }
    
    function handleInputChange(e){
        e.preventDefault()
        const key = e.target.name
        const value = e.target.value
        const data = {
            ...formData,
                [key] : value
        }
        setFormData(data)
    }

    // console.log(formData)
    return (
       <div>
        <h2>Edit Transaction</h2>
            <form className="form-control container" onSubmit={handleEdit}>
                <label htmlFor="description">Description</label>
                <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}                
                />
                <label htmlFor="amount">Amount</label>
                <input
                type="number"
                id="amount"
                className="form-control"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}                
                />
                <label htmlFor="date">Date</label>
                <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}                
                />
               <label htmlFor="category">Category</label>
                <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}                
                />
                <br></br>
                <button type="submit" className="btn btn-success">Edit transaction</button>
            </form>
       </div>
    )
}

