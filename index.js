const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i= 0 ; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

function writeCards(array, event) {
    const cardMsgs = [];
    for (let i= 0 ; i < array.length ; i++) {
        cardMsgs.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return cardMsgs;
}


function countDown (i) {
    while (i >= 0) {
        console.log(i);
        i-=1;
    }
}