url = document.getElementById("url");

function sendMessage(message) {
    console.log(message);
    const request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1078419441005641729/XwlqbpqWprCaHGSCNi-T7KzpoXUTJdRngtOUB3qdiCumASO1sJd4aLqw0dwpQUtu2iYA");

    request.setRequestHeader('Content-type', 'application/json');
    
    const params = {
        username: "poopoo",
        avatar_url: "",
        content: message
    }

    request.send(JSON.stringify(params));
}
