export default {
  projects: [
    {
      "id":"10",
      "project": "WBEEP - Natural Water Storage Concept Map",
      "title":"National Integrated Water Availability Assessments-Concept Map",
      "fundingProviders": ["WBEEP"],
      "previewText":"Mapbox interactive map of natural water storage as an indicator of water availability ",
      "descriptionText":"This is a demonstration map and is not for decision making. It shows the latest " +
          "available daily estimates of natural water storage for approximately 110,000 regions across the " +
          "lower forty-eight states. Map shading indicates the current natural water storage relative to " +
          "historical conditions for this time of year.",
    "thumbnail":"s3://internal.wma.chs.usgs.gov/makerspace-portfolio/water-budget-estimation-evaluation-project/wbeep-water-storage/portfolio-images/wbeep_still_image.png",
    "currentStatus": "complete",
    "currentStatusRationale": "This concept map was released publicly Dec 18, 2019 to meet a deadline defined in the Presidential Memo on Water in the West.",
    "periodsOfWork": [
    {
      "workPeriod": { "startDate": "3.14.19", "endDate": "12.18.19"},
      "contributors": ["Lindsay Platt", "Aaron Briggs", "Alicia Rhoades", "Chip Orr", "David Watkins", "Marty Wernimont", "Megan Hines"],
    }
  ],
    "technologyUsed": ["Mapbox", "Vue", "R"],
    "keyTerms": ["mapbox", "map", "interactive", "vector tiles"],
    "keyPoints": "This was the first Makerspace project. We explored and tested new technologies in order to " +
        "have an interactive map with over 100K features that loaded and performed efficiently for users. Ultimately, " +
        "we chose to use Mapbox vector tiles as the main technology. The application's framework is built using Vue " +
        "and the data behind the tiles was generated in R. It set the foundation for a lot of MxS projects - we " +
        "created the " + ["makerspace-website-base", "https://github.com/usgs-makerspace/makerspace-website-base"] +
        "repository coming out of this project that initiates a simple Vue project framework.",
    "links": [
    ["Website - Production", "https://labs.waterdata.usgs.gov/estimated-availability"],
    ["Website - Quality Assurance", "http://wbeep-qa-website.s3-website-us-west-2.amazonaws.com/estimated-availability/"],
    ["Website - Development", "http://wbeep-test-website.s3-website-us-west-2.amazonaws.com/estimated-availability/"],
    ["Code Repository - Front-end application", "https://github.com/usgs-makerspace/wbeep-viz"],
    ["Code Repository - data processing", "https://github.com/usgs-makerspace/wbeep-processing"],
    ["Code Repository - static map image generation", "https://github.com/usgs-makerspace/wbeep-map-images"],
    ["Outreach - gif animation accompanying initial release", "https://doimspp.sharepoint.com/:i:/r/sites/gs-wma-iidd-makerspace/Shared%20Documents/Project%20-%20WBEEP%20NHM/Availability%20factor%20-%20water%20storage/WBEEP_nov_water_storage_mini_viz/Water_Storage_November_large.gif?csf=1&web=1&e=IZ3rek"],
    ["Outreach - video animation accompanying initial release", "https://doimspp.sharepoint.com/:v:/r/sites/gs-wma-iidd-makerspace/Shared%20Documents/Project%20-%20WBEEP%20NHM/Availability%20factor%20-%20water%20storage/WBEEP_nov_water_storage_mini_viz/WBEEP_November_Water_Storage_for_instagram.mov?csf=1&web=1&e=k5b64d"],
    ["Outreach - gif animation of every day of data for Mindi", "https://doimspp.sharepoint.com/:i:/r/sites/gs-wma-iidd-makerspace/Shared%20Documents/Project%20-%20WBEEP%20NHM/Availability%20factor%20-%20water%20storage/WBEEP%20animation%20of%20days%20since%20release/time-lapse-movie/waterstorage_time_lapse_v3_1080x1920.gif?csf=1&web=1&e=9bxDtV"],
    ["Outreach - video animation of every day of data for Mindi", "https://doimspp.sharepoint.com/:v:/r/sites/gs-wma-iidd-makerspace/Shared%20Documents/Project%20-%20WBEEP%20NHM/Availability%20factor%20-%20water%20storage/WBEEP%20animation%20of%20days%20since%20release/time-lapse-movie/waterstorage_time_lapse_v3_1080x1920.mov?csf=1&web=1&e=7awhYS"],
    ["Outreach - Joe Nielsen water data blog", "https://waterdata.usgs.gov/blog/25-years-of-water-data-on-the-web/"],
    ["Outreach - USGS News Item", "https://www.usgs.gov/center-news/new-usgs-iwaas-product-national-integrated-water-availability-assessments-concept-map"]
  ]
  },

    {

      "id":"9",
      "project": "WBEEP",
      "title":"Three Dimensional Extrusion",
      "fundingProviders": ["WBEEP"],
      "previewText":"3D Extrusion of 110,000 Hydrologic Units",
      "descriptionText":"An experiment to test the viability of using Mapbox GL to render large numbers of polygons in three dimensions",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/three-d-extrusion-test/portfolio-images/3dExtrusionThumbnail.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "The team considered the polygon rendering speed satisfactory and called the test a success.",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "02-10-20", "endDate": "02-13-20"},
          "contributors": ["Aaron Briggs"],
        }
      ],
      "technologyUsed": ["Vue", "JavaScript", "Mapbox"],
      "keyTerms": ["3D Extrusion"],
      "keyPoints": "A demonstration of Mabbox GL's ability to render 110,000 polygons in 3D with minimal lag time.",
      "links": [
        ["deployed application", "http://internal.wma.chs.usgs.gov.s3-website-us-west-2.amazonaws.com/makerspace-portfolio/three-d-extrusion/final-product/index.html"]
      ]
    },

    {
      "id":"8",
      "project": "Gages Through the Ages",
      "title":"Gages Through the Age",
      "fundingProviders": ["VizLab"],
      "previewText":"USGS Monitoring Locations Over Time.",
      "descriptionText":"A visualization including several graphics relating to the changes in density and placement of" +
        "water monitoring locations over the last 130 plus years.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/gages-through-the-ages/portfolio-images/gagesThroughTheAgesThumbnail.jpg",
      "currentStatus": "in progress",
      "currentStatusRationale": "project is moving forward",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "03-30-20", "endDate": "in progress"},
          "contributors": ["Marty Wernimont", "Aaron Briggs"],
        }
      ],
      "technologyUsed": ["Vue", "JavaScript", "Mapbox"],
      "keyTerms": ["JavaScript Animation"],
      "keyPoints": "An animated representation of changes in USGS monitoring locations and density over time.",
      "links": [
        ["deployed application - test", "http://gages-through-ages-test-website.s3-website-us-west-2.amazonaws.com/gages-through-the-ages/#/"],
        ["deployed application - qa", "http://gages-through-ages-qa-website.s3-website-us-west-2.amazonaws.com/gages-through-the-ages/#/"],
        ["deployed application - beta (not released)", "http://gages-through-beta-test-website.s3-website-us-west-2.amazonaws.com/gages-through-the-ages/#/"],
        ["deployed application - prod (not released)", "http://gages-through-prod-test-website.s3-website-us-west-2.amazonaws.com/gages-through-the-ages/#/"]
      ]
    },


    {
      "id":"7",
      "project": "Internal temp",
      "title":"2WP Internal Temp",
      "fundingProviders": ["2WP"],
      "previewText":"Visualisation to Assess Temperature Model",
      "descriptionText":"Visualisation to assess temperature model",
      "thumbnail":"",
      "currentStatus": "Complete",
      "currentStatusRationale": "",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "?", "endDate": "?"},
          "contributors": [""],
        }
      ],
      "technologyUsed": [""],
      "keyTerms": [""],
      "keyPoints": "",
      "links": [

      ]
    },


    {
      "id":"6",
      "project": "A/B Testing",
      "title":"A/B Testing Prototypes",
      "fundingProviders": ["VizLab"],
      "previewText":"Style Changes for Water Watch Changes",
      "descriptionText":"Create prototypes for the control/treatments of replacements for the Watches that include improvements to color scale /symbology",
      "thumbnail":"",
      "currentStatus": "",
      "currentStatusRationale": "",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "?", "endDate": "?"},
          "contributors": [""],
        }
      ],
      "technologyUsed": [""],
      "keyTerms": [""],
      "keyPoints": "",
      "links": [

      ]
    },


    {
      "id":"5",
      "project": "Water Availability",
      "title":"Water Availability Timelapse",
      "fundingProviders": ["IWAA"],
      "previewText":"Timelapse Animation",
      "descriptionText":"Animation Showing Changes in Water Storage During Winter 2020",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/water-availability-time-lapse/portfolio-images/wbeepWinterTimeLapseThumbNail.jpg",
      "currentStatus": "released-date?",
      "currentStatusRationale": "Completed appropriate approval for public release",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "?", "endDate": "?"},
          "contributors": ["Lindsay Platt, Aaron Briggs"],
        }
      ],
      "technologyUsed": ["R, Photoshop"],
      "keyTerms": ["video", "animation"],
      "keyPoints": "A video animation using the daily data retrieved from the Water Availability Assessment map." +
        "The R scripts were used to generate the maps for 80+ days of data. Photoshop was used to stitch the maps" +
        "together and generated the animation.",
      "links": [
        ["finished video", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/water-availability-time-lapse/final-product/waterstorage_time_lapse_PalWidescreen.mp4"],
        ["Animated .gif", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/water-availability-time-lapse/final-product/waterstorage_time_lapse_1080x1920.gif"],
        ["Photoshop Work file", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/water-availability-time-lapse/related-materials/waterstorage_time_lapse_v3_1080x1920.psd"]
      ]
    },


    {
      "id":"4",
      "project": "River Conditions",
      "title":"River Conditions Q1_2020",
      "fundingProviders": ["WSC"],
      "previewText":"Animation of 2020 Q1 U.S. River Conditions",
      "descriptionText":"An animation of important hydrological events.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/river-conditions/portfolio-images/riverConditionsQ12020.jpg",
      "currentStatus": "released-date?",
      "currentStatusRationale": "?",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "2-14-20", "endDate": "2-18-20"},
          "contributors": ["Lindsay Platt"],
        }
      ],
      "technologyUsed": ["R"],
      "keyTerms": ["video", "animation"],
      "keyPoints": "?",
      "links": [
        ["finished video", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/river-conditions/final-product/release_02-18-20/river_conditions_oct_dec_2019_complete.mp4"],
      ]
    },

    {
      "id":"3",
      "project": "Idea Blitz",
      "title":"Where Is Earth's Water",
      "fundingProviders": ["VizLab"],
      "previewText":"Video demonstration of Photoshop animation ",
      "descriptionText":"An animated remake of various graphics from the Water Science School to help learners better " +
        "visualize the tiny percentage of the Earth's water that is consumable by humans.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/where-is-earths-water/portfolio-images/whereIsWater1300x726.jpg",
      "currentStatus": "shelved",
      "currentStatusRationale": "Where is the Earth's Water Video was presented as Idea Blitz item, and no further action has been taken.",
      "periodsOfWork": [
          {
            "workPeriod": { "startDate": "3.23.20", "endDate": "3.27.20"},
            "contributors": ["Aaron Briggs"],
          }
        ],
      "technologyUsed": ["Photoshop"],
      "keyTerms": ["video", "animation"],
      "keyPoints": "This project attempted to demonstrate how the animation capabilities of Photoshop can enhance " +
        "existing static visualizations. In terms of technology, this showed that using 30 frames per second produced smooth" +
        "video. Rendering the video in Photoshop resulted in end products with prodigious file size. However, taking" +
        "the Photoshop rendered video and using online file compression such as https://www.ps2pdf.com/compress-mp4 file " +
        "a file size reduction of 10 to 1 is possible with no noticeable loss in quality.",
      "links": [
        ["finished video", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/where-is-earths-water/final-product/WhereIsWater_p2_30fps_compressed_slowed.mp4"],
        ["Original Water Science School Version", "https://www.usgs.gov/special-topic/water-science-school/science/how-much-water-there-earth?qt-science_center_objects=0#qt-science_center_objects"],
        ["Original Water Science School Version", "https://www.usgs.gov/media/images/distribution-water-and-above-earth-0"]
      ]
    },


    {
      "id":"2",
      "project": "Idea Blitz",
      "title":"Water Quiz",
      "fundingProviders": ["VizLab"],
      "projectsProvidingFunding": ["VizLab"],
      "previewText":"Test Your Water IQ",
      "descriptionText":"A JavaScript based quiz which gives the user immediate feedback.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/water-quiz/portfolio-images/WaterSchoolQuiz1300x726.jpg",
      "currentStatus": "shelved",
      "currentStatusRationale": "Test Your Water IQ quiz was presented as Idea Blitz item, and no further action has been taken.",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "3.23.20", "endDate": "3.27.20"},
          "contributors": ["Marty Wernimont"],
        }
      ],
      "technologyUsed": ["JavaScript, Vue"],
      "keyTerms": ["Quiz", "Water Science School"],
      "keyPoints": "Marty can fill this out better than I can.",
      "links": [
        ["Deployed Application", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/water-quiz/final-product/index.html"],
        ["Original Water Science School Version", "https://water.usgs.gov/edu/activity-tf-properties.html "]
      ]
    },


    {
      "id":"1",
      "project": "Idea Blitz",
      "title":"How Wet Is My State",
      "fundingProviders": ["VizLab"],
      "previewText":"Quickly create and style maps from JSON data",
      "descriptionText":"A JavaScript based quiz which gives the user immediate feedback.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/how-wet-is-my-state/portfolio-images/howWetIsMyState1300x726.jpg",
      "currentStatus": "shelved",
      "currentStatusRationale": "The How Wet Is My State Map Styler was presented as Idea Blitz item, and no further action has been taken.",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "3.23.20", "endDate": "3.27.20"},
          "contributors": ["Aaron Briggs"],
        }
      ],
      "technologyUsed": ["JavaScript, Vue, JSON"],
      "keyTerms": ["Style Maps", "Water Science School"],
      "keyPoints": "The How Wet Is My State Map Styler is a proof-of-concept application. It shows how data from a standard table, with a simple conversion to JSON" +
        "can be used to quickly create sets of maps, styled to taste, for insertion into web pages.",
      "links": [
        ["Deployed Application", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/how-wet-is-my-state/final-product/index.html"],
        ["GitHub", "https://github.com/abriggs-usgs/wbeep-viz/tree/ideaBlitz_waterPerState"],
        ["Original Water Science School Version", "https://www.usgs.gov/special-topic/water-science-school/science/how-wet-your-state-water-area-each-state?qt-science_center_objects=0#qt-science_center_objects "]
      ]
    }
  ]
}
