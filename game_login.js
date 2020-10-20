function login(){
    
    var username1 = document.getElementById("player1Name").value;
    var username2 = document.getElementById("player2Name").value;
    localStorage.setItem("player1Name", username1);
    localStorage.setItem("player2Name", username2);
    window.location = "game_page.html"
}
