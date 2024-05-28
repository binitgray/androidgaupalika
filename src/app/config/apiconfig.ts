let Base_URL="http://202.51.74.85:6003"
let Host_URL="https://localhost:3000";
// let Base_URL="https://localhost:44325"
  //let Base_URL="https://localhost:44325";
  const Weather="http://dataservice.accuweather.com/forecasts/v1/hourly/1hour/241809?apikey=92qhweritEx8Ag7GIb3VAdg2XGrvEvDp"; 
let apiEndPoints: {
    api: string;
    base: string;
    baseUrl:string,
    hostUrl:string
};

function getApiEndPoints() {
    switch (process.env.NODE_ENV) {
        case "development":
            apiEndPoints = {               
                api: Base_URL,
                base: "/",
                baseUrl:Base_URL,
                hostUrl:Host_URL
            };
            break;
        case "production":
            apiEndPoints = {               
                api: Base_URL,
                base: "/",
                baseUrl:Base_URL,
                hostUrl:Host_URL
            };
            break;

        default:
            apiEndPoints = {               
                api: Base_URL,
                base: "/",
                baseUrl:Base_URL,
                hostUrl:Host_URL
            };
    }
    return apiEndPoints;
}
export const ApiEndPoints = getApiEndPoints();
