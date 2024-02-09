## Components 
1. Table component : Component to display my transcations 
2. AddTransaction component : Display and capture user's input from a form 
3. SearchBar component : display an input field that will capture the search term to filter the array. 

## Relationships 
APP (parent component) : responsible for maintainance of state and prop sharing -> Children (see components)


### GITHUB COLLABORATION 
1. Create your git repository on a platform(GitHub, GitLab, BitBucket)
2. The scrum master invites the team members to the repository (collaboration settings from github.) 
3. After consulting from team members , the scrum master creates the initial project template (project structure) and pushes to the repository either to the main or master branch. 
 - are we on the same version (node) if react :: opt for the latest. 
 - extra files or folders.
4. Team members proceed to clone the repository. 
5. Task allocation amongst the team members.  (React user interfaces)
6. Once done with assigned task each member proceeds to create a branch in the repository. 
        git checkout -b joseph-contact-component  (creation of a new branch)

7. Each member after creation of branch should proceed to add and commit the changes then finally push to the branch(members branch)
8. Then the scrum can proceed to merge the branches by following commands 

    - git checkout(switching to an existing branch) master or main 
    (0nly do git pull origin branchname if you merged from platform)
    ---- merging steps ----
    - git fetch 
    - git merge branchname 
    - git status 
    - git add .
    - git commit -m " "
    - git push to main origin. 



### VERCEL DEPLOYMENT
vercel.com -> registering using github account.
React
1. Ensure there is a repository. 
2. Import this repository to vercel. Follow steps on recording 

Json-server
1. Fork and clone this repository : https://github.com/kitloong/json-server-vercel
2. Change db.json to your content 
3. Push to your forked repository 
4. Import this repository to vercel. Follow steps on recording


### CLient Side Routing 
Client side routing allows the app to update the URL on a link click without making a new request for another document from the server unlike traditional websites that would request documents from the web server for each new click event(Link acess)

### React Router : Defacto routing lib. 
this lib provides a declarative way to define routes and seamlessly manage navigation between different 
components 
Uses three main concepts to create a cohesive routing experience.
- Router : Browser router will give access to all react router features in the app
- Routes : Create the route links for our component  
- Links 

1. Improved Performance : eliminates full page reloads 
2. Enhanced User Experience 
3. Allows for code splitting and Lazy loading. 
4. Route-based data fetching 


Steps 
1. Install react router dom 
2. Import BrowserRouter from react-router-dom. Inside index.js wrap the top level component 
3. In the main component create routes for the components you wish to have route links for.


A,B,C,D,E   :::   A (value)(B)  ::  (B)(C) :: (C)(D) : (D)(E) :: E   :: I WANT VALUE FROM A TO REACH E

components :: prop drilling 
function A () {
    const [x,setX] = useState('something like this')
    return(
        <>
          <B propx={x}>
        </>
    )
}


function B ({propx}) {
    return(
        <>
          <C propx={propx}>
        </>
    )
}


function C ({propx}) {
    return(
        <>
          <D propx={propx}>
        </>
    )
}

function D ({propx}) {
    return(
        <>
          <E propx={propx}>
        </>
    )
}

function E ({propx}) {
    //this state is unique , 
    const [x,setX] = useState('something like this')
    return(
        <>
          <p>{propx}</p>
        </>
    )
}

React brings in the Context API accessed using the useContext hook to manage state globally. :: useContext()