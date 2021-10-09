

const TechProjects = () => {
   return(
       <div id="tech-projects">
           <h3>Technical Projects</h3>
           <p>DermaLog</p>
           <br />
           <p>Full Stack Ruby On Rails Project</p>
           <br />
           <p>Allows users to track their current skincare routines, leave notes on their skin condition, view skincare products, and view reviews left by other users.</p>
           <ul>
               <li>Allows users to create an account, log in, and uses Google's OmniAuth for faster account creation </li>
               <li>Makes use of Rails' associations, such as: belongs to, has-many, and has-many-through</li>
               <li>App has full CRUD functionality, which allows you to edit and delete routines, skin logs, and edit comments</li>
           </ul>
           <p>Brews On The Bayou</p>
           <br />
           <p>Full Stack app, with a React frontend and a Rails backend</p>
           <p>App for users to find Louisiana Breweries and view reviews left by other patrons</p>
           <ul>
               <li>Uses data from a custom API built specifically for infomation on Louisiana Breweries</li>
               <li>Allows users to leave reviews and view what other patrons are saying about breweries</li>
                <li>Search breweries by parish or city</li>
           </ul>
           <p>Dungeons & Dragons Character Creator</p>
           <br />
           <p>JavaScript frontend with a Rails backend</p>
           <p>Web app that allows users to create parties for their Dungeon and Dragon campaign and allows charactes to be added to created parties</p>
           <ul>
               <li>Uses data from third party API</li>
               <li>All content is rendered from a fetch request</li>
           </ul>

       </div>
   )
}

export default TechProjects