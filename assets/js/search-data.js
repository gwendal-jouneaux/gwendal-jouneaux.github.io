// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "List of my presentations with link to the slides",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "List of courses taught and some extra materials.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-500-server-error",
      
        title: '500 Server Error <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-displaying-external-posts-on-your-al-folio-blog",
      
        title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-new-version-of-my-personal-webpage-smile",
          title: 'New version of my personal webpage :smile:',
          description: "",
          section: "News",},{id: "news-now-the-posts-can-be-published-in-advance-and-appear-at-the-selected-date",
          title: 'Now the posts can be published in advance and appear at the selected...',
          description: "",
          section: "News",},{id: "news-the-beginning-of-a-journey-called-phd",
          title: 'The beginning of a journey called PhD',
          description: "",
          section: "News",},{id: "news-visiting-uva-cci-team-for-one-week-a-lot-of-interesting-work-in-perspective",
          title: 'Visiting UvA CCI team for one week. A lot of interesting work in...',
          description: "",
          section: "News",},{id: "news-i-succesfully-defended-my-phd-thesis",
          title: 'I succesfully defended my PhD thesis',
          description: "",
          section: "News",},{id: "news-i-am-now-r-amp-amp-t-scientist-at-the-luxembourg-institute-of-science-and-technology-list",
          title: 'I am now R&amp;amp;amp;T Scientist at the Luxembourg Institute of Science and Technology...',
          description: "",
          section: "News",},{id: "perso-jeux-de-société",
          title: 'Jeux de société',
          description: "Liste des jeux de société que je possède",
          section: "Perso",handler: () => {
              window.location.href = "/perso/jeux";
            },},{id: "perso-wishlist-jeux-de-société",
          title: 'Wishlist jeux de société',
          description: "Liste des jeux de société que je souhaite avoir",
          section: "Perso",handler: () => {
              window.location.href = "/perso/wishlist";
            },},{id: "talks-seals-a-framework-for-building-self-adaptive-virtual-machines",
          title: 'SEALS: A Framework for Building Self-Adaptive Virtual Machines',
          description: "Presentation of the paper, SEALS: A Framework for Building Self-Adaptive Virtual Machines, at SLE 2021",
          section: "Talks",handler: () => {
              window.location.href = "/talks/SLE21/";
            },},{id: "talks-poster-towards-self-adaptable-languages",
          title: 'Poster : Towards Self-Adaptable Languages',
          description: "Poster presentation for the paper, Towards Self-Adaptable Languages, at SPLASH 2021",
          section: "Talks",handler: () => {
              window.location.href = "/talks/SPLASH21-Poster/";
            },},{id: "talks-towards-self-adaptable-languages",
          title: 'Towards Self-Adaptable Languages',
          description: "Presentation of the paper, Towards Self-Adaptable Languages, at Onward! 2021",
          section: "Talks",handler: () => {
              window.location.href = "/talks/Onward21/";
            },},{id: "talks-self-adaptable-virtual-machines-and-their-implementation",
          title: 'Self-Adaptable Virtual Machines and their implementation',
          description: "Presentation of my work at the GT VL day",
          section: "Talks",handler: () => {
              window.location.href = "/talks/GT-VL-2021/";
            },},{id: "talks-self-adaptable-languages-and-adaptive-operational-semantics",
          title: 'Self-Adaptable Languages and adaptive operational semantics',
          description: "Presentation of my work to the ALE associate Team",
          section: "Talks",handler: () => {
              window.location.href = "/talks/ALE-2022/";
            },},{id: "talks-towards-self-adaptable-languages",
          title: 'Towards Self-Adaptable Languages',
          description: "Presentation of my work at the GT IDM during the GdR GPL days",
          section: "Talks",handler: () => {
              window.location.href = "/talks/GdR-GPL-2022/";
            },},{id: "talks-diverse-sals-and-asos",
          title: 'DiverSE, SALs and ASOS',
          description: "Presentation of The DiverSE Team and my previous and ongoing work to the CCI Team at UvA",
          section: "Talks",handler: () => {
              window.location.href = "/talks/UvA-2022/";
            },},{id: "talks-adaptive-structural-operational-semantics",
          title: 'Adaptive Structural Operational Semantics',
          description: "Presentation of the paper, Adaptive Structural Operational Semantics, at SLE 2023",
          section: "Talks",handler: () => {
              window.location.href = "/talks/SLE23/";
            },},{id: "talks-self-adaptable-operational-semantics-challenges-and-opportunities",
          title: 'Self-Adaptable Operational Semantics : Challenges and Opportunities',
          description: "Presentation of the perspectives of my PhD at the GT IDM during the GdR GPL days",
          section: "Talks",handler: () => {
              window.location.href = "/talks/GdR-GPL-2024/";
            },},{id: "talks-self-adaptable-operational-semantics",
          title: 'Self-Adaptable Operational Semantics',
          description: "PhD Defense",
          section: "Talks",handler: () => {
              window.location.href = "/talks/PhD-2024/";
            },},{id: "talks-towards-sustainability-model-cards",
          title: 'Towards Sustainability Model Cards',
          description: "Presentation of the corresponding workshop paper",
          section: "Talks",handler: () => {
              window.location.href = "/talks/Green-AwareAI-2025/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
