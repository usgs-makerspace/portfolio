# makerspace-portfolio

> Gallery of Makerspace Projects

## Notes and Instructions
Note: This is a work in progress and subject to change based on user feedback and further development.
Since we are looking for user feedback on how well this concept meet the needs of the Makerspace
group, we have NOT invested any time in the appearance of the application. Rest assured
that if this application meets the needs of the Makerspace group, the appearance of the 
application will meet aesthetic standards associated with Makerspace. The intent is that 
this 'portfolio' will contain reference to all the work done by Makerspace, both that which has been
released to the public and that which has not. As such, its scope will be 'internal' to
the USGS network. But, that being said, the thought is that this application could also
be adjusted to stylishly feature a 'public' Makerspace portfolio by simply filtering out 
material that has not been publicly released.


Purpose: We would like to create a 'portfolio' of Makerspace products that allow us, and others, to
quickly show/reference past work.
 
The 'portfolio' exists in two parts:
 
 1) a Vue based web application that give users
quick access to projects (applications and artifacts such as animation and pdf files) and information
about the project, such as who worked on it and when, technologies used etc.
 
 2) a unified storage area for valuable items such as Photoshop and Illustrator 
files used create final products but are normally lost to the chaos of personal file storage
shortly after work closes on a product. 

How the web application works:
The web application uses a JSON file to update the page contents. 

This JSON file is in a folder on S3 (ask a team member for the location).   

## How to Get Your Project to Show on the Projects Page 
Fork the repository. Clone your fork to your local system. 

If you have an interest in previewing your changes, you will need follow the instructions
in the 'Build Setup' section that follows. If you do not wish to preview your changes, 
the build step is not required. 

`Note if you do choose to follow the build steps at the bottom of the page, you will want to use
http://localhost:3000/makerspace-portfolio/makerspace-portfolio-application/ as the URL to run to
run the application. This is becaue the local deployment is matching the folder structure of the Simple Storage Solutions (S3)
on Amazon Web Services (AWS).`

### Description of content you could add

The first step here is to decided what parts of the project are important to store and 
where. The Makerspace 'portfolio' is in an Amazon Web Services (AWS) 'bucket'.

`note: The easiest way to see the 'portfolio' file structure is to use the AWS Console. The AWS console has a 
Graphic User Interface (GUI), which makes uploading files an deleting files a breeze. If you are
new to the USGS, you will need to request a developer account to view the files. Once you have an account
typing 'awsconsole.usgs.gov' into you browser will bring either give you access or bring you to the login screen. `

Once in the AWS Console, you can ferret your way to the needed folders by selecting S3 (Simple Storage Solutions)
from the initial menu (after the radio button for 'select a role' (hint: choose 'adfs-developers')), then enter 'internal.wma.chs.usgs.gov' in the 
auto-completing search bar.

`s3 >> internal.wma.chs.usgs.gov >> makerspace-portfolio`

Inside the makerspace-portfolio folder in the internal.wma.chs.usg.gov bucket there are folders related to project/efforts/functions of Makerspace.
If a folder does not exist for your project you can create it using the existing pattern as
your guide. Generally speaking, each project folder has three sub-folders, 'final-product',
'portfolio-images', and 'related-materials'.

`final-product` folders - hold the main artifacts produced at the end of a period of work. 
This may be a fully deployed static web application, a file containing an animation, a 
PDF (portable document format) file, or many other options. The 'final-product' folder may
contain many folders depending on if the project has resulted in several products in
separate work intervals. These folders should be denoted by date in the following format mm_dd_yy.

`related-materials` folders - can be used as a repository for any number of project related
items that would otherwise be hard to store. Some obvious examples would be Photoshop and 
Illustrator files required to produce a final product, various notes, scans of hand drawn sketches,
screen shots, etc; the possibilities are endless. As noted for the 'final-product' folders
if work was completed during discrete periods, use the date structure described. 

`portfolio-images` folders - hold the image for the thumbnail and product information
page. More about use of this folder is in the following section.

### Adding your product's information to the application 

Note-you only need to add your project to the portfolio when a period of work on that product
has ended. The idea is that once entered into the portfolio, that entry should not need
modification again--it is archived--and will not need updates. Some exceptions to
this do exist. One example exception would be something like a 'shelved' project that has been 'unshelved.'  

As mentioned earlier, the JSON file with the has the details for each project is stored in an AWS S3 bucket.
While this is not an ideal work pattern, you will need to download a copy of the projectDetails.js file from
AWS S3. From there you can modify the file and once done, upload the new file the AWS S3 bucket. 
 
In the downloaded version of the 'projectDetails.js', copy one of the existing objects (each object is set off from 
the rest by a set of curly braces '{ }' and begins with '"id":"some number"',; yes there are other curly braces inside of the 
main sets, but it is fairly easy to see the start and end). Once the copying is done, paste the to the top of the
group using the current layout as a guide. 

Once you have a copy of an 'project' object, you will notice that there are 'key and value' pairs.
For example, the key value pair for the 'id' of each project is '"id":"some number"'. The
key here is '"id"' and the value is '"some number"'. You will want to go through and 
change all 'values' to what is appropriate to your project. Never change the 'key' values. 

Important the 'id' value should be consecutive to the value of the project proceeding it.

Some of the 'values' are in nested arrays that allow the association of multiple values with a single key, such as
'periodsOfWork' and 'links'. While the pattern of adding these nested values would be difficult to explain in words, using the existing
projects as a guide will make adding these values fairly straight forward. 

`note: For the value related to the 'currentStatus' key, please use one of the following choices (note, list may change if needed)`

`'complete' - use this if a defined period of work has ended; this usually results in an official 'product release', but may also be small item work that is a 'proof of concept' or 'Idea Blitz' related.` 

`'shelved' - use this if a work on a project has ended, but no product has been officially released, and work might resume at some future date.`

`'closed' - use this for work that has ended, but no product was officially released and there is no intent to resume work on the project at any future date.`

`'in progress' - use this for projects which are still in active development and require current state of the project to be recorded. This situation is common near the end of fiscal reporting periods.`

### Adding the Thumbnail image

The thumbnail image is the image seen on both the 'products' page and the page with the 
full description of the projects. This can be a 'screenshot' of something that will visually
represent the project to 'portfolio' users. The current recommended dimensions of the 
image are 1300 x 700 (but are subject to change as we better understand the layout of the application).

Once you have the perfect thumbnail image you can upload it to the 'portfolio-images' folder of your
project on AWS. You can then grab the URL of the image and replace the value related to 
"thumbnail" key in the JSON file. To copy the URL of your new thumbnail, click once on the name 
of your thumbnail in the AWS Console. The AWS Console will present you with a new webpage with details 
about your file. The last item on the page is the 'ObjectURL'. Right mouse click and then 'Copy link
address'.

### Finishing up

Once you have modified the JSON file to include your project's details, all the only step left is 
to push your work to the GitHub repository and make a pull request. 

And that is it. It might seem complicated on a first reading, but in reality the process is pretty straight forward.   

 
## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
# Note: you will need Node.js on your system for this to work
# Note: this sometimes fails do to system changes, 
# usally running 'npm rebuild node-sass' will fix the issue

$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
