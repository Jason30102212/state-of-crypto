ABOUT THIS SITE:
- This site will display information within the blockchain industry. Initially, it will display Cryptocurrency prices retrieved from a REST api from CryptoCompare.

INSTALL:
1. TECHNOLOGIES TO USE:
    - Frontend:
      - React
      - JavaScript/ J-Query
      - HTML
      - CSS
      - Bootstrap
      - Mongoose
      - node.js
      - axios

    - Other
      - GIT
      - Heroku
      - Postman

CONTENT SOURCES:


SCRUM:

- Product Backlog (Prioritized list of features):
    - 2/17/2019
      - TRANSFERED TO SPRINT BACKLOG: Priority 1. Create Basic Components for layout
      - TRANSFERED TO SPRINT BACKLOG: Priority 2. Extract Cryptocurrency data to display and create a component
      - TRANSFERED TO SPRINT BACKLOG: Priority 1. Explore the CryptoCompare API and think if ideas for site components
      - TRANSFERED TO SPRINT BACKLOG: Priority 1. Will need to create component to display top ten cryptos compared to USD
      - TRANSFERED TO SPRINT BACKLOG: Priority 1. Will need to create component to display top ten cryptos compared to BTC
      - TRANSFERED TO SPRINT BACKLOG: Priority 2. Will consider creating a  component to display specific cryptos and data based on user selection
      - Priority 1. Front page will need to be updated
      - Priority 2. Further ideas will need to be generated to incorporate into site
      - Priority 3. Footer needs to be fixed for all pages

- Sprint Backlog:
    - 2/17/2019
    - COMPLETE: Priority 1. Create Basic Components for layout
    - COMPLETE: Priority 2. Extract Cryptocurrency data to display
    - COMPLETE: Priority 1. Explore the CryptoCompare API and think if ideas for site components
    - COMPLETE: Priority 1. Will need to create component to display top ten cryptos compared to USD
    - COMPLETE: Priority 1. Will need to create component to display top ten cryptos compared to BTC
    - COMPLETE: Priority 2. Will consider creating a  component to display specific cryptos and data based on user selection


- SPRINT LOG:

  - 2/19/2019 Third Sprint
    - Plan:
      - 2/19/2019
        - Will need to create component to display top ten cryptos compared to USD
        - Will need to create component to display top ten cryptos compared to BTC
        - Will consider creating a component to display specific cryptos and data based on user selection
    - Build:
      - 2/19/2019
        - Created component for both top ten for BTC and USD, but incorporated them into one component showing top ten for drop down selection
    - Test:
      - 2/19/2019
        - Component seems to be working correctly
        - Link to route working correctly
    - Review:
      - 2/19/2019
        - Front page will need to be updated
        - Further ideas will need to be generated to incorporate into site
        - Footer needs to be fixed for all pages

    - 2/18/2019 Second Sprint
      - Plan:
        - 2/18/2019
          - View the results that are extractable from the CryptoCompare REST api
          - Develop ideas for the app and document
      - Build:
        - 2/18/2019
          - Created app-ideas folder
          - Created file demo-data.js to store demo data from API
          - ideas
            - Display top ten currencies based on USD value
              - Achievable with a API GET request to get top 10 list and then a GET request for the coins compared to USD
            - Display top ten currencies based on BTC value
              - Achievable with a API GET request to get top 10 list and then a GET request for the coins compared to BTC
            - Possibly display currency conversions based on user input
              - Will probably require additional API requests for each token
      - Test:
        - 2/18/2019
          - NA
      - Review:
        - 2/18/2019
          - Will need to create component to display top ten cryptos compared to USD
          - Will need to create component to display top ten cryptos compared to BTC
          - Will consider creating a  component to display specific cryptos and data based on user selection          

    - 2/17/2019 First Sprint  
      - Plan:
        - 2/17/2019
          - Preparation:
            - Priority 1. Create Basic Components for layout
            - Priority 2. Extract Cryptocurrency data to display and create a component
            - !! ignore cryptoCompareConsts.js
      - Build:
        - 2/17/2019
          - Create Basic Components for layout
      - Test:
        - 2/17/2019
          - React site runs
          - Data extracted from CryptoCompare REST API
      - Review:  
        - 2/17/2019
          - Will need to think of ways to use extracted REST API data from CryptoCompare
