var api ={
    getData(){
        var url='https://bot.camouflage81.hasura-app.io/test';
        return fetch(url).then((res)=>res.json());
    }
};

module.exports = api;