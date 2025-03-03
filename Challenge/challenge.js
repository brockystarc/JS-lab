const Pokemon = {
    name: "Pikachu",
    type: "Electric"
};



const promise = new promise(
    function(resolve, reject){
        setTimeout(() => {
            resolve(
                {
                name: "Pikachu",
                type: "Electric"
            }
            );
        }, 3000);
    }
);

const pokeman = promise;

Response = pokeman.then((res) => {
    console.log("SUCCESS", res);
})
.catch((err) => {
    console.log("ERROR", err);
});