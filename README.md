# Seasonal Calendar

## Core
- [x] As a user, I would like to see the veg/fruites that are currently in season.
- [x] As a user, I would like to navigate around the website.
- [x] As a user, I want a calendar overview of vegetables and fruit available in different seasons.
- [x] As a user, I would like to see recipes relevant to the current month.
- [ ] As a user, I would like to see more information about specific fruits and veg.
- [x] As a user, I would like to see specific information about a recipe.
- [ ] As a user, I would like to see an overview of all recipe. 

## Stretch 

- [ ] As a user, I would like to able to create an account. 
- [ ] As an account holder, I would like to save my favourite recipes 


## Setup 
1. Clone your copy and cd into it
2. Run `npm install` to install all the dependencies
3. Run `npm run dev` to start the local dev server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Roles

UX/UI - Paz
Scrum - Joe
QA - Abby
DevOps - Lisa

## Introduction

We are buliding a website for users to view vegetables and fruits that are in season in the UK. The user will have access to a seasonal calendar to know the 'in season' fruits and vegetables for the current month.

The user will be able to access recipes based on those fruites and vegetables and learn the nutritional benefits  

You can find our site hosted on [Vercel](https://week7-seasonal-calendar-umber.vercel.app/) here. 


## Planning 

You can find our Figma [Demo](https://www.figma.com/proto/4gFoWhl8lI1aAHv89E9CIt/Seasonal-Calendar?node-id=23%3A4&scaling=scale-down&page-id=0%3A1&starting-point-node-id=23%3A4) here

We planned this project during a one week design sprint and used a miro board and figma to plan.
![user story](https://i.imgur.com/ek65c87.png)
### Questions for initial user research
![](https://i.imgur.com/XF64krR.png)



## Why are you building it?

Seasonal produce generally requires fewer chemicals and the food miles are often significantly lower as product is grown more locally. This keeps the environmental impact, as well as the cost lower.

The other websites showing a seasonal calendar don't have displays the data in an engaging way.

## Project scope
For our MVP we're aiming to build a webiste, that displays information to users about seasonal vegetables and recipes for those vegetables. The page should update every month and show anything relevant for the current month. We're aiming the website to be easily navigatable and clear to understand. Following this we want to build a personalisation feature, where users can log in, save their favourite recipes. Another stretch goal is a vegetable swapping platform. If people plant vegetables and have loads leftover, they can offer these to other users.


## What are you not building?

- We are not building a global seasonal calendar where users can pick their location.
- We are not building a React native app.
- We are not building a clone of an existing website.


## How did you decide what features were important?


- We run a discovery session to understand what problem our users are facing.
- We conducted a user research session interviewing eight people in which we presented the possible features and were open to suggestions too.
- We then analysed the feedback from the user research and the discovery session to define who our users were, what was their problem and how this app would solve those issues.

## How are you going to structure your sprints?

-  1-week sprints
-  Daily stand-ups
-  Assign issues and pair programme
-  Regularly swapping pairs

## What order are you going to build in?

We're focusing on building our MVP first, which means a website that lists seasonal vegetables, with a calndar overview, some suggested recipes and overview pages of the individual vegetables. We're planning on building tests as we go and if we accomplish all this focus on stretch goals, which yet have to be discussed. 

## How did user research inform your plan?

We conducted user research before building this project twice. First we did a qualitative analysis of the users' needs and what features they would like to see on the website, and what they find helpful. We considered these answers in the following design process, to come up with an idea that is achieveable, but also meets our users needs. Following this we designed a prototype on [figma](https://www.figma.com/proto/4gFoWhl8lI1aAHv89E9CIt/Seasonal-Calendar?node-id=23%3A4&starting-point-node-id=23%3A4) and used it to conduct further user research, on whether our idea came across coherently and if the website is easy to understand.

## How will you ensure your project is accessible to as many users as possible?
We will design our website and write code follow with A11y projects to make sure our website is accessible to as many users as possible

## Are there any legal or regulatory requirements you should consider?
When fetching from an api we should consider where the data is coming from and if we are allowed to use it.

If we complete our stretch goal(s), we have to consider GDPR. 

## Project learnings 

#### Did your team work effectively?

#### Week 1

- The team work was very well organised. By using daily stand-ups and writing-down lists of achievements and issues todo for the next day.

- We have switched pairs twice daily or if facing a blockage.

#### Week 2


#### What would you do differently next time?

## Research and findings 

#### What did you find out from user testing?
    
- The intention of the website is clear
- The design is clean
- The website is easy to navigate

## Project outcomes 

#### Were your assumptions right or wrong?
##### Worng assumptions:
* user might like to browse infomation with images but turns out they prefer text/article based content
* ther reason for user buy from loacl farmer's shop are concerning about the environment but the main reason is cost and convenience 


## Recommendations and conclusions 

#### What features would you prioritise to build next?

#### Was the project a success?

### Software Development Lifecycle stages 

- Discovery
- User research
- Wireframing
- Design
- Usabily Testing
- Code planning
- Development

### Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

    **QA**
    Responsibilities 
    - Monitor codecov and make sure test coverage is kept up
    - Understand how to test pure functions, database queries, routes, DOM
    - Understand how and when to use mocks
    - Set up separate test database and destroy / build scripts
    - Insist on clean and legible code
    
    **DevOps** 
    Responsibilities 
    - Lead on setting up repo and file structure
    - Make sure separation of concerns is considered
    - Set up linting and check it works for everyone
    - Set up deployment to Heroku and take ongoing responsibility
    - Set up environment variables for local and remote databases
    
    **Scrum Facilitator**
    Responsibilities 
    - Sprint planning
    - Prioritise issues
    - Break down larger issues into manageable chunks
    - Lead standups and Sprint Planning
    - Clear blockers
    - Lead conversations with the Product Owner
    - Listen to and mediate Product Owner needs
    - Balance needs of the Product Owner with the needs of the Product Team
    - Provide a daily rundown of work completed
    - Lead Sprint Review

    **UX Lead** 
    Responsibilities 
    - Advocate for the user
    - Create a style guide
    - Ensure design heuristics are followed
    - Lead on user testing
    - Lead on project documentation





[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Object returned by recipe API
<img width="1134" alt="Screenshot 2022-11-09 at 12 19 25" src="https://user-images.githubusercontent.com/2411572/200898407-fb51acc3-7fca-4d85-a941-fd5600a4c58c.png">
## Array we are populating from recipes fetch (1 fetch per vegetable as param for recepies) Only 10 vegs as per API limitations for free account


### structure of recipes
```javascript
fetched: [
    {
      label: 'Roasted Apples',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/a8c/a8cbde5520315fa9d8d6adbfbd6ed33e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJHMEUCIAWFL2inWtMaSC%2BK%2BlzPeEDcOESt1Yi9SoSF6%2BxaXKQwAiEAtu4EQIwTNQwaCr4GMYL8acIE7KcymidmqxxyvwwOH2UqzAQIYBAAGgwxODcwMTcxNTA5ODYiDIo%2B8oQe3zOI6vuoGyqpBMebXgZsEyUBH0A8N0JpOKnVUwWoPLhrky04dKHafijvYFkhIaWdFNIG87uqj6qYsd8HZ7vAYvTkJKyhRem8tUb3AlMlrP4lygHWqKhXRVpKXsXun3eUs%2ByC6OUBWWuEAK0%2BBZPDmrdsg2YmZStAcCg1dl4NPwmZTU10W%2FdJdUVkT96nOKy97MIeitiHpJufabODWd2GcosxvPWnnD32i9WLIXM7xyjpEKcK4Jrs59fvv%2FoM2tVwHzPpj%2BJU0oLxxMjlDrE4H3JbyOF9aE3rQHTye1QJBVRi4WM8CyeWEuK8rsWfXJTMnzeAEmJN6uRArGoyKLw%2FfNI5kaUbwRNripFXm5CHzHjZ8Vn7bm8x3xLDbRDe849d2fMy8o71O9sXzV2aBxwj0nR3kXBP0ftvPUGUTvVuT5ohLBQnkMdQ0Dj88OcNv3GPrhfPhtWXwnrTarU9dvrfyPl8VeqLVVaZZ7y90hB3ATOHGx%2Bbj8uqAh7VYFhgHwX6c%2F%2FHYJf7Z7efTM956ZVGpkZwq6XzonVWAWG68pjrMiAGP5Mt8LIoMxKUNPDbvP23H6zTn8m9A1PhIKCsjglYZ%2BO19%2Bk0ofAj2JliBS7yhcoBMEIr%2B3faA%2FhGyk4rvWIbFO1y266TyqPd2r7hrsccLeXy5yX%2Fuh2YZoMb3DrrKr8MJQhW3CfZx2%2B9cgUt%2FqPNdKQz6%2FsgNwLnmo06bnGrDY5%2BBLpAm08MLY7X4KIxgp9DsM4wyYivmwY6qQE1FbFEsmuEM0EOubth83gYmO7eDvhA%2FOp4zY8Yd5oYrTzhM%2FNMGXHfVlBs9n5kLwbsnZmC8DnPnJVSi50ZNxTn2ektT2es6PEngA6QilrKU6dY73CqGpd12uKgerco48eKSuSDAF%2BzqFCliVw6ouHubnPdobKb7qj8j1lFCEvbxC%2Bn8FkKGnkApbgixSpOsvK2bUHoRHyYUkmt22PVAijJC7TL5Thhg3CW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170011Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJOASTQPN%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab03fb5fc12b47457387a1c6fbc0374d801044dbe0eaa6016aa2ec5a56d84afa',
  
    {
      label: 'Pan-Browned Brussel Sprouts',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/48b/48bd8217f8d3cb02a1bfb00e6e2f6cfe.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJHMEUCIAWFL2inWtMaSC%2BK%2BlzPeEDcOESt1Yi9SoSF6%2BxaXKQwAiEAtu4EQIwTNQwaCr4GMYL8acIE7KcymidmqxxyvwwOH2UqzAQIYBAAGgwxODcwMTcxNTA5ODYiDIo%2B8oQe3zOI6vuoGyqpBMebXgZsEyUBH0A8N0JpOKnVUwWoPLhrky04dKHafijvYFkhIaWdFNIG87uqj6qYsd8HZ7vAYvTkJKyhRem8tUb3AlMlrP4lygHWqKhXRVpKXsXun3eUs%2ByC6OUBWWuEAK0%2BBZPDmrdsg2YmZStAcCg1dl4NPwmZTU10W%2FdJdUVkT96nOKy97MIeitiHpJufabODWd2GcosxvPWnnD32i9WLIXM7xyjpEKcK4Jrs59fvv%2FoM2tVwHzPpj%2BJU0oLxxMjlDrE4H3JbyOF9aE3rQHTye1QJBVRi4WM8CyeWEuK8rsWfXJTMnzeAEmJN6uRArGoyKLw%2FfNI5kaUbwRNripFXm5CHzHjZ8Vn7bm8x3xLDbRDe849d2fMy8o71O9sXzV2aBxwj0nR3kXBP0ftvPUGUTvVuT5ohLBQnkMdQ0Dj88OcNv3GPrhfPhtWXwnrTarU9dvrfyPl8VeqLVVaZZ7y90hB3ATOHGx%2Bbj8uqAh7VYFhgHwX6c%2F%2FHYJf7Z7efTM956ZVGpkZwq6XzonVWAWG68pjrMiAGP5Mt8LIoMxKUNPDbvP23H6zTn8m9A1PhIKCsjglYZ%2BO19%2Bk0ofAj2JliBS7yhcoBMEIr%2B3faA%2FhGyk4rvWIbFO1y266TyqPd2r7hrsccLeXy5yX%2Fuh2YZoMb3DrrKr8MJQhW3CfZx2%2B9cgUt%2FqPNdKQz6%2FsgNwLnmo06bnGrDY5%2BBLpAm08MLY7X4KIxgp9DsM4wyYivmwY6qQE1FbFEsmuEM0EOubth83gYmO7eDvhA%2FOp4zY8Yd5oYrTzhM%2FNMGXHfVlBs9n5kLwbsnZmC8DnPnJVSi50ZNxTn2ektT2es6PEngA6QilrKU6dY73CqGpd12uKgerco48eKSuSDAF%2BzqFCliVw6ouHubnPdobKb7qj8j1lFCEvbxC%2Bn8FkKGnkApbgixSpOsvK2bUHoRHyYUkmt22PVAijJC7TL5Thhg3CW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170012Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJOASTQPN%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=06ca02e068dd2e0dfa258220969bd1b550383c4b62bd617304da933d0133962c',
      ingredientLines: [Array],
      url: 'http://smittenkitchen.com/2006/12/i-never-promised-you-maturity/'
    },
   
    {
      label: 'Blanched Cauliflower',
      image: 'https://edamam-product-images.s3.amazonaws.com/web-img/32d/32dd6b52adc27483abcb7b828c3b94c7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLWVhc3QtMSJHMEUCIAWFL2inWtMaSC%2BK%2BlzPeEDcOESt1Yi9SoSF6%2BxaXKQwAiEAtu4EQIwTNQwaCr4GMYL8acIE7KcymidmqxxyvwwOH2UqzAQIYBAAGgwxODcwMTcxNTA5ODYiDIo%2B8oQe3zOI6vuoGyqpBMebXgZsEyUBH0A8N0JpOKnVUwWoPLhrky04dKHafijvYFkhIaWdFNIG87uqj6qYsd8HZ7vAYvTkJKyhRem8tUb3AlMlrP4lygHWqKhXRVpKXsXun3eUs%2ByC6OUBWWuEAK0%2BBZPDmrdsg2YmZStAcCg1dl4NPwmZTU10W%2FdJdUVkT96nOKy97MIeitiHpJufabODWd2GcosxvPWnnD32i9WLIXM7xyjpEKcK4Jrs59fvv%2FoM2tVwHzPpj%2BJU0oLxxMjlDrE4H3JbyOF9aE3rQHTye1QJBVRi4WM8CyeWEuK8rsWfXJTMnzeAEmJN6uRArGoyKLw%2FfNI5kaUbwRNripFXm5CHzHjZ8Vn7bm8x3xLDbRDe849d2fMy8o71O9sXzV2aBxwj0nR3kXBP0ftvPUGUTvVuT5ohLBQnkMdQ0Dj88OcNv3GPrhfPhtWXwnrTarU9dvrfyPl8VeqLVVaZZ7y90hB3ATOHGx%2Bbj8uqAh7VYFhgHwX6c%2F%2FHYJf7Z7efTM956ZVGpkZwq6XzonVWAWG68pjrMiAGP5Mt8LIoMxKUNPDbvP23H6zTn8m9A1PhIKCsjglYZ%2BO19%2Bk0ofAj2JliBS7yhcoBMEIr%2B3faA%2FhGyk4rvWIbFO1y266TyqPd2r7hrsccLeXy5yX%2Fuh2YZoMb3DrrKr8MJQhW3CfZx2%2B9cgUt%2FqPNdKQz6%2FsgNwLnmo06bnGrDY5%2BBLpAm08MLY7X4KIxgp9DsM4wyYivmwY6qQE1FbFEsmuEM0EOubth83gYmO7eDvhA%2FOp4zY8Yd5oYrTzhM%2FNMGXHfVlBs9n5kLwbsnZmC8DnPnJVSi50ZNxTn2ektT2es6PEngA6QilrKU6dY73CqGpd12uKgerco48eKSuSDAF%2BzqFCliVw6ouHubnPdobKb7qj8j1lFCEvbxC%2Bn8FkKGnkApbgixSpOsvK2bUHoRHyYUkmt22PVAijJC7TL5Thhg3CW&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20221109T170013Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFJOASTQPN%2F20221109%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=decbc8d6601f43504cfa211ba403c1942fd8948cd37331e238d792bb6d11c793',
      ingredientLines: [Array],
      url: 'https://www.marthastewart.com/1049672/blanched-cauliflower'
    },
   
  ]
```
# SC-testing
