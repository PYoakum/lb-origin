
module.exports = ( app ) => {

    app.get( '/api/hello', (req, res)=>{
        
        
        res.json(
            {
                "dt" : Date.now(),
                "name" : process.env.ORIGIN
            }
        )

    } )
 
}