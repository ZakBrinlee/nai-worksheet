/*
* Feature to keep track of the last 5 viewed products
* Requirements: should persist across sessions
*/
function useRecentlyViewed() {
  // Initialize a state variable with the value from localStorage, default to empty array
  // Utilizing React state hooks as it is a widely used library, Angular, Vue, etc. have similar features
  const [recentlyViewed, setRecentlyViewed] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem('recentlyViewed') || '[]');
  });

  const addRecentlyViewed = (productId: string) => {
    setRecentlyViewed((prev: string[]) => {
      // initialize variable
      let newRecentlyViewed;
      // Avoid duplicates in recentlyViewed list
      if (prev.includes(productId)) {
        // assign old list to newRecentlyViewed
        newRecentlyViewed = prev;
      } else {
        // Assign prev state and add new product to the list
        newRecentlyViewed = prev;
        newRectlyViewed.push(productId);
        // Limit the list to 5 items
        if (recentlyViewed.length > 5) {
          newRecentlyViewed.shift();
        }
      }

      // Compare new array to array in state to avoid unnecessary calls to localStorage
      // Utilize a library such as lodash for deep comparison function
      if (!lodash.isEqual(recentlyViewed, newRecentlyViewed)) {
        // Save the updated list to localStorage
        localStorage.setItem('recentlyViewed', JSON.stringify(newRecentlyViewed));
      }

      // Return the new list
      return newRecentlyViewed;
    });
  };

  // Return the state and the function to update the state
  return { recentlyViewed, addRecentlyViewed };
}
