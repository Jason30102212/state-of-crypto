

// Data from the CryptoCompare REST API is extracted by making a get request with axios

// Main URL:
// https://min-api.cryptocompare.com/data/

// Type of request:
// - price                prices for a single symbol
// -pricemulti            prices for multiple symbols
// -pricemultifull        full data for multiple symbols
// -generateAvg           generate average price based on specific exchanges

// Parameters

//  -price
//    - fsym              Symbol of interest
//    - tsyms             Symbols to convert price into (Comma seperated)
//
// Example                https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR
//
// Object
//  USD: 2.98
//  JPY: 328.93
//  EUR: 2.61


//  -pricemulti
//    - fsyms             Symbols of interest
//    - tsyms             Symbols to convert prices into (Comma seperated)
//
// Example                https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,DASH&tsyms=BTC,USD,EUR\
//
// Object
// BTC: Object
//  USD: 3730.95
//  EUR: 3282.14
// ETH: Object
//  USD: 138.24
//  EUR: 121.01

//  -pricemultifull
//    - fsyms              Symbols list
//    - tsyms              Symbols to compare (Comma seperated)

//Example                  https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD,EUR
//
// Object
//  RAW: Object
//    BTC: Object
//      USD: Object
//        TYPE: "5"
//        MARKET: "CCCAGG"
//        FROMSYMBOL: "BTC"
//        TOSYMBOL: "USD"
//        FLAGS: "4"
//        PRICE: 3731.05
//        LASTUPDATE: 1550460869
//        LASTVOLUME: 0.78624438
//        LASTVOLUMETO: 2893.3793184
//        LASTTRADEID: "59360745"
//        VOLUMEDAY: 20175.27594330215
//        VOLUMEDAYTO: 75027774.386755
//        VOLUME24HOUR: 54277.13634497071
//        VOLUME24HOURTO: 199303490.64924687
//        OPENDAY: 3670.92
//        HIGHDAY: 3780.77
//        LOWDAY: 3661.42
//        OPEN24HOUR: 3633.68
//        HIGH24HOUR: 3783.45
//        LOW24HOUR: 3603.56
//        LASTMARKET: "Coinbase"
//        VOLUMEHOUR: 3618.4880389030327
//        VOLUMEHOURTO: 13578019.46193455
//        OPENHOUR: 3720.4
//        HIGHHOUR: 3748.53
//        LOWHOUR: 3718.22
//        CHANGE24HOUR: 97.37000000000035
//        CHANGEPCT24HOUR: 2.6796525836067113
//        CHANGEDAY: 60.13000000000011
//        CHANGEPCTDAY: 1.6380090004685501
//        SUPPLY: 17544200
//        MKTCAP: 65458287410
//        TOTALVOLUME24H: 401538.5906008974
//        TOTALVOLUME24HTO: 1494953339.5508223
//        IMAGEURL: "/media/19633/btc.png"
//      EUR: Object
          // TYPE: "5"
          // MARKET: "CCCAGG"
          // FROMSYMBOL: "BTC"
          // TOSYMBOL: "EUR"
          // FLAGS: "4"
          // PRICE: 3280.69
          // LASTUPDATE: 1550460869
          // LASTVOLUME: 0.0035
          // LASTVOLUMETO: 11.3603
          // LASTTRADEID: "0bca46fc-60e5-4aa2-b287-6cf9597649a1"
          // VOLUMEDAY: 2210.742965620003
          // VOLUMEDAYTO: 7235621.271425321
          // VOLUME24HOUR: 7588.35718567
          // VOLUME24HOURTO: 24539263.77597886
          // OPENDAY: 3238.94
          // HIGHDAY: 3320.33
          // LOWDAY: 3221.63
          // OPEN24HOUR: 3203.59
          // HIGH24HOUR: 3327.56
          // LOW24HOUR: 3182.65
          // LASTMARKET: "CoinFalcon"
          // VOLUMEHOUR: 277.26683998999965
          // VOLUMEHOURTO: 918289.4553626082
          // OPENHOUR: 3271.66
          // HIGHHOUR: 3294.38
          // LOWHOUR: 3270.55
          // CHANGE24HOUR: 77.09999999999991
          // CHANGEPCT24HOUR: 2.4066750114715023
          // CHANGEDAY: 41.75
          // CHANGEPCTDAY: 1.2890019574305174
          // SUPPLY: 17544200
          // MKTCAP: 57557081498
          // TOTALVOLUME24H: 401538.5906008974
          // TOTALVOLUME24HTO: 1316967855.0389812
          // IMAGEURL: "/media/19633/btc.png"
//        DISPLAY: Object
//          BTC: Object
//            USD: Object
              // FROMSYMBOL: "Ƀ"
              // TOSYMBOL: "$"
              // MARKET: "CryptoCompare Index"
              // PRICE: "$ 3,731.05"
              // LASTUPDATE: "Just now"
              // LASTVOLUME: "Ƀ 0.7862"
              // LASTVOLUMETO: "$ 2,893.38"
              // LASTTRADEID: "59360745"
              // VOLUMEDAY: "Ƀ 20,175.3"
              // VOLUMEDAYTO: "$ 75,027,774.4"
              // VOLUME24HOUR: "Ƀ 54,277.1"
              // VOLUME24HOURTO: "$ 199,303,490.6"
              // OPENDAY: "$ 3,670.92"
              // HIGHDAY: "$ 3,780.77"
              // LOWDAY: "$ 3,661.42"
              // OPEN24HOUR: "$ 3,633.68"
              // HIGH24HOUR: "$ 3,783.45"
              // LOW24HOUR: "$ 3,603.56"
              // LASTMARKET: "Coinbase"
              // VOLUMEHOUR: "Ƀ 3,618.49"
              // VOLUMEHOURTO: "$ 13,578,019.5"
              // OPENHOUR: "$ 3,720.40"
              // HIGHHOUR: "$ 3,748.53"
              // LOWHOUR: "$ 3,718.22"
              // CHANGE24HOUR: "$ 97.37"
              // CHANGEPCT24HOUR: "2.68"
              // CHANGEDAY: "$ 60.13"
              // CHANGEPCTDAY: "1.64"
              // SUPPLY: "Ƀ 17,544,200.0"
              // MKTCAP: "$ 65.46 B"
              // TOTALVOLUME24H: "Ƀ 401.54 K"
              // TOTALVOLUME24HTO: "$ 1,494.95 M"
              // IMAGEURL: "/media/19633/btc.png"
//       EUR: Object
//         FROMSYMBOL: "Ƀ"
//          TOSYMBOL: "€"
            // MARKET: "CryptoCompare Index"
            // PRICE: "€ 3,280.69"
            // LASTUPDATE: "Just now"
            // LASTVOLUME: "Ƀ 0.003500"
            // LASTVOLUMETO: "€ 11.36"
            // LASTTRADEID: "0bca46fc-60e5-4aa2-b287-6cf9597649a1"
            // VOLUMEDAY: "Ƀ 2,210.74"
            // VOLUMEDAYTO: "€ 7,235,621.3"
            // VOLUME24HOUR: "Ƀ 7,588.36"
            // VOLUME24HOURTO: "€ 24,539,263.8"
            // OPENDAY: "€ 3,238.94"
            // HIGHDAY: "€ 3,320.33"
            // LOWDAY: "€ 3,221.63"
            // OPEN24HOUR: "€ 3,203.59"
            // HIGH24HOUR: "€ 3,327.56"
            // LOW24HOUR: "€ 3,182.65"
            // LASTMARKET: "CoinFalcon"
            // VOLUMEHOUR: "Ƀ 277.27"
            // VOLUMEHOURTO: "€ 918,289.5"
            // OPENHOUR: "€ 3,271.66"
            // HIGHHOUR: "€ 3,294.38"
            // LOWHOUR: "€ 3,270.55"
            // CHANGE24HOUR: "€ 77.10"
            // CHANGEPCT24HOUR: "2.41"
            // CHANGEDAY: "€ 41.75"
            // CHANGEPCTDAY: "1.29"
            // SUPPLY: "Ƀ 17,544,200.0"
            // MKTCAP: "€ 57.56 B"
            // TOTALVOLUME24H: "Ƀ 401.54 K"
            // TOTALVOLUME24HTO: "€ 1,316.97 M"
            // IMAGEURL: "/media/19633/btc.png"



// ideas
// Display top ten currencies based on USD value
//    - Achievable with a API GET request to get top 10 list and then a
//    GET request for the coins compared to USD

// Display top ten currencies based on BTC value
//    - Achievable with a API GET request to get top 10 list and then a
//    GET request for the coins compared to BTC

// Possibly display currency conversions based on user input
//    - Will probably require additional API requests for each token
