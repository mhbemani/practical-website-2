function open_product(){
    
    if(document.getElementById("product-bar").isConnected) 
        document.getElementById("product-bar").style.height = "80dvh"; 
    else document.getElementById("product-bar").ariaExpanded.height = "10dvh";
}
// this is a test
