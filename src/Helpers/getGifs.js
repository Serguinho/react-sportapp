 export const getGifs = async (category) => {
    const url=`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${category}`;
    
    //const url =`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=sUCUD17qzlwUSLv6LSDdqRbbwoQDWJr7`;
    const resp = await fetch( url );
    const {player}  = await resp.json();

    const players = player.map( pla => {
            return {
                id: pla.idPlayer,
                title: pla.strPlayer,
                url: pla.strThumb
            }
             })


    // const gifs = data.map( img => {
    //     return {
    //         id: img.id,
    //         title: img.title,
    //         url: img.images?.downsized_medium.url
    //     }
    // })

    return players;

  }
 