### Take Home Worksheet

Role: Sr. Web Developer

#### Scenario:
Below is an HTML document from a hypothetical eCommerce business&#39;s product
page. For each question, please write an explanation of how you would approach
the problem and what considerations or assumptions.

Clear and concise explanations and code comments are encouraged. Please use
the scripting language of your choice, either Javascript or **Typescript**.

#### Questions:
1. Each HTML element with the class `cart-item` contains a price and quantity of each item within a user's cart. Please write a function that calculates the cart's total cost and outputs the result in the `js-cart-total` element.
   a. I would approach this problem by first reviewing the elements with the class `cart-item` to understand the structure of the data and elements. I would then write a function to select all of the elements with the `cart-item` class, initialize a variable to hold the cart total. Following by iterate over the list (if list is not empty) and calculate the total cost by multiplying the price and quantity of each item. Finally, I would output the result in the `js-cart-total` element by selecting the element from the DOM and updating the `textContent`.

2. Write a function that sends a POST request to `https://thirdparty.com/track` whenever a user clicks the `Add to Cart` button. The HTTP request should include a JSON payload that contains the client `timestamp of the event`, `item_id`, and `cart_id`.
   a. I would approach this problem by first reviewing the data requirements to ensure all necessary data is available to send the POST request. I would then write a function to utilize the `fetch` library and create the payload. First I would get the current timestamp with the Date object, then get the `item_id` from the `data-item-id` attribute of the `"product"` element, using the `window.productPage` data as a fallback in the JSON payload. Last data for the `cart_id` I would retrieve from the `window.myUser` object. Finally, I would send the POST request to the third party API with the payload, validating the response or error as needed.\
   b. Assumptions:
    1. The `window.productPage` object is available and contains the `item_id` if the `data-item-id` attribute is not available.
    2. Epoch timestamp in milliseconds is acceptable for the `timestamp of the event`.

3. Identify the areas of the page that are classified as "dynamic," meaning they vary between users, devices, and inventory status.
   a. I would approach this problem by first reviewing the page to identify the areas that are dynamic. I would look for elements that change based on user interaction, device type, or inventory status. I would then document the elements and their behavior to understand the requirements for each. Finally, I would create a list of the dynamic elements and their requirements to ensure they are accounted for in the design and development process.
   b. Dynamic elements:
    1. `myUser`: The user information would vary by user for their unique name and cart_id.
    2. `isMobile`: The device type would change for each user agent that visits the page/site.
    3. `productPage`: The availability of the product may change based on inventory status, expected to update in real-time.
    4. User cart: The user's cart is unique for each user.
    5. Product price: The price of the product may vary based on user location, currency, or discounts.

4. Develop a feature to keep a list of the five most recently viewed products a user has visited. This information should persist across sessions.
  a. I would approach this problem by first reviewing the requirements for the feature to understand the data and user experience requirements. I would then create a function (hook) to store the recently viewed products in the browser's local storage. I would store the product information in an array and limit the array to five items. I would then update the array with the most recent product viewed and store the array in the local storage if the array has updated. Finally, I would create a function to retrieve the recently viewed products, along with a function to add a product being viewed to the list.
  b. See adjacent file `useRecentlyViewed.ts` for the implementation of the feature.
  c. Assumptions: 
    1. Library usage is allowed for the implementation feature.
    2. The feature is only required to store the product information and not the user's interaction with the product. (added to cart, # of views, etc.)
    3. The feature is reusable across the site and should not require additional configuration for each page.

5. Please explain how you would approach web performance optimization for this page. Use creative liberty here; the possibilities are endless!
  a. Woo that is an ask! There are so many ways to optimize any page depending on the configuration. But let's jump in from the top of what I can see. I approach optimization by looking at different areas of the application starting from the inside to the outside. Code to configuration. I would start by reviewing the codebase to identify any performance bottlenecks, such as unnecessary DOM manipulation, inefficient JavaScript, or CSS selectors. I would then review the network requests to identify any unnecessary requests or large assets that could be optimized. Finally, I would review the server configuration and CDN setup to ensure the site is optimized for performance.
  b. Optimizations:
    1. Minify and compress the HTML, CSS, and JS files to reduce the file size.
       1. Typically done in the build process with tools like Webpack, Gulp, or Grunt.
    2. Remove the font-face for `Helvetica Neue` as it does not appear to be used in the file. Unused imports should be removed.
    3. Asynchronously load the `main.js` & `productPage` script to prevent blocking the page load if the scripts are not critical to the initial render. (React dynamic lazy loading is a good example)
    4. Optimize the images by compressing them and using the correct format (WebP, JPEG, PNG) for the content. WebP is a good choice for modern browsers.
       1. Add `loading="lazy"` to the image tags to lazy load the images and improve the page load time if they are not in the initial viewport.
       2. Add `srcset` to the image tags to provide different image sizes based on the device's screen size and resolution.
       3. Use a CDN to serve the images to reduce the load time and improve the user experience.
    5. Utilize HTTP/2 or HTTP/3 to improve the page load time by reducing the number of requests and improving the request/response time.
    6. Consider using a service worker to cache the main assets and improve the page load time for repeat visitors.
    7. Consider converting to a PWA to improve the user experience and provide offline access to the site.
    8. Use Semantic HTML to improve the accessibility and SEO of the page.
       1. The `cart-container` should include a `<ul | ol>` element to list each cart item. 
       2. Each `cart-item` should be a `<li>` element with the price and quantity as text content.
       3. `div` elements containing text values should be replaced with text elements such as `<p>`, `<span>`, or `<strong>` to improve the accessibility and SEO of the page. `div` are meant for grouping elements and not for text content.

