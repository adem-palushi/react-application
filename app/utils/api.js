export const saveEmployeeData = async (id, screenshot, video) => {
    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, screenshot, video }),
      });
  
      if (!response.ok) {
        throw new Error(`Failed to save employee data: ${response.statusText}`);
      }
  
      return response.json();
    } catch (error) {
      console.error('Error saving employee data:', error);
      return null; // or some error response
    }
  };
