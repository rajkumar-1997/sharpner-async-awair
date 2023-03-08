console.log('person1: show ticket');
console.log('person2: show ticket');

const premovie=async ()=>{
    const promisewifebreggingticket=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('ticket');
        },3000);

    });

    let ticket=await promisewifebreggingticket;
    console.log('wife:i have tickets');
    console.log('husband:should we go');
    console.log('wife:no i am hungery');

    const getpopcorn=new Promise((resolve,reject)=>{
        resolve('popcorn');
    });

    
    const getbutter=new Promise((resolve,reject)=>{
        resolve('butter');
    });

    const getcoldrinks=new Promise((resolve,reject)=>{
        resolve('coldrinks');
    });


    let popcorn=await getpopcorn;
    console.log(`husband: i got some ${popcorn}`);
    console.log('husband:should we go');
    console.log('wife:no i need butter on popcorn');

    let butter=await getbutter;
    console.log(`husband: i got some ${butter}`);
    console.log('husband:should we go');
    console.log('wife:No we need coldrinks');

    let coldrink=await getcoldrinks;

    console.log(`husband: i got 2 ${coldrink}`);
    console.log('husband:should we go');
    console.log('wife:yes we are late');
    
    return ticket;
}

premovie().then((e)=>{
  console.log(`person3: show ${e}`);
})

console.log('person4: show ticket');
console.log('person5: show ticket');