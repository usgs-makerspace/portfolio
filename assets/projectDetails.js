// Note for 'currentStatus' please use one of the following choices (note, list may change if needed)
// complete - use this if a defined period of work has ended; this usually results in an official 'product release', but may also be small item work that is a 'proof of concept' or 'Idea Blitz' related.
// shelved - use this if a work on a project has ended, but no product has been officially released, and work might resume at some future date.
// closed - use this for work that has ended, but no product was officially released and there is no intent to resume work on the project at any future date.
// in progress - use this for projectsDetails which are still in active development and require current state of the project to be recorded. This situation is common near the end of fiscal reporting periods.

export default {
  projects: [
    {
      "id": "22",
      "project": "WBEEP Timelapse",
      "title": "Designer Timelapse for Water Storage",
      "fundingProviders": ["VizLab"],
      "previewText": "These 'electric' themes press the edges of the established map-color-bubble.",
      "descriptionText": "Created as an extension of the WBEEP Fall 2020 Water storage gif, these 'designer' color schemes add a little pizazz to challenge the standard USGS design ethic.",
      "thumbnail": "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/fall-water-storage-high-color/final-product/Water_Storage_Patterns_November_purple.gif",
      "currentStatus": "Complete",
      "currentStatusRationale": "Created as concepts for vivid color pallets",
      "periodsOfWork": [
        {
          "workPeriod": {"startDate": "02-17-20", "endDate": "02-18-20"},
          "contributors": ["Lindsay Platt", "Aaron Briggs"],
        }
      ],
      "technologyUsed": ["Photoshop"],
      "keyTerms": ["electric color"],
      "keyPoints": "These graphics ask the user to question, 'is this a map or is it data visualized.'",
      "links": [
        ["purple animation", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/fall-water-storage-high-color/final-product/Water_Storage_Patterns_November_purple.gif"],
        ["green animation", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/fall-water-storage-high-color/final-product/Water_Storage_Patterns_November_green.gif"],
        ["Photoshop purple PSD", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/fall-water-storage-high-color/related-materials/Water_Storage_Patterns_November_tween_purple.psd"],
        ["Photoshop green PSD", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/fall-water-storage-high-color/related-materials/Water_Storage_Patterns_November_tween_green.psd"]
      ]
    },

    {
      "id":"21",
      "project": "Road Salt Viz",
      "title":"Salt Pulse Mockup",
      "fundingProviders": ["VizLab"],
      "previewText":"A concept project illustrating a hypothetical salt pulse.",
      "descriptionText":"A quick mock up of a possible road salt related visualization.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/salt-pulse-mock-up/portfolio-images/saltPulseThumbnail.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "Mock up",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "02-17-20", "endDate": "02-18-20"},
          "contributors": ["Aaron Briggs"],
        }
      ],
      "technologyUsed": ["Photoshop"],
      "keyTerms": ["Salt Pulse", "Road Salt"],
      "keyPoints": "This rough video was created as ground work for a possible visualization which would demonstrate how salt applied to roads upstream eventually makes its way downstream.",
      "links": [
        ["salt pulse video mockup", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/salt-pulse-mock-up/final-product/saltVizMockup_test.gif"],
        ["Photoshop PSD", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/salt-pulse-mock-up/related-materials/saltVizMockup.psd"]
      ]
    },
    {
      "id":"20",
      "project": "Process Diagram",
      "title":"Makerspace Process Diagram",
      "fundingProviders": ["VizLab"],
      "previewText":"Design Sketch of the Makerspace Process",
      "descriptionText":"A prototype video that attempts to capture the process of creation within Makerspace.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-process-video/portfolio-images/makerspaceProcessThumbnail.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "Quick Mockup",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "03-10-20", "endDate": "03-11-20"},
          "contributors": ["Aaron Briggs"],
        }
      ],
      "technologyUsed": ["Photoshop"],
      "keyTerms": ["Video", "Team Process"],
      "keyPoints": "This was a quick mock up based on team discussions of processes. This work also improved our use of Photoshop for video creation and methods of video compression.",
      "links": [
        ["Makerspace Process Video", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-process-video/final-product/TheMakerspaceProcess.mp4"],
        ["Makerspace Process .gif", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-process-video/final-product/WeAreMakerspace.gif"],
        ["Photoshop PSD", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-process-video/related-materials/WeAreMakerspace.psd"]
      ]
    },

    {
      "id":"19",
      "project": "Idea Blitz",
      "title":"Delaware Tour",
      "fundingProviders": ["VizLab"],
      "previewText":"A tour of monitoring locations in the Delaware Basin",
      "descriptionText":"An interactive 'map story' application that takes the users on a virtual tour of the multitude of monitoring locations in the Delware River Basin.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-january/delaware-tour/portfolio-images/drbTourThumbnail.jpg",
      "currentStatus": "Shelved",
      "currentStatusRationale": "Proved valuable in terms of learning tools, but did not have a clear hook for users.",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "01-06-20", "endDate": "01-15-20"},
          "contributors": ["Marty Wernimont", "Megan Hines", "Aaron Briggs", "Chip Orr"],
        }
      ],
      "technologyUsed": ["Vue", "JavaScript", "D3", "Mapbox"],
      "keyTerms": ["map story"],
      "keyPoints": "While this effort did not lead to a released product, it did widen the team's skill set. Some of the many new skills gained were D3 and Mapbox integration, scrolly telling with maps, toggling style layer, map overlays and automated GeoJson layer additions.",
      "links": [
        ["Deployed Application", "http://internal.wma.chs.usgs.gov.s3-website-us-west-2.amazonaws.com/makerspace-portfolio/idea-blitz/2020-january/delaware-tour/final-product"]
      ]
    },

    {
      "id":"18",
      "project": "Idea Blitz",
      "title":"Stream Flow Report",
      "fundingProviders": ["VizLab"],
      "previewText":"An interactive version of the stream flow report.",
      "descriptionText":"An interative presentation that converts the bland 'Stream Flow Report' into an interesting user experience.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-january/stream-flow-report-revisited/portfolio-images/streamFlowThumbnail.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "Short term research",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "01-06-20", "endDate": "01-10-20"},
          "contributors": ["Marty Wernimont", "Megan Hines", "Aaron Briggs"],
        }
      ],
      "technologyUsed": ["Vue", "Mapbox", "GeoJson"],
      "keyTerms": ["Interactive", "Story Map"],
      "keyPoints": "",
      "links": [
        ["Deployed Application", "http://internal.wma.chs.usgs.gov.s3-website-us-west-2.amazonaws.com/makerspace-portfolio/idea-blitz/2020-january/stream-flow-report-revisited/final-product"]
      ]
    },

    {
      "id":"17",
      "project": "Idea Blitz",
      "title":"Forcast Noodle",
      "fundingProviders": ["VizLab"],
      "previewText":"Predictive Forcast Noodle",
      "descriptionText":"",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-january/forecast-noodle/portfolio-images/forcastNoodleThumbnail.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "Short term research",
      "periodsOfWork": [
        {
          "workPeriod": {"startDate": "01-06-20", "endDate": "01-10-20"},
          "contributors": ["Lindsay Platt", "David Watkins"],
        }
      ],
      "technologyUsed": ["R"],
      "keyTerms": [""],
      "keyPoints": "",
      "links": [
        ["Animated .gif", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-january/forecast-noodle/final-product/forecast_noodle_friday_updates.mp4"]
      ]
    },

    {
      "id":"16",
      "project": "Idea Blitz",
      "title":"MEA Data",
      "fundingProviders": ["VizLab"],
      "previewText":"MEA Data Visualized with D3",
      "descriptionText":"",
      "thumbnail":"",
      "currentStatus": "Complete",
      "currentStatusRationale": "Short term research",
      "periodsOfWork": [
        {
          "workPeriod": {"startDate": "01-06-20", "endDate": "01-10-20"},
          "contributors": ["Chip Orr"],
        }
      ],
      "technologyUsed": ["D3"],
      "keyTerms": [""],
      "keyPoints": "",
      "links": [
        ["", ""]
      ]
    },

    {
      "id":"15",
      "project": "Idea Blitz",
      "title":"Interactive PH Scale",
      "fundingProviders": ["VizLab"],
      "previewText":"Interactive PH Scale",
      "descriptionText":"For the water science school, a new concept for learning about PH.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/ph-scale/portfolio-images/phThumbnail.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "Short term research",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "03-20-20", "endDate": "03-24-20"},
          "contributors": ["Megan Hines"],
        }
      ],
      "technologyUsed": [""],
      "keyTerms": [""],
      "keyPoints": "",
      "links": [
        ["Power Point", "https://doimspp.sharepoint.com/:p:/r/sites/gs-wma-iidd-makerspace/_layouts/15/Doc.aspx?sourcedoc=%7B62C4513A-86DB-4507-A7FE-3A2FAAC03D4B%7D&file=Water%20Science%20School%20-%20Interactive%20pH%20scale.pptx&action=edit&mobileredirect=true"]
      ]
    },

    {
      "id":"14",
      "project": "Idea Blitz",
      "title":"Ground Water Depletion",
      "fundingProviders": ["VizLab"],
      "previewText":"Ground Water Depletion",
      "descriptionText":"Review of Ground Water Depletion",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/ground-water-depletion/portfolio-images/groundWaterDepletionThumbnail.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "Short term research",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "03-20-20", "endDate": "03-24-20"},
          "contributors": ["Megan Hines"],
        }
      ],
      "technologyUsed": [""],
      "keyTerms": [""],
      "keyPoints": "",
      "links": [
        ["Power Point", "https://doimspp.sharepoint.com/:p:/r/sites/gs-wma-iidd-makerspace/_layouts/15/Doc.aspx?sourcedoc=%7B7E50AA72-12D8-4627-8116-1D7BD0F0EBB1%7D&file=Groundwater%20Depletion.pptx&action=edit&mobileredirect=true"]
      ]
    },

    {
      "id":"13",
      "project": "Idea Blitz",
      "title":"A/B Testing",
      "fundingProviders": ["VizLab"],
      "previewText":"A/B Testing",
      "descriptionText":"Review of A/B testing techniques",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/a-b-testing/portfolio-images/ABTesting.jpg",
      "currentStatus": "Complete",
      "currentStatusRationale": "Short term research",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "03-20-20", "endDate": "03-24-20"},
          "contributors": ["David Watkins"],
        }
      ],
      "technologyUsed": [""],
      "keyTerms": [""],
      "keyPoints": "",
      "links": [
        ["Power Point", "https://doimspp-my.sharepoint.com/:p:/g/personal/wwatkins_usgs_gov/ETWS8bc647hKqctSzzrJJ0YBEkEepAIq8PHmQshu643SwA?e=gZME0L"]
      ]
    },

    {
      "id":"12",
      "project": "Idea Blitz",
      "title":"Rethink Coastal Viz",
      "fundingProviders": ["VizLab"],
      "previewText":"Rethink Coastal Visualizations",
      "descriptionText":"",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/coastal-focus-rethink/final-product/lplatt_all_coasts_transition_bars.gif",
      "currentStatus": "Complete",
      "currentStatusRationale": "Short term experiment",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "03-20-20", "endDate": "03-24-20"},
          "contributors": ["Lindsay Platt"],
        }
      ],
      "technologyUsed": ["R"],
      "keyTerms": ["coastal"],
      "keyPoints": "",
      "links": [
        ["animated .gif", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/coastal-focus-rethink/final-product/lplatt_all_coasts_transition_bars.gif"]
      ]
    },

    {
      "id":"11",
      "project": "Makerspace",
      "title":"Makerspace Journal",
      "fundingProviders": ["VizLab"],
      "previewText":"A demonstration of VuePress",
      "descriptionText":"A prototype project to demonstrate documentation made easy with the VuePress framework.",
      "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/makerspace-journal/portfolio-images/JournalThumbnail.jpg",
      "currentStatus": "Shelved",
      "currentStatusRationale": "This was a proof of concept. In theory it worked well, but there was little adoption from the team and so no further work is underway.",
      "periodsOfWork": [
        {
          "workPeriod": { "startDate": "01-10-20", "endDate": "01-13-20"},
          "contributors": ["Aaron Briggs"],
        }
      ],
      "technologyUsed": ["Vue", "JavaScript", "VuePress"],
      "keyTerms": ["blog", "journal"],
      "keyPoints": "This was a demonstration of VuePress to maintain documentation.",
      "links": [
        ["deployed application", "http://internal.wma.chs.usgs.gov.s3-website-us-west-2.amazonaws.com/makerspace-portfolio/makerspace-journal/final-product"]
      ]
    },

    {
      "id":"10",
      "project": "WBEEP - Natural Water Storage Concept Map",
      "title":"National Integrated Water Availability Assessments-Concept Map",
      "fundingProviders": ["WBEEP"],
      "previewText":"Mapbox interactive map of natural water storage as an indicator of water availability ",
      "descriptionText":"This is a demonstration map and is not for decision making. It shows the latest available daily estimates of natural water storage for approximately 110,000 regions across the lower forty-eight states. Map shading indicates the current natural water storage relative to historical conditions for this time of year.",
    "thumbnail":"https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/water-budget-estimation-evaluation-project/wbeep-water-storage/portfolio-images/wbeep_still_image.png",
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
    "keyPoints": "This was the first Makerspace project. We explored and tested new technologies in order to have an interactive map with over 100K features that loaded and performed efficiently for users. Ultimately, we chose to use Mapbox vector tiles as the main technology. The application's framework is built using Vue and the data behind the tiles was generated in R. It set the foundation for a lot of MxS projectsDetails - we created the repository coming out of this project that initiates a simple Vue project framework.",
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
        ["deployed application", "http://internal.wma.chs.usgs.gov.s3-website-us-west-2.amazonaws.com/makerspace-portfolio/three-d-extrusion-test/final-product"]
      ]
    },

    {
      "id":"8",
      "project": "Gages Through the Ages",
      "title":"Gages Through the Age",
      "fundingProviders": ["VizLab"],
      "previewText":"USGS Monitoring Locations Over Time.",
      "descriptionText":"A visualization including several graphics relating to the changes in density and placement of water monitoring locations over the last 130 plus years.",
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
      "keyPoints": "A video animation using the daily data retrieved from the Water Availability Assessment map. The R scripts were used to generate the maps for 80+ days of data. Photoshop was used to stitch the maps together and generated the animation.",
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
      "descriptionText":"An animated remake of various graphics from the Water Science School to help learners better visualize the tiny percentage of the Earth's water that is consumable by humans.",
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
      "keyPoints": "This project attempted to demonstrate how the animation capabilities of Photoshop can enhance existing static visualizations. In terms of technology, this showed that using 30 frames per second produced smooth video. Rendering the video in Photoshop resulted in end products with prodigious file size. However, taking the Photoshop rendered video and using online file compression such as https://www.ps2pdf.com/compress-mp4 file a file size reduction of 10 to 1 is possible with no noticeable loss in quality.",
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
      "keyPoints": "The How Wet Is My State Map Styler is a proof-of-concept application. It shows how data from a standard table, with a simple conversion to JSON can be used to quickly create sets of maps, styled to taste, for insertion into web pages.",
      "links": [
        ["Deployed Application", "https://s3-us-west-2.amazonaws.com/internal.wma.chs.usgs.gov/makerspace-portfolio/idea-blitz/2020-march/how-wet-is-my-state/final-product/index.html"],
        ["GitHub", "https://github.com/abriggs-usgs/wbeep-viz/tree/ideaBlitz_waterPerState"],
        ["Original Water Science School Version", "https://www.usgs.gov/special-topic/water-science-school/science/how-wet-your-state-water-area-each-state?qt-science_center_objects=0#qt-science_center_objects "]
      ]
    }
  ]
}
