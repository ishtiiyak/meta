const nav = (
  <nav>
     <h1>website</h1>
     <ul>
      <li>price</li>
      <li>content</li>
      <li>sares</li>
     </ul>
  </nav>
)

/* 
Challenge: 

Create a navbar in JSX:
 - Use the semantic `nav` element as the parent wrapper
 - Have an h1 element with the brand name of your "website"
 - Insert an unordered list for the other nav elements
     - Inside the `ul`, have three `li`s for "Pricing",
     "About", and "Contact"
 - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

ReactDOM.render(nav, document.getElementById("nav"))