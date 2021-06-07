# VisualCortex - Frontend Exercise

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/visualcortex-exercise)

[View application](https://visualcortex-exercise.stackblitz.io)

## File structure
The files are separated by functionality. A component's JS file and its specific CSS file are put in the same folder. Altogether, there are 3 core components:
* App - the main component that contains the entire page. This component sits in the `/src` folder
* Form - the component for the form that users can enter their data into. This component is in `/form`
* Result - the component that displays the calculated amount for each tax bracket. This component is in `/results`
Utility functions are in `/utils`. Files shared across all components are in `/common`

## How to run
You can run this code through StackBlitz using the links at the top of this document. To run this code locally:
* Download the code
* Install dependencies by running `npm install` in the directory that the code is in
* Run local development server using `npm start`
* The node server should make the application viewable on browser, usually at http://localhost:3000