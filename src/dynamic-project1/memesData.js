import p11 from 'images/p11.jpeg'
import p12 from 'images/p12.jpeg'
import p13 from 'images/p13.jpeg'

const memesData={
    "succes":true,
  "data":{
    memes : [
        {
          id: "2345554",
          name: "Hello Meme",
          url:p11,
          width: 600,
          height: 698,
          box_count: 3,
          status:true
        },
        {
          id: "3456789",
          name: "Funny Cat",
          url: p12,
          width: 800,
          height: 600,
          box_count: 2,
          status:false
        },
        {
          id: "9876543",
          name: "Doge Meme",
          url: p13,
          width: 500,
          height: 500,
          box_count: 1,
          status:true
        },
      ]   
  }
}

export default memesData;