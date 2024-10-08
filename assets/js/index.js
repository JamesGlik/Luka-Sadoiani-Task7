async function getAllItems() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      if (response.status === 200) {
        response.data.forEach(item => {
          console.log(`ID: ${item.id}, Title: ${item.title}`);
        });
      } else {
        console.error('Failed to fetch items.');
      }
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  }
  
  async function createNewItem() {
    try {
      const newItem = { 
        title: 'New Post', 
        body: 'This is a new post.', 
        userId: 1 };
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newItem);
      if (response.status === 201) {
        const createdItem = response.data;
        console.log(`New Item Created - ID: ${createdItem.id}, Title: ${createdItem.title}`);
      } else {
        console.error('Failed to create new item.');
      }
    } catch (error) {
      console.error('Error creating new item:', error);
    }
  }
  
  async function updateItem(id) {
    try {
      const updatedData = { 
        title: 'Updated Title', 
        body: 'Updated body content.', 
        userId: 1 };
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedData);
      if (response.status === 200) {
        const updatedItem = response.data;
        console.log(`Item Updated - ID: ${updatedItem.id}, Title: ${updatedItem.title}, Body: ${updatedItem.body}`);
      } else {
        console.error('Failed to update item.');
      }
    } catch (error) {
      console.error('Error updating item:', error);
    }
  }
  
  async function deleteItem(id) {
    try {
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      if (response.status === 200) {
        console.log(`Item with ID: ${id} has been deleted.`);
      } else {
        console.error('Failed to delete item.');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }
  
  getAllItems();
  createNewItem();
  updateItem(1);
  deleteItem(1);