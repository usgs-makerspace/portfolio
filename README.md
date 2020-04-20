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
The web application uses JSON file to update the page contents. 

This JSON file is in a folder within the web application. Storing the file inside the
application seemed like an easy way to add version control through Git, but
the JSON file can also be stored in an external location such as a S3 bucket. I am 
open to suggestions whether that would be a better option.   

## How to Get Your Project to Show on the Projects Page 
Fork the repository. Clone your fork to your local system. 

If you have an interest in previewing your changes, you will need follow the instructions
in the 'Build Setup' section that follows. If you do not wish to preview your changes, 
the build step is not required. 

### Description of content you could add

The first step here is to decided what parts of the project are important to store and 
where. The 'portfolio' application is in an Amazon Web Services (AWS) 'bucket', https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/ .
Inside that bucket there are folders related to project/efforts/functions of Makerspace.
You can view this bucket using the AWS console. 
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

`portfolio-images` folders - hold the image that for the thumbnail and product information
page. More about use of this folder is in the following section.

### Adding your product's information to the application 

Note-you only need to add your project to the portfolio when a period of work on that product
has ended. The idea is that once entered into the portfolio, that entry should not need
modification again--it is archived--and will not need updates. Some exceptions to
this do exist. One example exception would be something like a 'shelved' project that has been 'unshelved.'  

In the assets folder of the AWS location mentioned earlier, you will find a file called 'projectDetails.js'. This file contains
an exported JavaScript Object Notation (JSON) object. This object contains many sub-objects
each of which represent a single Makerspace project/effort/function. 
 
Copy one of the preceding objects (each object is set off from 
the rest by a set of curly braces '{ }' and begins with '"id":"some number"',; yes there are other curly braces inside of the 
main sets, but it is fairly easy to see the start and end) and paste it to the top of the
group using the current layout as a guide. 

Once you have a new copy of an 'project' object, you will notice that there are 'key and value' pairs.
For example, the key value pair for the 'id' of each project is '"id":"some number"'. The
key here is '"id"' and the value is '"some number"'. You will want to go through and 
change all 'values' to what is appropriate to your project. Never change the 'key' values. 

Important the 'id' value should be consecutive to the value of the project proceeding it.

Some of the 'values' are in nested arrays that allow the association of multiple values with a single key, such as
'periodsOfWork' and 'links'. While the pattern of adding these nested values would be difficult to explain in words, using the existing
projects as a guide will make adding these values fairly straight forward. 

### Adding the Thumbnail image

The thumbnail image is the image seen on both the 'products' page and the page with the 
full description of the projects. This can be a 'screenshot' of something that will visually
represent the project to 'portfolio' users. The current recommended dimensions of the 
image are 1300 x 700 (but are subject to change as we better understand the layout of the application).

Once you have the perfect thumbnail image you can upload it to the 'portfolio-images' of your
project on AWS. You can then grab the URL of the image and replace the value related to 
"thumbnail" key in the JSON file.

### Finishing up

Once you have modified the JSON file to include your project's details, all the only step left is 
to push your work to the GitHub repository and make a pull request. 

And that is it. May it seem complicated on a first reading, but in reality the process is pretty straight forward.   

 
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
