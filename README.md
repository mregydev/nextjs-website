## Installtion and running on local
- Run ```npm i --legacy-peer-dep ``` , cause latest version of chakra ui ``2.8.2`` use next 13 but installed next is 14 , but for me there was no issue in compitability as I use chakra only for  client side rendering 
- To run on local run ```npm run dev```

## How to run app 
- You can view application online on https://nextjs-website-tau.vercel.app/projects
- Main page show list of projects and when you click on any project it goes to the details page - In the details page you can see info about the project , on the left side you can add project to cart selecting number of volumes you want 
- In the cart page it view list of choosed project , you can edit number of volumes per each project and also can remove project from cart
- There are validations on filter components in projects page and add to cart in details page and edit cart item in cart page which check that inserted volume is bigger than max volume offered by project
- For sdgs , we are using tags and in order to see full text hover over it

## Tehnical aspects : 
- Application uses hyprid solution that contains mix of server and client components 
- Client components uses **Chakra UI** library and server components using **Panda Css** which uses Chakra also and this ensure consistency 
- Client components are **Filter**  component in the projects page , **AddToCart** compoenent in the details page and whole **Cart** page for its usage for localstorage
- I prefered making project list rendering and filtering on the server side ( as server component ) assuming that we may have large data set so this will be better in having less FCP time and thus having less user blocking time especially when dealing in slow networks and on mobile and also useful for SEO
- Cart items are stored in local storage and thats why carts page is client side

## Performance 
- On google lighthouse FCP is .3 seconds and blocking time is 110 ms which is good but LCP is 2.4 s and it takes quite long time because of the projects images which has very big size and it should be reduced using app like sqoosh 
- Also Accessability is getting 100% and thats because of the used UI library for sure
  <figure><img width="806" alt="image" src="https://github.com/mregydev/nextjs-website/assets/28675823/28c35236-2299-4bc0-bc01-86cb2624b465"><figcaption>**Projects page**</figcaption></figure>

  <figure><img width="806" alt="image" src="https://github.com/mregydev/nextjs-website/assets/28675823/7ef8b2be-69c2-4c5b-9730-adf2036d75e7"><figcaption>**Details Page**</figcaption></figure>


  


## Component structure used :
- Compoent should be folder containing three  separate files:
  - UI file ( mostly same as component name ) that contains ui logic 
  - Index file which is the main entry and also its the container that can handle any business logic or side effect (only related to our component like api request only used by our componenet)
  - Test file
  - Css module ( I am not using it in this project and using panda)

    **Note :** Common components have only index.tsx as they have only ui logic as they are mostly presentational  
  
## Test 
- Tests added only to common components and you can run them by ```npm run test```

## Things to improve
- Add Not found in the details page when inserting invalid id
- Add more unit tests
- Add Card using in projects page to the common component
- Improving LCP by reducing image size and quality in the projects page as we donot need high resolution as images are  already small
  

