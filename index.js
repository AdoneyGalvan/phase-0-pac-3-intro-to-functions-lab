const shout = (pharse) => {
    return pharse.toUpperCase();
}

const whisper = (pharse) => {
    return pharse.toLowerCase();
}

const logShout = (pharse) => {
    console.log(pharse.toUpperCase());
}

const logWhisper = (pharse) => {
    console.log(pharse.toLowerCase());
}

const sayHiToHeadphonedRoommate = (pharse) => {
    
    if (pharse === "Let's have dinner together!")
    {
        return "I would love to!";
    }
    if (pharse === pharse.toLowerCase())
    {
        return "I can't hear you!";
    }
    else 
    {
        return "YES INDEED!";
    }
} 