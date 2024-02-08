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







