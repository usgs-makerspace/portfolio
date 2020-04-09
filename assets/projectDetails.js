export default {
  projects: [
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
